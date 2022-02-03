import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBxrdJxWef254Ac0pJZBcrI8QcOu7NW2ts",
  authDomain: "book-lo-9acbc.firebaseapp.com",
  databaseURL: "https://book-lo-9acbc-default-rtdb.firebaseio.com",
  projectId: "book-lo-9acbc",
  storageBucket: "book-lo-9acbc.appspot.com",
  messagingSenderId: "881804873852",
  appId: "1:881804873852:web:78bb0a1701ea7668f179f9",
  measurementId: "G-5XD397ZYN1"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth()
export const db = firebase.firestore()
export default firebase