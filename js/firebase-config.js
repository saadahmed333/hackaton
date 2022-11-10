  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBF9AwSVNvNzOsm5X9uqz6MbtzwJbzvqCE",
    authDomain: "hackaton-74144.firebaseapp.com",
    projectId: "hackaton-74144",
    storageBucket: "hackaton-74144.appspot.com",
    messagingSenderId: "534241085328",
    appId: "1:534241085328:web:d110cb7d33827c12131515"
  };

  const app = initializeApp(firebaseConfig);


  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
export const auth = getAuth(app);
export {createUserWithEmailAndPassword}
