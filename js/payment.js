const overskrift = document.querySelector(`.paypay`);
const form = document.querySelector(`form`);
const fullName = document.querySelector(`#fullName`);
const nameError = document.querySelector(`#nameError`);
const email = document.querySelector(`#email`);
const emailError = document.querySelector(`#emailError`);
const address = document.querySelector(`#address`);
const addressError = document.querySelector(`#addressError`);
const back = document.querySelector(`.back-button`);
const mobile = document.querySelector(`#mobile`);
const mobileError = document.querySelector(`#numberError`);
const countryName = document.querySelector(`#country`);
const countryError = document.querySelector(`#countryError`);
const cardNumber = document.querySelector(`#cardNumber`);
const cardError = document.querySelector(`#cardError`);
const expDate = document.querySelector(`#expDate`);
const expDateError = document.querySelector(`#expDateError`);
const csc = document.querySelector(`#csc`);
const cscError = document.querySelector(`#cscError`);

function formCheck(event) {
    event.preventDefault();

    if (check(fullName.value, 0) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    };

    if (check(countryName.value, 3) === true) {
        countryError.style.display = "none";
    } else {
        countryError.style.display = "block";
    };

    if (check(cardNumber.value, 12) === true) {
        cardError.style.display = "none";
    } else {
        cardError.style.display = "block";
    };

    if (check(expDate.value, 4) === true) {
        expDateError.style.display = "none";
    } else {
        expDateError.style.display = "block";
    };

    if (checkEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    };

    if (check(address.value, 2) === true) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    };

    if (check(fullName.value, 0) && check(countryName.value, 3) && check(cardNumber.value, 12)&& check(expDate.value, 4)&& checkEmail(email.value) && check(address.value, 25)) {
    overskrift.style.display = "block";
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