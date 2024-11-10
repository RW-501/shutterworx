
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js';
// Firestore imports
import { 
    getFirestore, 
    doc, 
    getDoc, 
    query, 
    updateDoc, 
    setDoc, getStorage, ref, uploadBytesResumable,
    addDoc, getDownloadURL,
    getDocs, increment,
    where, arrayUnion,
    collection 
} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js';

// Authentication imports
import { 
    getAuth,
    signInWithPopup, 
    GoogleAuthProvider, 
    FacebookAuthProvider, 
    OAuthProvider, signInAnonymously ,
    signOut, RecaptchaVerifier,
    onAuthStateChanged, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword 
} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';

// Storage import
import { getStorage } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-storage.js';

// Analytics import
import { initializeAnalytics } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js';

let auth;
let db;
let storage;
let analytics;

// Function to initialize Firebase
function initializeFirebase() {

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfgJRmnM_M_5qvevUvPnVVRyBqU-DSARw",
    authDomain: "shutterworx-e7fa7.firebaseapp.com",
    projectId: "shutterworx-e7fa7",
    storageBucket: "shutterworx-e7fa7.firebasestorage.app",
    messagingSenderId: "293593511765",
    appId: "1:293593511765:web:6ef1ad12ba7ea15d0761dc",
    measurementId: "G-FT6HPQ6RND"
  };

    try {
        const app = initializeApp(firebaseConfig);
         auth = getAuth(app); // Initialize auth
         db = getFirestore(app); // Initialize Firestore
         storage = getStorage(app); // Initialize Storage
         analytics = initializeAnalytics(app);
/*
        console.log("Firebase initialized successfully.");
        console.log("Firestore initialized:", db);
*/
        // Export your Firebase instances if needed

    } catch (error) {
        console.error("Error initializing Firebase:", error);
    }
}

// Load Firebase SDKs when the DOM is fully loaded
//document.addEventListener('DOMContentLoaded', loadFirebaseSDKs);
document.addEventListener('DOMContentLoaded', initializeFirebase);

// Export Firestore, Storage, and Auth instances for use in other modules
export { db,getStorage, ref, uploadBytesResumable, getDownloadURL,
     doc,arrayUnion, RecaptchaVerifier ,increment, getDoc,
      query, updateDoc, setDoc, addDoc,signInAnonymously ,
       signInWithPopup,FacebookAuthProvider, GoogleAuthProvider,
        OAuthProvider, signOut, onAuthStateChanged, getDownloadURL,
         createUserWithEmailAndPassword, signInWithEmailAndPassword,
          where, getDocs, storage, collection, auth, analytics };