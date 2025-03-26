// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "efficio-manage.firebaseapp.com",
  projectId: "efficio-manage",
  storageBucket: "efficio-manage.firebasestorage.app",
  messagingSenderId: "280728830514",
  appId: "1:280728830514:web:71e2be8c232d6c8e94322b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
