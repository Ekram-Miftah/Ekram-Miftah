var nameError = document.getElementById('name-err');
var phoneError = document.getElementById('phone-err');
var emailError = document.getElementById('email-err');
var messageError = document.getElementById('msg-err');
var subError = document.getElementById('submit-err');

let eyeicon = document.getElementById("eye_icon");
let password = document.getElementById("contact-passd");

eyeicon.onclick = function() {
    if (password.type === "password") {
        password.type = "text";
        eyeicon.src = "images/eye open.png"; 
    } else {
        password.type = "password";
        eyeicon.src = "images/eye close.png"; 
    }
};


function validatePassword() {
    var passwordValue = document.getElementById('contact-passd').value;
    if (passwordValue.length < 6) {
        document.getElementById('passd-err').innerHTML = 'Password must be at least 6 characters';
        return false;
    }
    document.getElementById('passd-err').innerHTML = '<i class="fa-solid fa-circle-check" ></i>';
    return true;
}

function validateName() {
    var name = document.getElementById('contact-name').value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name is Required!';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write your full name!';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check" ></i>';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('contact-phone').value;
    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone is Required';
        return false;
    }
    if (phone.length != 10) {
        phoneError.innerHTML = 'Phone should be 10 digits';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Invalid Phone Number!';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check" ></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById('contact-email').value;
    if (email.length == 0) {
        emailError.innerHTML = 'Email is Required';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Invalid Email!';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check" ></i>';
    return true;
}

function validateMessage() {
    var message = document.getElementById('textarea').value; // Updated to use correct id
    var req = 30;
    var left = req - message.length;
    if (left > 0) {
        messageError.innerHTML = left + ' more characters required';
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check" ></i>';
    return true;
}

function validateForm() {
    if (!validateName() || !validateEmail() || !validateMessage() || !validatePhone() || !validatePassword()) {
        subError.style.display = 'block';
        subError.innerHTML = 'Please fix your Errors';
        setTimeout(function () {
            subError.style.display = 'none';
        }, 2000);
        return false;
    }
    return true; // Allow form submission if all validations pass
}
