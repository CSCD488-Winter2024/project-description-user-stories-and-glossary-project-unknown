import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4UrrUwYnrasHYoTu3LrUXB3D-M-UUOTE",
    authDomain: "donutparade-420a9.firebaseapp.com",
    databaseURL: "https://donutparade-420a9-default-rtdb.firebaseio.com",
    projectId: "donutparade-420a9",
    storageBucket: "donutparade-420a9.appspot.com",
    messagingSenderId: "1041450370981",
    appId: "1:1041450370981:web:782672f1b389ce8ef74a4c",
    measurementId: "G-LB3C3VF3B5"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth, firebaseApp };