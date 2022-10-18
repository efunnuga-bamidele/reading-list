import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAjwDH_UBB6RWP0ClEHNH9aIzg3DdY6juU",
    authDomain: "reading-list-ab635.firebaseapp.com",
    projectId: "reading-list-ab635",
    storageBucket: "reading-list-ab635.appspot.com",
    messagingSenderId: "808975364143",
    appId: "1:808975364143:web:234e3954545e1a65d1d6da"
  };

  //init firebase
  initializeApp(firebaseConfig)

  //init firestore
  const db = getFirestore()

  export { db }