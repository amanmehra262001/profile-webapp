// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {getFirestore} from 'firebase/firestore'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseApiKey = process.env.FIREBASE_API_KEY
// const firebaseAuthDomain = process.env.FIREBASE_AUTH_DOMAIN
// const firebaseProjectId= process.env.FIREBASE_PROJECT_ID
// const firebaseStorageBucket= process.env.FIREBASE_STORAGE_BUCKET
// const firebaseMessagingSenderId= process.env.FIREBASE_MESSAGING_SENDER_ID
// const firebaseAppId= process.env.FIREBASE_APP_ID
// const firebaseMeasurementId= process.env.FIREBASE_MEASUREMENT_ID

// const firebaseConfig = {
//   apiKey: firebaseApiKey,
//   authDomain: firebaseAuthDomain,
//   projectId: firebaseProjectId,
//   storageBucket: firebaseStorageBucket,
//   messagingSenderId: firebaseMessagingSenderId,
//   appId: firebaseAppId,
//   measurementId: firebaseMeasurementId,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app)

// export const database = db

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm3WIgykLEcH-5j3G3Qj6zZ-GQQNBQIGc",
  authDomain: "portfolio-webapp-a346e.firebaseapp.com",
  projectId: "portfolio-webapp-a346e",
  storageBucket: "portfolio-webapp-a346e.appspot.com",
  messagingSenderId: "994921700921",
  appId: "1:994921700921:web:c5812bcc8f356220dc77e8",
  measurementId: "G-X6E2KCS2VF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export const database = db;