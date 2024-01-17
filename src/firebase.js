import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVI5b8dDFJTM4AVBFrCBsGcHP3LYD0_08",
  authDomain: "push-notifications-5503f.firebaseapp.com",
  projectId: "push-notifications-5503f",
  storageBucket: "push-notifications-5503f.appspot.com",
  messagingSenderId: "965487785367",
  appId: "1:965487785367:web:d9e7394d3c2dc35b2340d2",
  measurementId: "G-XGJCPM4R8M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};