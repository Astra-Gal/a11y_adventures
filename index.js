document.addEventListener("DOMContentLoaded", () => {
  // toggle the password field type from password to text
  const password = document.getElementById("password");
  const showPassword = document.getElementById("showPassword");

  showPassword.addEventListener("change", function () {
    let type = this.checked ? "text" : "password";
    password.setAttribute("type", type);
  });

  const signUpForm = document.getElementById("sign-up");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const signUpError = document.getElementById("sign-up-error");
  const signUpErrorMessages = document.getElementById("sign-up-error-messages");

  const nameHint = document.getElementById("name-hint");
  const emailHint = document.getElementById("email-hint");
  const passwordHint = document.getElementById("password-hint");

  // prevent form being submitted with errors
  signUpForm.addEventListener("submit", (event) => {
    let errorMessages = [];
    if (name.value === "" || name.value === null) {
      errorMessages.push("Name is required");
      nameHint.innerText = "Name is required";
      name.setAttribute("aria-describedby", "name-hint");
      name.setAttribute("aria-invalid", "true");
    }

    if (email.value === "" || email.value === null) {
      errorMessages.push("Email is required");
      emailHint.innerText = "Email is required";
      email.setAttribute("aria-describedby", "email-hint");
      email.setAttribute("aria-invalid", "true");
    }

    if (password.value === "" || password.value === null) {
      errorMessages.push("Password is required");
      passwordHint.innerText = "Password is required";
      password.setAttribute("aria-describedby", "password-hint");
      password.setAttribute("aria-invalid", "true");
    } else if (password.value.length < 6) {
      errorMessages.push("Password must be longer than 6 characters");
      passwordHint.innerText = "Password must be longer than 6 characters";
      password.setAttribute("aria-describedby", "password-hint");
      password.setAttribute("aria-invalid", "true");
    }

    if (errorMessages.length > 0) {
      event.preventDefault(); // don't submit
      signUpErrorMessages.innerText = errorMessages.join(", ");
      signUpError.style.display = "flex";
    }
  });
});
