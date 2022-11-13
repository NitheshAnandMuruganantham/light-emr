// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDepZ8ACmQI6LUOUhXeGiG8cMvmHnnntcg',
  authDomain: 'open-med-eco.firebaseapp.com',
  projectId: 'open-med-eco',
  storageBucket: 'open-med-eco.appspot.com',
  messagingSenderId: '966600868957',
  appId: '1:966600868957:web:2503d8469cf34ac3feb9b4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const store = getStorage(app);
