// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnMZtPd68wAVeBKpcZT1iSpxq5Gf9sx6c",
  authDomain: "habit-4c025.firebaseapp.com",
  projectId: "habit-4c025",
  storageBucket: "habit-4c025.appspot.com",
  messagingSenderId: "42748769245",
  appId: "1:42748769245:web:fc8994ab37168e2452bc34",
  measurementId: "G-R6WNRR4YYF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
export const storage=getStorage(app);
export {db};
//const analytics = getAnalytics(app);