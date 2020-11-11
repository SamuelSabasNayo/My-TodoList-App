import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDp5UFelxYBT7ysthratVpPiUmhWuMdsWo",
    authDomain: "my-todo-list-app-89896.firebaseapp.com",
    databaseURL: "https://my-todo-list-app-89896.firebaseio.com",
    projectId: "my-todo-list-app-89896",
    storageBucket: "my-todo-list-app-89896.appspot.com",
    messagingSenderId: "84218446195",
    appId: "1:84218446195:web:c7460df053e6b6d8cc0506"
}

// Initialize firebase
firebase.initializeApp(firebaseConfig);

export default firebase;