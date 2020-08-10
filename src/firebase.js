import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCQJzPkitl64GLtadfo-msl8w9LTCHY9FE",
    authDomain: "counter-1bec3.firebaseapp.com",
    databaseURL: "https://counter-1bec3.firebaseio.com",
    projectId: "counter-1bec3",
    storageBucket: "counter-1bec3.appspot.com",
    messagingSenderId: "29597856665",
    appId: "1:29597856665:web:84b497af820a8c899d5908",
    measurementId: "G-LMVBDZBD8L"
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  export default db;
