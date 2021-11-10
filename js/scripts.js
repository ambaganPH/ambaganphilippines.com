// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { auth } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyA2Jvh_90n3fv2MDVuVBq_-v4tkSh3RuBo",
authDomain: "ambagan-philippines.firebaseapp.com",
projectId: "ambagan-philippines",
storageBucket: "ambagan-philippines.appspot.com",
messagingSenderId: "782143642194",
appId: "1:782143642194:web:1f9bf5751f031f0929dd8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function register()  {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var firstName = document.getElementById('firstName').value
    var middleName = document.getElementById('middleName').value
    var surname = document.getElementById('surname').value
    var phoneNumber = document.getElementById('phoneNumber').value
    
    /*if (validate_email(email) == false || validate_password(password) == false) {
        alert('email or password invalid')
    }

    if (validate_field(firstName) == false || validate_field(middleName) == false || validate_field(surname) == false)
    {
        alert('One or more of the fields are invalid')
    }*/
    auth.createUserWithEmailAndPassword(email, password).then(function() {
        var user = firebase.auth().currentUser

        alert('User Created')
        /*var database_ref = database.ref()
        var user_data = {
            email : email,
            firstName : firstName,
            middleName : middleName,
            surname : surname,
            phoneNumber : phoneNumber,
            last_login : Date.now()
        }

        database_ref.child('users/' + user.uid).set(user_data)
*/
        alert('User Created')
    }).catch(function(error) {
        var errorcode = error.code
        var errormsg = error.message
        alert(errormsg)
    })
}
/*
function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true)  {
        return true
    }
    else {
        return false
    }
}

function validate_password(password) {
    if (password < 6) {
        return false
    }
    else {
        return true
    }
}

function validate_field(field) {
    if (field == null) {
        return false
    }

    if (field.length <= 0) {
        return false
    }
    else {
        return true
    }
}*/