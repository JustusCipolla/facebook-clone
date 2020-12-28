import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCWwU1GiokfkeF-o5bFW8WZ0EbhfssM0EI",
  authDomain: "facebook-clone-70d5a.firebaseapp.com",
  projectId: "facebook-clone-70d5a",
  storageBucket: "facebook-clone-70d5a.appspot.com",
  messagingSenderId: "716460623995",
  appId: "1:716460623995:web:9e644806d055da5a28fade",
  measurementId: "G-8SJQFL8Q5V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;