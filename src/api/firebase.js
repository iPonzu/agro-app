// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkcVaSZ830g7tCX8V9KWuATr6KuHtRV10",
  authDomain: "web-auth-native1.firebaseapp.com",
  projectId: "web-auth-native1",
  storageBucket: "web-auth-native1.appspot.com",
  messagingSenderId: "857997457785",
  appId: "1:857997457785:web:f4a80da72d6960813957a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);