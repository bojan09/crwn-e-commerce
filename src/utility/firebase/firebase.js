import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDosNQXkAMJcxh99bNrZUeYKBW7Gcrse00",
  authDomain: "crwn-clothing-db-3a6c0.firebaseapp.com",
  projectId: "crwn-clothing-db-3a6c0",
  storageBucket: "crwn-clothing-db-3a6c0.appspot.com",
  messagingSenderId: "662225268961",
  appId: "1:662225268961:web:6ff2ae6437f1c46055c7a0",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
