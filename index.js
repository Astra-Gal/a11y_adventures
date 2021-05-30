document.addEventListener("DOMContentLoaded", () => {
  // toggle the password field type from password to text
  const password = document.getElementById("password");
  const showPassword = document.getElementById("showPassword");
  const signUpError = document.getElementById("sign-up-error");

  showPassword.addEventListener("change", function () {
    let type = this.checked ? "text" : "password";
    password.setAttribute("type", type);
  });

  // prevent form being submitted with errors
  const signUpForm = document.getElementById("sign-up");
  // const signUpError = document.getElementById("sign-up-error");
  signUpForm.addEventListener("submit", function (event) {
    if (errors) {
      event.preventDefault(); // don't submit
      signUpError.style.display = "block";
      signUpError.textContent =
        "Uh oh! Looks like there's a problem... please check your info above";
    }
  });
});
