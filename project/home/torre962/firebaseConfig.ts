// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSsLwlTo8Qu4aXba2pK6YlBvWsAd0taWo",
  authDomain: "ecommercereact-3.firebaseapp.com",
  projectId: "ecommercereact-3",
  storageBucket: "ecommercereact-3.firebasestorage.app",
  messagingSenderId: "476163250904",
  appId: "1:476163250904:web:55e851369974cc0d6495ad",
  measurementId: "G-3JS2RZ4K0Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
