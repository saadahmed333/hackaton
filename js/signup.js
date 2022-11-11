import { auth, createUserWithEmailAndPassword } from './firebase-config.js'
import { storage } from './firebase-config.js'
import { ref } from './firebase-config.js'
import { uploadBytesResumable , uploadBytes} from './firebase-config.js'
import { getDownloadURL } from './firebase-config.js'
import { doc, setDoc, db } from './firebase-config.js'

let fullName = document.getElementById('full-name')
let signupEmail = document.getElementById('signup-email')
let signupPassword = document.getElementById('signup-password')
let signupConfirmPassword = document.getElementById('signup-confirm-password')
let signupButton = document.getElementById('signup-button')
let signupFile = document.getElementById('signup-file')

let image
let fileName

let userImageUrl;
function signup() {
  let confirmCheck = document.getElementById('confirmCheck')
  let Namecheck = document.getElementById('Namecheck')
  let fileCheck = document.getElementById('fileCheck')
  if (fullName.value === '') {
    Namecheck.style.display = 'block'
  } else if (signupPassword.value != signupConfirmPassword.value) {
    confirmCheck.style.display = 'block'
  } else if (signupFile.value === '') {
    fileCheck.style.display = 'block'
  } else {
    createUserWithEmailAndPassword(
      auth,
      signupEmail.value,
      signupPassword.value,
    )
      .then(async (userCredential) => {
        const user = userCredential.user.uid
        uploadPic(user)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
      })
  }
}
signupButton.addEventListener('click', signup)




async function uploadPic(user) {
    let file = signupFile.files[0];
    let imageRef = ref(storage, `images/${file.name}`);
    try {
        let uploaded = await uploadBytes(imageRef, file);
        userImageUrl = await getDownloadURL(imageRef);
        console.log(userImageUrl, 'downloadable URL');

        await setDoc(doc(db, 'users', user), {
            name: fullName.value,
            email: signupEmail.value,
            iMage: userImageUrl,
          })
          fullName.value = "";
          signupEmail.value = "";
          signupPassword.value = "";
          signupConfirmPassword.value = "";
          window.location = "../pages/chatapp.html"
    } catch (e) {
        console.log(e);
    }
}



// signup email regex start
let emailcheck = document.getElementById('emailcheck')
function checkEmail(str) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (!re.test(str)) {
    emailcheck.style.display = 'block'
  } else {
    emailcheck.style.display = 'none'
  }
}

window.checkEmail = checkEmail
// signup email regex end

// signup password regex start
let passcheck = document.getElementById('passcheck')
function checkPassword(str) {
  let passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  if (!passRegex.test(str)) {
    passcheck.style.display = 'block'
  } else {
    passcheck.style.display = 'none'
  }
}

window.checkPassword = checkPassword

// signup password regex end




// function signup() {
//   let confirmCheck = document.getElementById('confirmCheck')
//   let Namecheck = document.getElementById('Namecheck')
//   let fileCheck = document.getElementById('fileCheck')
//   if (fullName.value === '') {
//     Namecheck.style.display = 'block'
//   } else if (signupPassword.value != signupConfirmPassword.value) {
//     confirmCheck.style.display = 'block'
//   } else if (signupFile.value === '') {
//     fileCheck.style.display = 'block'
//   } else {
//     createUserWithEmailAndPassword(
//       auth,
//       signupEmail.value,
//       signupPassword.value,
//     )
//       .then(async (userCredential) => {
//         const user = userCredential.user.uid;
//         await setDoc(doc(db, "users", user), {
//             name: fullName.value,
//             email: signupEmail.value,
//             iMage: image,
//           });
//       fileName = signupFile.files[0].name;
//           const storageRef = ref(storage, 'images/' + fileName);
//       const uploadTask = uploadBytesResumable(storageRef, signupFile.files[0]);

//       uploadTask.on('state_changed',
//         (snapshot) => {
//           const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//           console.log('Upload is ' + progress + '% done');
//           switch (snapshot.state) {
//             case 'paused':
//               console.log('Upload is paused');
//               break;
//             case 'running':
//               console.log('Upload is running');
//               break;
//           }
//         },
//         (error) => {
//           switch (error.code) {
//             case 'storage/unauthorized':
//               break;
//             case 'storage/canceled':
//               break;
//             case 'storage/unknown':
//               break;
//           }
//         },
//         () => {
//             getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//                 console.log('File available at', downloadURL);
//                 image = downloadURL;
//               });
//         }
//       );
//         window.location = '../index.html'
//         fullName.value = ''
//         signupEmail.value = ''
//       })
//       .catch((error) => {
//         const errorCode = error.code
//         const errorMessage = error.message
//         console.log(errorCode)
//         console.log(errorMessage)
//       })

//   }
// }