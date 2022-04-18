// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAFrqmuIEsCCpI16glV9VM48pnoTqgZUW4',
  authDomain: 'clone-project-a98c0.firebaseapp.com',
  projectId: 'clone-project-a98c0',
  storageBucket: 'clone-project-a98c0.appspot.com',
  messagingSenderId: '243318856491',
  appId: '1:243318856491:web:7932e93a493e644a88436e',
  measurementId: 'G-D1MYQ6CJTH',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
