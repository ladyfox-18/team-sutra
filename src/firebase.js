import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnDsLBdJwXnWfoq5dRniellNh7P3IROAU",
  authDomain: "gdg-solution-challenge-b98f0.firebaseapp.com",
  databaseURL: "https://gdg-solution-challenge-b98f0-default-rtdb.firebaseio.com",
  projectId: "gdg-solution-challenge-b98f0",
  storageBucket: "gdg-solution-challenge-b98f0.firebasestorage.app",
  messagingSenderId: "308831342598",
  appId: "1:308831342598:web:81f09f74bfb778309fb387",
  measurementId: "G-TD0JWPHC6D"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;