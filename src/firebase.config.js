// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDLMoIuVftXBnSsvEfFk0O1lc2Aze7YslA',
  authDomain: 'workout-planner-e775a.firebaseapp.com',
  projectId: 'workout-planner-e775a',
  storageBucket: 'workout-planner-e775a.appspot.com',
  messagingSenderId: '852405511757',
  appId: '1:852405511757:web:2e801c8bb74c3b3d64de04',
  measurementId: 'G-GGG0WZ7HCN',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = getAuth(app)
export const db = getFirestore(app)
