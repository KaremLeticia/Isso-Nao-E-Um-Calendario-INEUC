import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHy5-SxHknwfQtyvpI-zEAtcA4rLkHYFs",
  authDomain: "ineuc-5d80b.firebaseapp.com",
  projectId: "ineuc-5d80b",
  storageBucket: "ineuc-5d80b.appspot.com",
  messagingSenderId: "851531429736",
  appId: "1:851531429736:web:2ef5424a4c9fbe6012c8dd",
  measurementId: "G-Z1TEV8YQDS"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app);
const firestore = firebase.firestore(app);

export { firebase };
export { auth };
export { firestore };