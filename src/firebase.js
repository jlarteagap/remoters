import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCS2POoOZHj37w3v6r966F9nQTsRC86hrU',
  authDomain: 'cruits-4eca3.firebaseapp.com',
  projectId: 'cruits-4eca3',
  storageBucket: 'cruits-4eca3.appspot.com',
  messagingSenderId: '800191413900',
  appId: '1:800191413900:web:62211f42bfdd78066085a9'
}

firebase.initializeApp(firebaseConfig)
const storage = firebase.storage()
export default storage
