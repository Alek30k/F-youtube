import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBG2ZyA72Bw6iCKdXyrPxg6FflNIhkwzmw",
  authDomain: "fir-ad41a.firebaseapp.com",
  projectId: "fir-ad41a",
  storageBucket: "fir-ad41a.appspot.com",
  messagingSenderId: "169313336883",
  appId: "1:169313336883:web:64a5041011f89bf50bed46",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();

export const auth = getAuth();

export default app;
