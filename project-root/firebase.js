import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { env } from "process";

const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: "AIzaSyAbcp2w9vBNpWaWJK-8W05WoOZ9dSae3r0",
  authDomain: "asterstechauth.firebaseapp.com",
  projectId: "asterstechauth",
  storageBucket: "asterstechauth.firebasestorage.app",
  messagingSenderId: "537251718300",
  appId: "1:537251718300:web:d74b1e42968df83d6c7959",
  measurementId: "G-W5C30N8H2Z"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
