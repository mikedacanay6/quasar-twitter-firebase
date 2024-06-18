import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNM4rbrgf2W_kYyBzuQozBn4Tj4OjoBn4",
  authDomain: "xtwitter-clone.firebaseapp.com",
  projectId: "xtwitter-clone",
  storageBucket: "xtwitter-clone.appspot.com",
  messagingSenderId: "300176876217",
  appId: "1:300176876217:web:7e33ad61a79b2a8e0c3168"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db

