import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyADDdLC7JBrBPafoaC2YgSjQCvI0BlZu3c',
  authDomain: 'react-coderhouse-db.firebaseapp.com',
  projectId: 'react-coderhouse-db',
  storageBucket: 'react-coderhouse-db.appspot.com',
  messagingSenderId: '770261698021',
  appId: '1:770261698021:web:a165d656d6882325c09b0c',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
