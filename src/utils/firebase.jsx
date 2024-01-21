import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: 'AIzaSyDvNzD2pSbgAlYxXaF1o8OR0n5FXrbQRHA',
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
