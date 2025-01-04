"use strict";

//Selections  and global variables
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const password = document.getElementById("password");
const icons = document.querySelectorAll(".fa-regular");
const btnRegister = document.getElementById("btn");
// console.log(form);

// Variables
const strings = [firstName, lastName];
const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,16}$/;

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const stringPattern = /^[A-Za-z]+$/;
const numberPattern = /^[0-9]{9,10}$/;
const names = ["first", "last"];
const errorIcon = document.querySelector(".fa-circle-xmark");
const successIcon = document.querySelector(".fa-circle-check");

//hide icons
icons.forEach((icon) => icon.classList.add("hidden"));
//Functions
const validateInputEvent = function (format, field, error, success) {
  if (format.test(field.value) && field.value !== "") {
    field.classList.add("success");
    if (field.classList.contains("success")) {
      success.classList.remove("hidden");
      error.classList.add("hidden");
      field.classList.remove("error");
    }
  } else {
    field.classList.remove("success");
    field.classList.add("error");
    error.classList.remove("hidden");
    success.classList.add("hidden");
  }
};

const validateBlurEvent = function (field, className) {
  if (field.value === "") {
    field.classList.add("error");
    field.classList.remove("success");
    document
      .querySelector(`.${className} .fa-circle-xmark`)
      .classList.remove("hidden");
  }
};

names.forEach((name) => {
  const inputElement = document.querySelector(`#${name}name`);
  const xMarkIcon = document.querySelector(`.${name} .fa-circle-xmark`);
  const checkIcon = document.querySelector(`.${name} .fa-circle-check`);

  inputElement.addEventListener("input", function (e) {
    e.preventDefault();

    validateInputEvent(stringPattern, inputElement, xMarkIcon, checkIcon);
  });

  inputElement.addEventListener("blur", function (e) {
    e.preventDefault();

    validateBlurEvent(inputElement, name);
  });
});

phone.addEventListener("input", function (e) {
  e.preventDefault();
  const iconError = document.querySelector(`.phone .fa-circle-xmark`);
  const iconSuccess = document.querySelector(`.phone .fa-circle-check`);
  validateInputEvent(numberPattern, phone, iconError, iconSuccess);
});

phone.addEventListener("blur", function (e) {
  e.preventDefault();

  validateBlurEvent(phone, "phone");
});

email.addEventListener("input", function (e) {
  e.preventDefault();
  const iconError = document.querySelector(`.email .fa-circle-xmark`);
  const iconSuccess = document.querySelector(`.email .fa-circle-check`);
  validateInputEvent(emailPattern, email, iconError, iconSuccess);
});
email.addEventListener("blur", function (e) {
  e.preventDefault();

  validateBlurEvent(email, "email");
});

password.addEventListener("input", function (e) {
  e.preventDefault();

  const iconError = document.querySelector(`.password .fa-circle-xmark`);
  const iconSuccess = document.querySelector(`.password .fa-circle-check`);
  validateInputEvent(passwordPattern, password, iconError, iconSuccess);
});

password.addEventListener("blur", function (e) {
  e.preventDefault();

  validateBlurEvent(password, "password");
});
