import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCflEyEGCno7JotLPFeXq9yCCN0A0zFKaY",
  authDomain: "disneyplus-clone-50bb9.firebaseapp.com",
  projectId: "disneyplus-clone-50bb9",
  storageBucket: "disneyplus-clone-50bb9.appspot.com",
  messagingSenderId: "168917876852",
  appId: "1:168917876852:web:f233f347ee41c94d33d121",
  measurementId: "G-L26JP6R5B9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export { auth, provider, storage };
export default db;
