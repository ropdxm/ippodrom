import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBe1OTWMd7YDkAA0V-IiMDTh2wzEKE2ED4",
  authDomain: "ippodrom-1425f.firebaseapp.com",
  projectId: "ippodrom-1425f",
  storageBucket: "ippodrom-1425f.appspot.com",
  messagingSenderId: "294431696878",
  appId: "1:294431696878:web:97abbc4c12f5df82a0d0ff",
  measurementId: "G-NRMM6E52Z6"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);