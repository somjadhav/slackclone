import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBZVYbP9Ix3mR9zfiaEK2um9q89N_IDIpE",
    authDomain: "slack-clone-96aec.firebaseapp.com",
    projectId: "slack-clone-96aec",
    storageBucket: "slack-clone-96aec.appspot.com",
    messagingSenderId: "836775011629",
    appId: "1:836775011629:web:da126d0ef76268e0995fa4",
    measurementId: "G-7SB97XDF71"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();


export default db