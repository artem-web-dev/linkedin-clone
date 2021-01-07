import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBEWOmACIuzQxJ4UdmIArwXvt9itUtKkYQ",
  authDomain: "linkedin-clone-39339.firebaseapp.com",
  projectId: "linkedin-clone-39339",
  storageBucket: "linkedin-clone-39339.appspot.com",
  messagingSenderId: "855537985497",
  appId: "1:855537985497:web:a0e69b315826933f229bc8",
};

const firabaseApp = firebase.initializeApp(firebaseConfig)
const db = firabaseApp.firestore()
const auth = firebase.auth()

export {db, auth}