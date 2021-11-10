/*!
* Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyD2vjfd8ccYT1zoFn7oq-EkNQR-hPI2e-k",
authDomain: "ambagan-database.firebaseapp.com",
projectId: "ambagan-database",
storageBucket: "ambagan-database.appspot.com",
messagingSenderId: "922544539122",
appId: "1:922544539122:web:5764aa10ede10104da576b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize variables
const auth = firebase.auth();
const database = firebase.database();

function register()  {
    email = document.getElementByID('email').value
    password = document.getElementByID('password').value
    firstName = document.getElementByID('firstName').value
    middleName = document.getElementByID('middleName').value
    surname = document.getElementByID('surname').value
    phoneNumber = document.getElementByID('phoneNumber').value

    if (validate_email(email) == false || validate_password(password) == false) {
        alert('email or password invalid')
    }

    if (validate_field(firstName) == false || validate_field(middleName) == false || validate_field(surname) == false)
    {
        alert('One or more of the fields are invalid')
    }

    auth.createUserWithEmailAndPassword(email, passsword)
    .then(function() {
        var user = auth.currentUser

        var database_ref = database.ref()
        var user_data = {
            email : email,
            firstName : firstName,
            middleName : middleName,
            surname : surname,
            phoneNumber : phoneNumber,
            last_login : Date.now()
        }

        database_ref.child('users/' + user.uid).set(user_data)
    })
}

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
}