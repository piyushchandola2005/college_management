const sign_in_btn = document.querySelector("#sign-in-btn");
const forgot_password_btn = document.querySelector("#forgot-password-btn");
const forgot_password_link = document.querySelector("#forgot-password-link");
const back_to_login_link = document.querySelector("#back-to-login-link");
const container = document.querySelector(".container");
const themeToggle = document.querySelector("#theme-toggle");

forgot_password_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

forgot_password_link.addEventListener("click", (event) => {
  event.preventDefault();
  container.classList.add("flip");
});

back_to_login_link.addEventListener("click", (event) => {
  event.preventDefault();
  container.classList.remove("flip");
});

themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});