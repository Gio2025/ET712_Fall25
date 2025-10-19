console.log("Homework 4 by George Athanasopoulos");

const form = document.getElementById("userForm");
const fullnameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const fullnameError = document.getElementById("fullname_error");
const emailError = document.getElementById("email_error");
const passwordError = document.getElementById("password_error");

// Validation functions remain the same

function validateFullname() {
  const value = fullnameInput.value.trim();
  if (value === "") {
    fullnameError.textContent = "Full Name must not be empty.";
    return false;
  } else {
    fullnameError.textContent = "";
    return true;
  }
}

function validateEmail() {
  const value = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (value === "") {
    emailError.textContent = "Email must not be empty.";
    return false;
  } else if (!emailRegex.test(value)) {
    emailError.textContent = "Please enter a valid email address.";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

function validatePassword() {
  const value = passwordInput.value;
  const specialCharRegex = /[#\$%]/;
  if (value.length < 5) {
    passwordError.textContent = "Password must be at least 5 characters.";
    return false;
  } else if (!specialCharRegex.test(value)) {
    passwordError.textContent = "Password must contain at least one special character (#, $, %).";
    return false;
  } else {
    passwordError.textContent = "";
    return true;
  }
}

// Real-time event listeners to show/hide errors while typing
fullnameInput.addEventListener("input", validateFullname);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);

// On submit, prevent submission only if invalid, otherwise allow default submit behavior
form.addEventListener("submit", function (event) {
  const isFullnameValid = validateFullname();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  if (!isFullnameValid || !isEmailValid || !isPasswordValid) {
    event.preventDefault(); // block submission if any invalid
  }
  // else form submits normally and navigates to actions page
});
