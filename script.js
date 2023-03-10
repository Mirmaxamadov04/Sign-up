elButtonLeft = document.querySelector(".main__left__button");
elMainLeft = document.querySelector(".main__left");
elButtonRight = document.querySelector(".main__right__button");
elMainRight = document.querySelector(".main__right");
elSignUp = document.querySelector(".sign-up");
elLogin = document.querySelector(".login");
elGoBack = document.querySelector(".go-back");
elResBtnSign = document.querySelector(".res-btn-sign");
elResBtnLogin = document.querySelector(".res-btn-login ");
// elInput = document.querySelector(".sign-up__input");
// ellabel = document.querySelector(".sign-up-label");

const toconvertform = function (mainLeft, mainRight, login, signUp, goBack) {
  mainLeft.style.opacity = "0";
  mainRight.style.opacity = "1";
  login.style.display = "none";
  signUp.style.display = "block";
  goBack.classList.toggle("signclicked");
};

elButtonRight.addEventListener("click", (evt) => {
  evt.preventDefault();
  toconvertform(elMainRight, elMainLeft, elSignUp, elLogin, elGoBack);
  elGoBack.classList.remove("loginclicked");
});

elButtonLeft.addEventListener("click", (evt) => {
  evt.preventDefault();
  toconvertform(elMainLeft, elMainRight, elLogin, elSignUp, elGoBack);
  elGoBack.classList.add("loginclicked");
});

elResBtnSign.addEventListener("click", (evt) => {
  evt.preventDefault();
  toconvertform(elMainLeft, elMainRight, elLogin, elSignUp, elGoBack);
});

elResBtnLogin.addEventListener("click", (evt) => {
  evt.preventDefault();
  toconvertform(elMainRight, elMainLeft, elSignUp, elLogin, elGoBack);
});

// if (elInput.value != "") {
//   ellabel.style.display = "none";
// }

// elSignUpHeading = document.querySelector(".sign-up__heading");
// elSignUpInput = document.querySelector("#email");
// elSignUpButton = document.querySelector(".sign-up__button");

// elLogin = document.querySelector(".login");

//events
// elButtonRight.addEventListener("click", (evt) => {
//   evt.preventDefault();

//   elSignUp.classList.toggle("clicked");
//   setTimeout(() => {
//     elMainLeft.style.opacity = "1";
//     elMainRight.style.opacity = "0";
//     elSignUpHeading.textContent = "Login";
//     elSignUpInput.style.display = "none";
//     elSignUpButton.textContent = "Login";
//   }, 800);
// });

// elButtonLeft.addEventListener("click", (evt) => {
//   evt.preventDefault();

//   setTimeout(() => {
//     elSignUp.classList.toggle("clicked");
//     elMainRight.style.opacity = "1";
//     elMainLeft.style.opacity = "0";
//     elSignUpHeading.textContent = "Sign up";
//     elSignUpInput.style.display = "block";
//     elSignUpButton.textContent = "Sign up";
//   }, 400);
// });
