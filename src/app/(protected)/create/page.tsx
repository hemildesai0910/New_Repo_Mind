// "use client"

// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import useRefetch from '@/hooks/use-refetch';
// import { checkCredits } from '@/lib/github-loader';
// import { api } from '@/trpc/react';
// import { Info } from 'lucide-react';
// import React from 'react'
// import { useForm } from 'react-hook-form';
// import { toast } from 'sonner';

// type FormInput = {
//     repoUrl: string;
//     projectName: string;
//     githubToken?: string;
// }
// const CreatePage = () => {
//     const {register, handleSubmit, reset} = useForm<FormInput>()
//     const createProject = api.project.createProject.useMutation()
//     const checkCredits = api.project.checkCredits.useMutation()
//     const refetch = useRefetch()
 
//     function onSubmit(data: FormInput){
//         //window.alert(JSON.stringify(data,null,2)); githubUrl
//         if(!!checkCredits.data){
            
//         createProject.mutate({
//             githubUrl: data.repoUrl,
//             name: data.projectName,
//             githubToken: data.githubToken
//         },{
//             onSuccess: ()=>{
//                 toast.success("Project created successfully")
//                 refetch()
//                 reset()
//             },
//             onError: ()=>{
//                 toast.error(`Failed to create project`)
//             }
//         })
//         }else{
//             checkCredits.mutate({
//                 githubUrl: data.repoUrl,
//                 githubToken: data.githubToken
//             })
//         }
//     }

//     const hasEnoughCredits = checkCredits.data?.userCredits ? checkCredits.data?.fileCount <= checkCredits.data.userCredits : true

//   return (
//     <div className='flex items-center gap-12 h-full justify-center'>
//         <img src="/image.jpg" className='h-56 w-auto' />
//         <div>
//             <div>
//                 <h1 className='font-semibold text-2xl'>
//                     Link your GitHub Repository
//                 </h1>
//                 <p className='text-sm text-muted-foreground'>
//                     Enter the URL of your repository to link it to Repomind
//                 </p>
//             </div>
//             <div className="h-4"></div>
//                 <div>
//                     <form onSubmit={handleSubmit(onSubmit)}>
//                         <Input 
//                         {...register("projectName",{required:true})}placeholder='Project Name'
//                         required/>
//                         <div className="h-2"></div>
//                         <Input 
//                         {...register("repoUrl",{required:true})}placeholder='Github URL'
//                         type='url'
//                         required/>
//                         <div className="h-2"></div>
//                         <Input 
//                         {...register("githubToken")}placeholder='Github Token(Optional)'
//                         />

//                         {!!checkCredits.data && (
//                             <>
//                                 <div className="mt-4 bg-orange-50 px-4 py-2 rounded-md border border-orange-200 text-orange-700">
//                                     <div className="flex items-center gap-2">
//                                         <Info className='size-4'/>
//                                         <p className='text-sm'>You will be charged <strong>{checkCredits.data?.fileCount}</strong>credits for this repository</p>
//                                     </div>
//                                     <p className='text-sm text-blue-600 ml-6'>You have <strong>{checkCredits.data?.userCredits}</strong>credits remaing.</p>
//                                 </div>
//                             </>   
//                         )}


//                         <div className="h-4"></div>
//                         <Button type='submit' disabled={createProject.isPending || checkCredits.isPending || !hasEnoughCredits}>
//                             {!!checkCredits.data? 'Create Project': 'Check Credits'}
//                         </Button>
//                     </form>
//                 </div>
            
//         </div>
//     </div>

//   )
// }

// export default CreatePage

"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useRefetch from '@/hooks/use-refetch';
import { api } from '@/trpc/react';
import { Info } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

type FormInput = {
    repoUrl: string;
    projectName: string;
    githubToken?: string;
}

const CreatePage = () => {
    const { register, handleSubmit, reset } = useForm<FormInput>();
    const createProject = api.project.createProject.useMutation();
    const checkCredits = api.project.checkCredits.useMutation();
    const refetch = useRefetch();
 
    function onSubmit(data: FormInput) {
        if (!!checkCredits.data) {
            createProject.mutate({
                githubUrl: data.repoUrl,
                name: data.projectName,
                githubToken: data.githubToken
            }, {
                onSuccess: () => {
                    toast.success("Project created successfully");
                    refetch();
                    reset();
                },
                onError: () => {
                    toast.error(`Failed to create project`);
                }
            });
        } else {
            checkCredits.mutate({
                githubUrl: data.repoUrl,
                githubToken: data.githubToken
            });
        }
    }

    const hasEnoughCredits = checkCredits.data?.userCredits 
        ? checkCredits.data?.fileCount <= checkCredits.data.userCredits 
        : true;

        return (
            // <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-blue-100 flex items-center justify-center p-6">
            <div className="min-h-screen bg-gradient-to-br from-blue-300 via-purple-400 to-blue-500 flex items-center justify-center p-6">
                {/* Main container with glowing border effect */}
                <div className="p-0.5 w-full max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-white/40 to-white/20">
                    <div className="w-full h-full rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm flex flex-col md:flex-row">
                        {/* Left side - Visual section */}
                        <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-300 via-purple-400 to-blue-500 p-12 flex flex-col justify-center items-center text-white drop-shadow-md">
                            <img src="/icons/icons8-github-logo.svg" alt="Repomind Logo" className="h-28 w-auto mb-10 drop-shadow-lg" />
                            <h1 className="text-5xl font-bold text-center mb-6 drop-shadow-md">Experience the future with Repomind</h1>
                            <p className="text-2xl text-center mb-10 opacity-90 drop-shadow-sm">"We analyze your repositories with no limits."</p>
                            <div className="rounded-lg bg-white/20 backdrop-blur-md p-8 w-full max-w-md border-2 border-white/30 shadow-md">
                                <h3 className="font-semibold text-xl mb-3 drop-shadow-sm">Repository Analysis</h3>
                                <p className="text-lg opacity-90">Gain insights and understand your codebase with AI-powered analysis</p>
                            </div>
                        </div>
        
                        {/* Right side - Form section */}
                        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center bg-white/90 backdrop-blur-sm">
                            <div className="max-w-lg mx-auto">
                                <h2 className="font-bold text-4xl mb-3 text-gray-800 drop-shadow-sm">Link your GitHub Repository</h2>
                                <p className="text-xl text-gray-600 mb-10">Enter the URL of your repository to link it to Repomind</p>
                                
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div>
                                        <label htmlFor="projectName" className="block text-lg font-medium text-gray-700 mb-2">Project Name</label>
                                        <div className="p-0.5 rounded-lg bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 shadow-md">
                                            <Input 
                                                id="projectName"
                                                {...register("projectName", {required: true})}
                                                placeholder="My Awesome Project"
                                                className="w-full text-lg p-6 h-14 rounded-lg border-none bg-white/90 focus:ring-2 focus:ring-purple-500"
                                                required
                                            />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="repoUrl" className="block text-lg font-medium text-gray-700 mb-2">GitHub URL</label>
                                        <div className="p-0.5 rounded-lg bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 shadow-md">
                                            <Input 
                                                id="repoUrl"
                                                {...register("repoUrl", {required: true})}
                                                placeholder="https://github.com/username/repo"
                                                type="url"
                                                className="w-full text-lg p-6 h-14 rounded-lg border-none bg-white/90 focus:ring-2 focus:ring-purple-500"
                                                required
                                            />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="githubToken" className="block text-lg font-medium text-gray-700 mb-2">GitHub Token (Optional)</label>
                                        <div className="p-0.5 rounded-lg bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 shadow-md">
                                            <Input 
                                                id="githubToken"
                                                {...register("githubToken")}
                                                placeholder="ghp_xxxxxxxxxxxx"
                                                className="w-full text-lg p-6 h-14 rounded-lg border-none bg-white/90 focus:ring-2 focus:ring-purple-500"
                                            />
                                        </div>
                                    </div>
        
                                    {!!checkCredits.data && (
                                        <div className="mt-6 p-0.5 rounded-lg bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 shadow-md">
                                            <div className="bg-blue-50/90 backdrop-blur-sm px-6 py-4 rounded-lg text-blue-700">
                                                <div className="flex items-center gap-3">
                                                    <Info className="size-5"/>
                                                    <p className="text-lg">You will be charged <strong>{checkCredits.data?.fileCount}</strong> credits for this repository</p>
                                                </div>
                                                <p className="text-lg text-purple-600 ml-8">You have <strong>{checkCredits.data?.userCredits}</strong> credits remaining.</p>
                                            </div>
                                        </div>   
                                    )}
        
                                    <div className="p-0.5 rounded-lg bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 shadow-lg transition-all duration-200 transform hover:scale-[1.02]">
                                        <Button 
                                            type="submit" 
                                            disabled={createProject.isPending || checkCredits.isPending || !hasEnoughCredits}
                                            className="w-full bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 hover:from-blue-400 hover:via-purple-500 hover:to-blue-600 text-white text-xl font-medium py-6 rounded-lg transition-all duration-200"
                                        >
                                            {!!checkCredits.data ? 'Create Project' : 'Check Credits'}
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
};

export default CreatePage;