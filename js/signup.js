

import {auth , createUserWithEmailAndPassword} from "./firebase-config.js" 

let fullName = document.getElementById("full-name");
let signupEmail = document.getElementById("signup-email");
let signupPassword = document.getElementById("signup-password");
let signupConfirmPassword = document.getElementById("signup-confirm-password");
let signupButton = document.getElementById("signup-button");
function signup() {
    let confirmCheck = document.getElementById("confirmCheck");
    let Namecheck = document.getElementById("Namecheck");
    if (fullName.value === "") {
        Namecheck.style.display = "block";
    }
    else if (signupPassword.value != signupConfirmPassword.value) {
        confirmCheck.style.display = "block";
    }
    else {
        createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value)
  .then((userCredential) => {
    const user = userCredential.user;
    window.location = "../index.html"
    fullName.value = "";
    signupEmail.value = "";
})
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
    }
}
signupButton.addEventListener("click", signup)


// signup email regex start
let emailcheck = document.getElementById("emailcheck");
function checkEmail(str)
{
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(str)){
        emailcheck.style.display = "block";
    }else{
        emailcheck.style.display = "none";
    }
}

window.checkEmail = checkEmail;
// signup email regex end


// signup password regex start
let passcheck = document.getElementById("passcheck");
function checkPassword(str) {
    let passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(!passRegex.test(str)){
        passcheck.style.display = "block";
    }else{
        passcheck.style.display = "none";
    } 
}

window.checkPassword = checkPassword;

// signup password regex end
