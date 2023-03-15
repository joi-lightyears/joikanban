import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyAKkUYwSJgVVHy1t0f-nWbzWEXUJuG13e8",
  authDomain: "joikanban.firebaseapp.com",
  projectId: "joikanban",
  storageBucket: "joikanban.appspot.com",
  messagingSenderId: "631622910275",
  appId: "1:631622910275:web:182c4b58fa3d4816166ff6",
  measurementId: "G-G6CPGK0MCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// export const storage = getStorage();
export const db = getFirestore(app);