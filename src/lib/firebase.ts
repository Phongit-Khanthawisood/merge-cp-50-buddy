// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV1cdysfYVyGvaIe5gyTflujIDcsrycbU",
  authDomain: "merge-cp-50-buddy.firebaseapp.com",
  projectId: "merge-cp-50-buddy",
  storageBucket: "merge-cp-50-buddy.appspot.com",
  messagingSenderId: "767503205164",
  appId: "1:767503205164:web:7e2d61b7e92670edede289",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);

export const SignInFunction = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
};
