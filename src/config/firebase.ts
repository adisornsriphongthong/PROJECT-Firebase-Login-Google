// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrecCjIiJ8M4wvW8MUcQcl1HDDfOP2Hjs",
  authDomain: "woven-fountain-405106.firebaseapp.com",
  projectId: "woven-fountain-405106",
  storageBucket: "woven-fountain-405106.appspot.com",
  messagingSenderId: "970203323412",
  appId: "1:970203323412:web:75fb0e8169a4a1d2c09b01",
  measurementId: "G-BQ5NM0JJ8L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();