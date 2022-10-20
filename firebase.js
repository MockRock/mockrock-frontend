// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAfwAcqZ8OKm2MPUVZ9SwaiKnCfTKR9e0M",
    authDomain: "mockrock-8affa.firebaseapp.com",
    projectId: "mockrock-8affa",
    storageBucket: "mockrock-8affa.appspot.com",
    messagingSenderId: "691320190340",
    appId: "1:691320190340:web:be8d4bee4094d85be259d1",
    measurementId: "G-PSK0Z46B3Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore(app);