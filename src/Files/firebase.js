import firebase from "firebase";

const App = firebase.initializeApp({
  apiKey: "AIzaSyBS-jgTKhr7I7oDIEhM_80qeWzGzXsPpzQ",
  authDomain: "personal-portfolio-websi-7801f.firebaseapp.com",
  projectId: "personal-portfolio-websi-7801f",
  storageBucket: "personal-portfolio-websi-7801f.appspot.com",
  messagingSenderId: "578733299062",
  appId: "1:578733299062:web:041173b6fcdd206cff5657",
});

const auth = App.auth();

const db = firebase.firestore();

export { auth, db };
