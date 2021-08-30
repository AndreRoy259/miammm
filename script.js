//! QUERY SELECTORS
const menuCreator = document.getElementById("menu-creator");
const orderCreator = document.getElementById("order-creator");

const form1 = document.getElementById("form1");
const nomResto = document.getElementById("nom-resto");
const nomEntree1 = document.getElementById("entree1");
const nomEntree2 = document.getElementById("entree2");
const nomEntree3 = document.getElementById("entree3");
const nomEntree4 = document.getElementById("entree4");
const nomEntree5 = document.getElementById("entree5");

const labelEntree1 = document.getElementById("label-entree1");
const labelEntree2 = document.getElementById("label-entree2");
const labelEntree3 = document.getElementById("label-entree3");
const labelEntree4 = document.getElementById("label-entree4");
const labelEntree5 = document.getElementById("label-entree5");

const nomPlat1 = document.getElementById("plat1");
const nomPlat2 = document.getElementById("plat2");
const nomPlat3 = document.getElementById("plat3");
const nomPlat4 = document.getElementById("plat4");
const nomPlat5 = document.getElementById("plat5");

const labelPlat1 = document.getElementById("label-plat1");
const labelPlat2 = document.getElementById("label-plat2");
const labelPlat3 = document.getElementById("label-plat3");
const labelPlat4 = document.getElementById("label-plat4");
const labelPlat5 = document.getElementById("label-plat5");

const nomDessert1 = document.getElementById("dessert1");
const nomDessert2 = document.getElementById("dessert2");
const nomDessert3 = document.getElementById("dessert3");
const nomDessert4 = document.getElementById("dessert4");
const nomDessert5 = document.getElementById("dessert5");

const labelDessert1 = document.getElementById("label-dessert1");
const labelDessert2 = document.getElementById("label-dessert2");
const labelDessert3 = document.getElementById("label-dessert3");
const labelDessert4 = document.getElementById("label-dessert4");
const labelDessert5 = document.getElementById("label-dessert5");



//! FUNCTIONS
//* Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//* Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//* Check email is valid
function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

//* Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//* Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

//* Check passwords match
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}

//* Get field name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//! EVENT LISTERNERS
form1.addEventListener("submit", function (e) {
  e.preventDefault();

  // * Form Validation
  // checkRequired([username, email, password, password2]);
  // checkLength(username, 3, 15);
  // checkEmail(email);
  // checkLength(password, 6, 25);
  // checkPasswordMatch(password, password2);

  labelEntree1.innerHTML = nomEntree1.value;
  labelEntree2.innerHTML = nomEntree2.value;
  labelEntree3.innerHTML = nomEntree3.value;
  labelEntree4.innerHTML = nomEntree4.value;
  labelEntree5.innerHTML = nomEntree5.value;

  labelPlat1.innerHTML = nomPlat1.value;
  labelPlat2.innerHTML = nomPlat2.value;
  labelPlat3.innerHTML = nomPlat3.value;
  labelPlat4.innerHTML = nomPlat4.value;
  labelPlat5.innerHTML = nomPlat5.value;

  labelDessert1.innerHTML = nomDessert1.value;
  labelDessert2.innerHTML = nomDessert2.value;
  labelDessert3.innerHTML = nomDessert3.value;
  labelDessert4.innerHTML = nomDessert4.value;
  labelDessert5.innerHTML = nomDessert5.value;

  menuCreator.classList.toggle("hidden");
  orderCreator.classList.toggle("hidden");

});
