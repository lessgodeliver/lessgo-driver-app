import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkjgzFXUnkv-usuzvu-cU351keq2Hrgaw",
  authDomain: "lessgo-app.firebaseapp.com",
  projectId: "lessgo-app",
  storageBucket: "lessgo-app.firebasestorage.app",
  messagingSenderId: "698155839231",
  appId: "1:698155839231:web:4e63e1d94e6674cb5e26ca",
  measurementId: "G-NE3B4MFXQR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };