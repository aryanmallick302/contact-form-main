const form = document.querySelector("form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const generalQuery = document.querySelector("#general-query");
const supportRequest = document.querySelector("#support-request");
const messageArea = document.querySelector("#message");
const btn = document.querySelector("button[type='submit'");
const firstNameError = document.querySelector("#firstName-error-message");
const lastNameError = document.querySelector("#lastName-error-message");
const emailError = document.querySelector("#email-error-message");
const myCheckBox = document.querySelector(".my-checkbox");

myCheckBox.addEventListener("change", () => {
  if (myCheckBox.checked) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
});
btn.disabled = true;

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  clearError();

  isValid = true;

  if (firstName.value.trim() == "") {
    firstNameError.textContent = "First name is required";
    firstNameError.classList.add("show");
    isValid = false;
  }

  if (lastName.value.trim() == "") {
    lastNameError.textContent = "Last name is required";
    lastNameError.classList.add("show");
    isValid = false;
  }

  if (email.value.trim() == "") {
    emailError.textContent = "Email is required";
    emailError.classList.add("show");
    isValid = false;
  }

  if (isValid) {
    alert("Form is submitted successfully");
  }

  btnDisable();
});

const clearError = () => {
  const errors = document.querySelectorAll(".error-message");
  errors.forEach((error) => {
    error.textContent = "";
    error.classList.remove = "show";
  });
};
