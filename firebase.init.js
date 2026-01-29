// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5ODTy2F4V7XTjI5wxWiZHV170HmHIS1Q",
    authDomain: "greenlink-e0784.firebaseapp.com",
    projectId: "greenlink-e0784",
    storageBucket: "greenlink-e0784.firebasestorage.app",
    messagingSenderId: "67942031088",
    appId: "1:67942031088:web:12f36011b2336373682c35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;