import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB-cnfzzZmHgB8cGj3A-hT8zuN3a0cHHUo",
  authDomain: "todo-app-8aa5c.firebaseapp.com",
  projectId: "todo-app-8aa5c",
  storageBucket: "todo-app-8aa5c.appspot.com",
  messagingSenderId: "204139708150",
  appId: "1:204139708150:web:47f64e940eaa529655f6d7",
});

const db = firebaseApp.firestore();

export default db;
