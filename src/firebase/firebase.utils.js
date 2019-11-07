import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDjqMaP-dLb9oZ3AKk4e4Hh8lxHMsJXOpg",
  authDomain: "crwn-dbs-bf925.firebaseapp.com",
  databaseURL: "https://crwn-dbs-bf925.firebaseio.com",
  projectId: "crwn-dbs-bf925",
  storageBucket: "crwn-dbs-bf925.appspot.com",
  messagingSenderId: "391928641201",
  appId: "1:391928641201:web:d8416ec2b31c49b8e55490",
  measurementId: "G-4VYSSNDYXS"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
