import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDI8VROHlV1SRCRDRoZVoEogerc17xQJeU",
  authDomain: "study-hack-5eadd.firebaseapp.com",
  projectId: "study-hack-5eadd",
  storageBucket: "study-hack-5eadd.appspot.com",
  messagingSenderId: "1031678995699",
  appId: "1:1031678995699:web:829746773e46b573029b86",
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const store = getFirestore(firebaseApp);
