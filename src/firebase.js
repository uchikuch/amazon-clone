import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB8yCog8JyB0z397PzKGeTvtd40IhC3ivY",
  authDomain: "challenge-5db13.firebaseapp.com",
  databaseURL: "https://challenge-5db13.firebaseio.com",
  projectId: "challenge-5db13",
  storageBucket: "challenge-5db13.appspot.com",
  messagingSenderId: "762383889767",
  appId: "1:762383889767:web:5fe4f124c0b52f94016bc2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
