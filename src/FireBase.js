import firebase from 'firebase';

const FirebaseApp = firebase.initializeApp({
       apiKey: "AIzaSyD-v1F7ssSTay5vk8lcEtGVBi0-zrVnulY",
  authDomain: "instagram-clone-84d77.firebaseapp.com",
  projectId: "instagram-clone-84d77",
  storageBucket: "instagram-clone-84d77.appspot.com",
  messagingSenderId: "160585106120",
  appId: "1:160585106120:web:ec569f2f898af1bc44dbfd"
});

const db = FirebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };