const signinSection = document.querySelector(`.signin-section`);
const overskrift = document.querySelector(`#skjema`);
const form = document.querySelector(`form`);
const email = document.querySelector(`#email`);
const emailError = document.querySelector(`#emailError`);
const password = document.querySelector(`#password`);
const passwordError = document.querySelector(`#passwordError`);

function formCheck(event) {
    event.preventDefault();

    if (check(password.value, 10) === true) {
        passwordError.style.display = "none";
    } else {
        passwordError.style.display = "block";
    };

    if (checkEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    };

if (check(password.value, 10) && checkEmail(email.value)) {
    overskrift.innerHTML = `<h4 class="submitVal">You have logged in successfully</h3>`;
    password.value = ""
    email.value = ""
    form.style.background = "#00ff0047"
    };
};

form.addEventListener("submit", formCheck);

function check(value, length) {
    if (value.trim().length > length) {
        return true;
    } else {
        return false;
    };
};

function checkEmail(email) {
    const regEx = /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    const match = regEx.test(email);
    return match;
};