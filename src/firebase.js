import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZDNaUeyXu8UoWhY2pqloMzB2MbFIpW5o",
  authDomain: "clone-c7c1e.firebaseapp.com",
  projectId: "clone-c7c1e",
  storageBucket: "clone-c7c1e.appspot.com",
  messagingSenderId: "320104464130",
  appId: "1:320104464130:web:307dddb67575f18bf50c1b",
  measurementId: "G-E7910EXS2C"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };