// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqRHe3ZpTkBZry4pPcdugpXiAhoDSIj6M",
    authDomain: "skill-island.firebaseapp.com",
    projectId: "skill-island",
    storageBucket: "skill-island.appspot.com",
    messagingSenderId: "817537938870",
    appId: "1:817537938870:web:03aad26bad5faf4fe8fd17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;