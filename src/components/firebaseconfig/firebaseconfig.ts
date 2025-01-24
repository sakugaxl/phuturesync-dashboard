import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";  // Added for Firebase Storage
import { getDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAS9zrXTx4bfNHL3SVuECGRmRJQ74Ak1Fw",
    authDomain: "phuton-4c3f2.firebaseapp.com",
    projectId: "phuton-4c3f2",
    storageBucket: "phuton-4c3f2.firebasestorage.app",
    messagingSenderId: "219815206389",
    appId: "1:219815206389:web:bd6d5c3a3affaa8fac94bc",
    measurementId: "G-397WV7BVER",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Storage
const storage = getStorage(app);

export { auth, db, setDoc, doc, storage, getDoc };  // Only export here, no multiple exports of same names
