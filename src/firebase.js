import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAJDRJvuQKCMjn1aiO-6jPWClMrc60VVM4",
  authDomain: "challenge-74372.firebaseapp.com",
  projectId: "challenge-74372",
  storageBucket: "challenge-74372.appspot.com",
  messagingSenderId: "794278267769",
  appId: "1:794278267769:web:abf90eb48108a89dcdfda8",
  measurementId: "G-CJF6Y5QT7M"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp)

const db = getFirestore(firebaseApp)

export { firebaseApp, auth, db };



