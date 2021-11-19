import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA4ZAUF4PkXavuFhIE91FiHZShFK2-6SR8",
  authDomain: "youngnight-8846c.firebaseapp.com",
  projectId: "youngnight-8846c",
  storageBucket: "youngnight-8846c.appspot.com",
  messagingSenderId: "103227736728",
  appId: "1:103227736728:web:bdf9f9f9e29604033986ed"
};

if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}

const auth = getAuth();

const authHelper = {
  signInOnFirebase: async (email, password) => {
    const result = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return result.user.email;
  },
  signOutFirebase: async() => {
    await signOut(auth)
  }
};

export default authHelper;