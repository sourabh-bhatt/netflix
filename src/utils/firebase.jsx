// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvNzD2pSbgAlYxXaF1o8OR0n5FXrbQRHA",
  authDomain: "netfliixxgpt.firebaseapp.com",
  projectId: "netfliixxgpt",
  storageBucket: "netfliixxgpt.appspot.com",
  messagingSenderId: "130580828064",
  appId: "1:130580828064:web:f7ec8658ec82b433201ec5",
  measurementId: "G-G03YRCWSNJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);