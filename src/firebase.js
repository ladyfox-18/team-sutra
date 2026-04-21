
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCUHqiyhiElGV1UHqH0fV8au8_vqmsWh8A",
  authDomain: "ngo-gdg.firebaseapp.com",
  projectId: "ngo-gdg",
  storageBucket: "ngo-gdg.firebasestorage.app",
  messagingSenderId: "703613585354",
  appId: "1:703613585354:web:ffbf00cc535ef27cc8b133",
  measurementId: "G-ZDZLCPM938"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
