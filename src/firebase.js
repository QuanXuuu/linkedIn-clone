import firebase from "firebase/app";
import "firebase/firestore";

import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBVdB51MzQCwYSI0f6zpcaz_g2ox161iXM",
    authDomain: "linkedin-clone-6b95a.firebaseapp.com",
    projectId: "linkedin-clone-6b95a",
    storageBucket: "linkedin-clone-6b95a.appspot.com",
    messagingSenderId: "28070370052",
    appId: "1:28070370052:web:c987e63f271db61e4f0e51"
  };


  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  const auth = firebase.auth();


  export {db, auth};