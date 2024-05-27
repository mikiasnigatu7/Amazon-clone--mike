// Utility/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, doc, setDoc, query, orderBy, onSnapshot } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCCQWIsxToDKbc0yFc6LJhg5CFJQ_YlaQw",
  authDomain: "clone-mk-cb03c.firebaseapp.com",
  projectId: "clone-mk-cb03c",
  storageBucket: "clone-mk-cb03c.appspot.com",
  messagingSenderId: "449508836712",
  appId: "1:449508836712:web:ef3df3b37ffbd9358842dd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export the required Firestore functions
export { auth, db, collection, doc, setDoc, query, orderBy, onSnapshot };
