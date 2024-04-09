import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCznR2WIGKA1C3vsjiDolQVSAbnzOg7y0o",
  authDomain: "md-associations.firebaseapp.com",
  projectId: "md-associations",
  storageBucket: "md-associations.appspot.com",
  messagingSenderId: "240936950655",
  appId: "1:240936950655:web:88c8b1d5fbe970f5ac184a",
  measurementId: "G-W5XXW0MDBZ",
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

export { firestore }; // Export Firestore instance
