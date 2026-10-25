// firebase.js - Chaudhry Cab
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAlcir0H933LPELz_6kl-mPPNQjbJ6cakY",
  authDomain: "ccab-basirpur.firebaseapp.com",
  projectId: "ccab-basirpur",
  storageBucket: "ccab-basirpur.firebasestorage.app",
  messagingSenderId: "228594209572",
  appId: "1:228594209572:web:0143555bebdfb3a3c819b1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
signInAnonymously(auth).catch(console.error);

export async function saveRide(data){
  return await addDoc(collection(db, "rides"), {
    ...data,
    createdAt: serverTimestamp(),
    status: "pending"
  });
}
