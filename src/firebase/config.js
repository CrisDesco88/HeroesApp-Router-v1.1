import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getEnvironment } from "../heroes/helpers/getEnvironments";

const {VITE_FIREBASE_CONFIG} = getEnvironment();

const firebaseConfig = JSON.parse(VITE_FIREBASE_CONFIG);


// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
