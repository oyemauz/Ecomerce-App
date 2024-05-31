// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf5TyXWiK4v5CbQsQG-2L5cctZJu5J82w",
  authDomain: "grocery-go-a99b3.firebaseapp.com",
  projectId: "grocery-go-a99b3",
  storageBucket: "grocery-go-a99b3.appspot.com",
  messagingSenderId: "958386235517",
  appId: "1:958386235517:web:e379fd5f7cc90eb80ae914"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { app, auth, db };
