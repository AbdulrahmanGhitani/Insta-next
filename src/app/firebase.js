// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUPLIC_FIREBASE_API_KEY,
  authDomain: "insta-next-37920.firebaseapp.com",
  projectId: "insta-next-37920",
  storageBucket: "insta-next-37920.appspot.com",
  messagingSenderId: "263534653150",
  appId: "1:263534653150:web:973996f2c1e1799e019c4f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// service firebase.storage {
//     match /b/{bucket}/o {
//       match /{allPaths=**} {
//         allow read;
//         allow write: if request.resource.size < 5*1024*1024 &&
//         request.resource.contentType.matches('image/.*');
        
//       }
//     }
//   }