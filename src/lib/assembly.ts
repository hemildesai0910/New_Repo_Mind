import {AssemblyAI} from 'assemblyai'
import { start } from 'repl'
// const client = new AssemblyAI({apiKey:process.env.ASSEMBLYAI_API_KEY!})


// Start by making sure the `assemblyai` package is installed.
// If not, you can install it by running the following command:
// npm install assemblyai


const client = new AssemblyAI({
  apiKey:process.env.ASSEMBLYAI_API_KEY !,
});

// const FILE_URL =
//   'https://assembly.ai/sports_injuries.mp3';

// You can also transcribe a local file by passing in a file path
// const FILE_URL = './path/to/file.mp3';

// Request parameters 
// const data = {
//   audio: FILE_URL
// }




function msToTime(ms:number){
    const seconds = ms / 1000
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)
    return `${minutes.toString().padStart(2,'0')}:${remainingSeconds.toString().padStart(2,'0')}`
}

export const processMeeting = async (meetingUrl:string)=>{
    // const run = async () => {
    //     const transcript = await client.transcripts.transcribe(data);
    //     console.log(data);
    //   };
      
    //   run();
    // console.log(meetingUrl);
    const transcript = await client.transcripts.transcribe({
        audio: meetingUrl,
        auto_chapters: true,
    })
    // console.log(transcript);
    const summaries = transcript.chapters?.map(chapter=>({
        start: msToTime(chapter.start),
        end: msToTime(chapter.end),
        gist: chapter.gist,
        headline: chapter.headline,
        summary: chapter.summary
    })) || []
    console.log(summaries);
    // if(!transcript.text) throw new Error('No transcript found')
        
    return {
        summaries
    }
}

// const FILE_URL ='https://assembly.ai/sports_injuries.mp3'

// const response = await processMeeting(FILE_URL)
// console.log(response)