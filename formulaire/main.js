const nom = document.querySelector("#nomInput");
const prenom = document.querySelector("#prenomInput");
const email = document.querySelector("#emailInput");
const sujet = document.querySelector("#sujetInput");
const tel = document.querySelector("#telInput");
const message = document.querySelector("#messageTextArea");

/*---------------- Variables de Validation ---------------------------*/
let nomValid = false;
let prenomValid = false;
let emailValid = false;
let sujetValid = false;
let telValid = false;
let messageValid = false;

const userRegex = /^[a-zA-Z-]{3,23}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PhoneNumberRegex = /^\+(?:\d{1,3})?\d{10}$/;
const SujetRegex = /^[^<>{}$]{3,200}$/;
const messageRegex = /^[^<>{}$]{24,}$/;


function addClass(element, regex, value) {
  if (regex.test(value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
  } else {
    element.classList.remove("is-valid");
    element.classList.add("is-invalid");
  }
}

nom.addEventListener("input", (e) => {
  addClass(nom, userRegex, e.target.value);
  if (nom.classList.contains("is-valid")) {
    nomValid = true;
  } else {
    nomValid = false;
  }
});
