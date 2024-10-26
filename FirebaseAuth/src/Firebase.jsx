import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDbEj7IGpT0hoSfBcBZ58oMT9fALGH9pTc",
    authDomain: "fir-auth-3cb27.firebaseapp.com",
    projectId: "fir-auth-3cb27",
    storageBucket: "fir-auth-3cb27.appspot.com",
    messagingSenderId: "320671212444",
    appId: "1:320671212444:web:d26aa711ea84b6c2029e59"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export { auth }