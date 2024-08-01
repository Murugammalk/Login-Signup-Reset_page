import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYvC_rFRmD2PkuTm0IgzuUQNHMhJFyqBc",
  authDomain: "my-auth-app-bca17.firebaseapp.com",
  projectId: "my-auth-app-bca17",
  storageBucket: "my-auth-app-bca17.appspot.com",
  messagingSenderId: "176629785400",
  appId: "1:176629785400:web:fd2afbb1880bed8f8a17cd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };