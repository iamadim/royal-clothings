import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBZe2z2PNViqDQL-tDgY7lKfGp9xTFPpKs",
    authDomain: "royal-db-df253.firebaseapp.com",
    databaseURL: "https://royal-db-df253.firebaseio.com",
    projectId: "royal-db-df253",
    storageBucket: "royal-db-df253.appspot.com",
    messagingSenderId: "732801554096",
    appId: "1:732801554096:web:56eba182ea9a6f15994d75",
    measurementId: "G-TKJD3PT6YS"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();     //authentication and sign in
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;