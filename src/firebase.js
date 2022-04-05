import firebase from 'firebase/app';
import 'firebase/firestore'; // para la base de datos
import 'firebase/auth'; // interacción con la información del usuario

const firebaseConfig = {
  apiKey: "AIzaSyDMH1ijqaUdGhFNRH_TGldFG9zEj942FUs",
  authDomain: "authfirebase-ccb3d.firebaseapp.com",
  projectId: "authfirebase-ccb3d",
  storageBucket: "authfirebase-ccb3d.appspot.com",
  messagingSenderId: "1090723915517",
  appId: "1:1090723915517:web:591b805653ee0d10b48094"
};

// Iniciar Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(); // Vamos a poder acceder a la base de datos
const auth = firebase.auth(); // Vamos a poder acceder a la información del usuario

export { db, auth }