// Import the functions you need from the SDKs you need
import { queryByTestId } from "@testing-library/dom";
import firebase from "firebase/compat";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  getDoc,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALY_IBzMEVxMJorVuHdwmZ5TpqGFKppf8",
  authDomain: "dictionariekt.firebaseapp.com",
  projectId: "dictionariekt",
  storageBucket: "dictionariekt.appspot.com",
  messagingSenderId: "1013705656427",
  appId: "1:1013705656427:web:45413c9f64235cb69a492e",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").add({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        favourites: [],
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  auth.signOut();
};

const addWordToFavourite = async (word, user) => {
  const q = query(collection(db, "users"), where("uid", "==", user.uid));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // Set the "capital" field of the city 'DC'
    const res = db
      .collection("users")
      .doc(doc.id)
      .update({
        favourites: [...doc.data().favourites, word],
      });
  });
};


export { auth, db, signInWithGoogle, logout, addWordToFavourite };
