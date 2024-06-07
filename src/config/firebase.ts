import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANbLZR4G7K-D54qFaIouiAha5Rfs5I-Io",
  authDomain: "world-wiki-b36c0.firebaseapp.com",
  projectId: "world-wiki-b36c0",
  storageBucket: "world-wiki-b36c0.appspot.com",
  messagingSenderId: "836398054804",
  appId: "1:836398054804:web:6a99141e6304706a632381",
  measurementId: "G-7B5FYGPJF5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
