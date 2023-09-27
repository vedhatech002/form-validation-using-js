const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
String.prototype.isEmail = function () {
    // Your email validation code here
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this);
};
String.prototype.isAlpha = function () {
    //alphabets

    return /^[a-zA-Z\s]+$/.test(this);
};
String.prototype.isPass = function () {
    //alphabets

    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(this);
};




function checkRequired(inputs) {
    inputs.forEach(input => {
        if (input.value.trim() === "") {
            //error

            errorInput(input, ` ${getName(input)} is required`);
        }
        else {
            // success msg
            successInput(input);
        }

    });

}
function getName(input) {

    // return input.id;
    return input.getAttribute("data-name");
}
function errorInput(input, msg) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group error";
    const p = formGroup.querySelector("p");
    p.innerText = msg;
}
function successInput(input) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group success";
    const p = formGroup.querySelector("p");
    p.innerHtml = "";
}
function checkLength(input, min, max) {
    const data = input.value.trim().length
    if (data < min) {
        errorInput(input, `${getName(input)} must be atleast greater than ${min} characters`);
    }
    else if (data > max) {
        errorInput(input, `${getName(input)} must be atleast lesser than ${max} characters`);
    }
    else {
        successInput(input);
    }
}
function checkConfirmPassword(password, password2) {
    if (password.value != password2.value) {
        errorInput(password2, `${getName(password2)}  does not match`);
    }
}
function checkEmail(input) {
    if (!input.value.trim().isEmail()) {
        errorInput(input, ` this is not an valid email id`);
    }
}
function checkAlpha(input) {
    if (!input.value.trim().isAlpha()) {
        errorInput(input, ` ${getName(input)} Must be a Alphabet`);
    }
}
function checkPass(input) {
    if (!input.value.trim().isPass()) {
        errorInput(input, ` ${getName(input)} 
         must contain at least one lowercase character and upperCase character and number and symbols and might be a 8 character`);
    }
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 5, 10);
    checkLength(password, 6, 12);
    checkConfirmPassword(password, password2);
    checkEmail(email);
    checkAlpha(username);
    checkPass(password);


});

