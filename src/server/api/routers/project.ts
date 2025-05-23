import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { pollCommits } from "@/lib/github";
import { checkCredits, indexGithubRepo } from "@/lib/github-loader";


export const projectRouter = createTRPCRouter({
  createProject: protectedProcedure.input(
    z.object({
      name: z.string(),
      githubUrl: z.string(),
      githubToken: z.string().optional(),
    })
  ).mutation(async ({ ctx, input }) => {
    // Ensure the user exists in the database
    const user = await ctx.db.user.findUnique({
      where: {
        id: ctx.user.userId!,
      },select:{credits:true}
    });

    if (!user) {
      throw new Error("User not found in the database.");
    }

    const currentCredits = user.credits || 0
    const fileCount = await checkCredits(input.githubUrl, input.githubToken)

    if(currentCredits < fileCount){
      throw new Error("Insufficient credits to index this repository")  
    }

    // Create the project and the association with the user
    const project = await ctx.db.project.create({
      data: {
        githubUrl: input.githubUrl,
        name: input.name,
        UserToProjects: {
          create: {
            userId: ctx.user.userId!,
          },
        },
      },
    });

    await indexGithubRepo(project.id, input.githubUrl, input.githubToken)
    await pollCommits(project.id)
    await ctx.db.user.update({where:{id:ctx.user.userId!},data:{credits: currentCredits - fileCount}})

    return project;
  }),
  getProjects: protectedProcedure.query(async({ctx})=>{
    return await ctx.db.project.findMany({
        where: {
           UserToProjects:{
            some:{
                userId: ctx.user.userId!
            }
           }, 
           deletedAt: null
        }
    })
  }),
  getCommits: protectedProcedure.input(z.object({
    projectId:z.string()
  })).query(async ({ctx,input})=>{

   pollCommits(input.projectId).then().catch(console.error)
    return await ctx.db.commit.findMany({where:{projectId:input.projectId}})
  }),
  saveAnswer: protectedProcedure.input(z.object({
    projectId: z.string(),
    question: z.string(),
    answer: z.string(),
    filesReferences: z.any()
  })).mutation(async ({ ctx, input }) => {
    return await ctx.db.question.create({
      data: {
        answer: input.answer,
        filesReferences: input.filesReferences,
        projectId: input.projectId,
        question: input.question,
        userId: ctx.user.userId!,
      }
    });
  }),
  getQuestions: protectedProcedure.input(z.object({ projectId: z.string() })).query(async ({ ctx, input }) => {
    return await ctx.db.question.findMany({
        where: {
            projectId: input.projectId
        },
        include: {
            user: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
}),
  uploadMeting: protectedProcedure.input(z.object({projectId: z.string(), meetingUrl: z.string(), name: z.string()})).mutation(async({ctx,input})=>{
     const meetting = await ctx.db.meeting.create({
          data:{
              meetingUrl: input.meetingUrl,
              projectId: input.projectId,
              name: input.name,
              status: 'PROCESSING'
          }
     })
     return meetting
  }),
  getMeetings: protectedProcedure.input(z.object({projectId: z.string() })).query(async({ctx,input})=>{
    return await ctx.db.meeting.findMany({where:{projectId: input.projectId}, include:{issues:true}})
  }),
  deleteMeeting: protectedProcedure.input(z.object({meetingId: z.string()})).mutation(async({ctx, input})=>{
    return await ctx.db.meeting.delete({where:{id:input.meetingId}})
  }),
  getMeetingById: protectedProcedure.input(z.object({meetingId: z.string()})).query(async({ctx, input})=>{
    return await ctx.db.meeting.findUnique({where:{id:input.meetingId},include:{issues:true}})
  }),
  archiveProject: protectedProcedure.input(z.object({projectId: z.string()})).mutation(async({ctx,input})=>{
    return await ctx.db.project.update({where: {id: input.projectId},data:{deletedAt: new Date() }})
  }),
  getTeamMembers: protectedProcedure.input(z.object({ projectId: z.string() })).query(async ({ ctx, input }) => {
    return await ctx.db.userToProject.findMany({ where: { projectId: input.projectId }, include: { user: true } })
  }),
  getMyCredits: protectedProcedure.query(async({ctx})=>{
    return await ctx.db.user.findUnique({where:{id:ctx.user.userId!},select:{credits:true}})
  }),
  checkCredits: protectedProcedure.input(z.object({githubUrl: z.string(), githubToken: z.string().optional()})).mutation(async({ctx, input})=>{
    const fileCount= await checkCredits(input.githubUrl, input.githubToken)
    const userCredits=await ctx.db.user.findUnique({where:{id:ctx.user.userId!},select:{credits:true}})
    return {fileCount, userCredits: userCredits?.credits|| 0}
  }),
  getMyTransactions: protectedProcedure.query(async ({ ctx }) => {
    const { userId } = ctx.user;
    if (!userId) {
        throw new Error("Unauthorized");
    }

    const transactions = await ctx.db.stripeTransaction.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' }, // Show latest transactions first
    });

    return transactions;
}),

});
