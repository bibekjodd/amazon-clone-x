import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAkQgwdJR0KUDQbwYFeK2vziKIIdYZbOIU",
  authDomain: "clone-x-5a51c.firebaseapp.com",
  projectId: "clone-x-5a51c",
  storageBucket: "clone-x-5a51c.appspot.com",
  messagingSenderId: "258545496753",
  appId: "1:258545496753:web:8c1c33b7a64d1587a72890"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db }