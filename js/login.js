


import { auth , signInWithEmailAndPassword } from "./firebase-config.js";


let loginEmail = document.getElementById("loginEmail");
let loginPassword = document.getElementById("loginPassword");
let loginButton = document.getElementById("loginButton");

function login() {
   if (loginEmail.value === "") {
    emailcheckLogin.style.display = "block";
   }
   else if (loginPassword.value === "") {
    passcheckLogin.style.display = "block";
   } 
   else {
    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location = "../pages/chatapp.html"
      loginEmail.value = "";
    })
    .catch((error) => {
        let errors = document.getElementById("errors")
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      if (errorMessage) {
        passcheckLogin.style.display = "none";  
        errors.innerText = `
        ${errorCode}
        `
      }
    });
   }
}

loginButton.addEventListener("click", login)


// Login email regex start
let emailcheckLogin = document.getElementById("emailcheckLogin");
function checkEmail(str)
{
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(str)){
        emailcheckLogin.style.display = "block";
    }else{
        emailcheckLogin.style.display = "none";
    }
}

window.checkEmail = checkEmail;
// Login email regex end


// Login password regex start
let passcheckLogin = document.getElementById("passcheckLogin");
function checkPassword(str) {
    let passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(!passRegex.test(str)){
        passcheckLogin.style.display = "block";
    }else{
        passcheckLogin.style.display = "none";
    } 
}

window.checkPassword = checkPassword;

// Login password regex end