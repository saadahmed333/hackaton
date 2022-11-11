 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyB1BhGQephXBZMGZVtJN-a7wQ0oA2JdouQ",
   authDomain: "hackaton-project-f35c6.firebaseapp.com",
   projectId: "hackaton-project-f35c6",
   storageBucket: "hackaton-project-f35c6.appspot.com",
   messagingSenderId: "93476652239",
   appId: "1:93476652239:web:2f003cf096ce9c818463ba"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);


  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,  onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
  import { getStorage , ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";
  import { doc, setDoc, getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"; 
  export const auth = getAuth(app);
  const storage = getStorage(app);
  export const db = getFirestore();
export {createUserWithEmailAndPassword}
export {signInWithEmailAndPassword}
export {onAuthStateChanged}
export {storage}
export {ref}
export {uploadBytesResumable}
export {getDownloadURL, uploadBytes}
export {doc, setDoc}




