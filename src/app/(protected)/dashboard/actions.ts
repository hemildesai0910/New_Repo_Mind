// "use server"
// import { streamText} from 'ai'
// import { createStreamableValue} from 'ai/rsc'
// import {createGoogleGenerativeAI} from '@ai-sdk/google'
// import { generateEmbedding } from '@/lib/gemini'
// import { db } from '@/server/db'

//   const google = createGoogleGenerativeAI({
//     apiKey:process.env.GEMINI_API_KEY,
//   })

//   export async function askQuestion(question:string, projectId:string){
//     const stream = createStreamableValue()

//     const queryVector = await generateEmbedding(question)
//     const vectorQuery = `[${queryVector.join(',')}]`

//     const result = await db.$queryRaw`
//     SELECT "fileName", "sourceCode", "summary",
//     1 - ("summaryEmbedding" <=> ${vectorQuery}::vector) AS similarity
//     FROM "SourceCodeEmbedding"
//     WHERE 1-("SourceCodeEmbedding" <=> ${vectorQuery}::vector) > .5
//     AND "projectId" = ${projectId}
//     ORDER BY similarity DESC
//     LIMIT 10
//     ` as {fileName:string; sourceCode:string; summary:string}[]

//     let context = ''
    
//     for(const doc of result){
//         context += `source: ${doc.fileName}\ncode content ${doc.sourceCode}\n summary of file: ${doc.summary}\n\n`
//     }

//     (async()=>{

//         const { textStream } = await streamText({
//             model: google('gemini-1.5-flash'),
//         prompt:`
// You are a ai code assistant who answers questions about the codebase. Your target audience is a technical intern intern with limited experience.
// AI assistant is a brand new, powerful, human-like artificial intelligence.
// The traits of AI include expert knowledge, helpfulness, cleverness, and articulateness.
// AI is a well-behaved and well-mannered individual.
// AI is always friendly, kind, and inspiring, and he is eager to provide vivid and thoughtful responses to the user.
// AI has the sum of all knowledge in their brain, and is able to accurately answer nearly any question about any topic in in the codebase.
// If the question is asking about code or a specific file, AI will provide the detailed answer, giving step by step instructions.
// START CONTEXT BLOCK
// ${context}
// END OF CONTEXT BLOCK

// START QUESTION
// ${question}
// END OF QUESTION

// AI assistant will take into account any CONTEXT BLOCK that is provided in a conversation.
// If the context does not provide the answer to question, the AI assistant will say, "I'm sorry, but I don't know the answer based on the provided context.
// AI assistant will not apologize for previous responses, but instead will indicated new information was gained.
// AI assistant will not invent anything that is not drawn directly from the context.
// Answer in markdown syntax, with code snippets if needed. Be as detailed as possible when answering, making sure there is no ambiguity.
//         `,
//         });
        
//         for await(const delta of textStream){
//             stream.update(delta)
//         }
//         stream.done()
//     })()

//     return{
//         output:stream.value,
//         filesReferences:result
//     }
//   }


"use server";

import { streamText } from "ai";
import { createStreamableValue } from "ai/rsc";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateEmbedding } from "@/lib/gemini";
import { db } from "@/server/db";
import { Prisma } from "@prisma/client";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function askQuestion(question: string, projectId: string) {
  // Validate inputs
  if (!question || !projectId) {
    throw new Error("Invalid inputs: Question and Project ID are required.");
  }

  const stream = createStreamableValue();

  try {
    // Generate embedding for the question
    const queryVector = await generateEmbedding(question);

    // Ensure the vector is valid
    if (!queryVector || queryVector.length !== 768) {
      throw new Error("Invalid embedding vector generated.");
    }

    const vectorQuery = `[${queryVector.join(",")}]`;

    // Query the database
    const result = await db.$queryRaw`
  SELECT "fileName", "sourceCode", "summary",
  1 - ("summaryEmbedding" <=> ${Prisma.raw(`ARRAY[${queryVector.join(",")}]::vector`)}) AS similarity
  FROM "SourceCodeEmbedding"
  WHERE 1 - ("summaryEmbedding" <=> ${Prisma.raw(`ARRAY[${queryVector.join(",")}]::vector`)}) > 0.5
  AND "projectId" = ${projectId}
  ORDER BY similarity DESC
  LIMIT 10
` as { fileName: string; sourceCode: string; summary: string }[];
console.log("Query Result:", result);


if (!result.length) {
  return {
    output: stream.value,
    filesReferences: [],
    noDataFound: true
  };
}

    // Build the context for the AI model
    let context = "";
    for (const doc of result) {
      context += `source: ${doc.fileName}\ncode content: ${doc.sourceCode}\nsummary of file: ${doc.summary}\n\n`;
    }

    // Stream the AI response
    (async () => {
      const { textStream } = await streamText({
        model: google("gemini-1.5-flash"),
        prompt: `
You are an AI code assistant who answers questions about the codebase. Your target audience is a technical intern with limited experience.
AI assistant is a brand new, powerful, human-like artificial intelligence.
The traits of AI include expert knowledge, helpfulness, cleverness, and articulateness.
AI is a well-behaved and well-mannered individual.
AI is always friendly, kind, and inspiring, and is eager to provide vivid and thoughtful responses to the user.
AI has the sum of all knowledge in their brain, and is able to accurately answer nearly any question about any topic in the codebase.
If the question is asking about code or a specific file, AI will provide the detailed answer, giving step-by-step instructions.

START CONTEXT BLOCK
${context}
END OF CONTEXT BLOCK

START QUESTION
${question}
END OF QUESTION

AI assistant will take into account any CONTEXT BLOCK that is provided in a conversation.
If the context does not provide the answer to the question, the AI assistant will say, "I'm sorry, but I don't know the answer based on the provided context."
AI assistant will not apologize for previous responses but will indicate new information was gained.
AI assistant will not invent anything that is not drawn directly from the context.
Answer in markdown syntax, with code snippets if needed. Be as detailed as possible when answering, making sure there is no ambiguity.
        `,
      });

      for await (const delta of textStream) {
        stream.update(delta);
      }
      stream.done();
    })();

    return {
      output: stream.value,
      filesReferences: result,
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error in askQuestion:", error.message);
    } else {
      console.error("Error in askQuestion:", error);
    }
    stream.error("An error occurred while processing your request.");
    throw error;
  }
}
