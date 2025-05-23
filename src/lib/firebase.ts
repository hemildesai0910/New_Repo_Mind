// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FB_APIKEY,
    authDomain: process.env.FB_AUTHDOMAIN,
    projectId: process.env.FB_PROJECTID,
    storageBucket: process.env.FB_STORAGEBUCKET,
    messagingSenderId: process.env.FB_MESSENDERID,
    appId: process.env.FB_APPID
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFile(file: File, setProgress?:(progress:number)=>void){
    return new Promise((resolve, reject)=>{
        try {
            const storageRef = ref(storage, file.name)
            const uploadTask = uploadBytesResumable(storageRef, file)

            uploadTask.on('state_changed', (snapshot)=>{
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                if(setProgress){
                    setProgress(progress)
                }
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },error=>{
                reject(error)
            },()=>{
                getDownloadURL(uploadTask.snapshot.ref).then(downloadUrl=>{
                    resolve(downloadUrl as string)
                })
            })
        } catch (error) {
            // console.log(error)
            reject(error)
        }
    })
} 