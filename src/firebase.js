import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAOYPLNCG0Kty99-Of3eZCUQ0_0ZPgv4Ug',
  authDomain: 'reclutop-c2d49.firebaseapp.com',
  projectId: 'reclutop-c2d49',
  storageBucket: 'reclutop-c2d49.appspot.com',
  messagingSenderId: '774199962081',
  appId: '1:774199962081:web:c1fc60cec907e4923ccaa0',
  measurementId: 'G-FQRDRJE3G4'
}

firebase.initializeApp(firebaseConfig)
const storage = firebase.storage()
export default storage
