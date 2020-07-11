import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD8uo4XN_RRcQXxTuXpr10SHGZXgV_8NKg",
    authDomain: "crwn-marketing-db.firebaseapp.com",
    databaseURL: "https://crwn-marketing-db.firebaseio.com",
    projectId: "crwn-marketing-db",
    storageBucket: "crwn-marketing-db.appspot.com",
    messagingSenderId: "519577329399",
    appId: "1:519577329399:web:b7f0883dccc88bb4d9fdf2",
    measurementId: "G-1TDMG6439X"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;