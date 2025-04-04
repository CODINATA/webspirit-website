// filepath: c:\pfe\client\my-app\src\config.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChjZjiiGfbTnJhTXy4TuCYZzdkR8l36do",
    authDomain: "agency-website-77f20.firebaseapp.com",
    projectId: "agency-website-77f20",
    storageBucket: "agency-website-77f20.firebasestorage.app",
    messagingSenderId: "812034971816",
    appId: "1:812034971816:web:3f810e41104409415c4a9d",
    measurementId: "G-GZL7SMC1HF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Google Analytics
const analytics = getAnalytics(app);

export { app, analytics };