import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'netfliixxgpt.firebaseapp.com',
  projectId: 'netfliixxgpt',
  storageBucket: 'netfliixxgpt.appspot.com',
  messagingSenderId: '130580828064',
  appId: '1:130580828064:web:f7ec8658ec82b433201ec5',
  measurementId: 'G-G03YRCWSNJ',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = getAuth()
