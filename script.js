elButtonLeft = document.querySelector(".main__left__button");
elMainLeft = document.querySelector(".main__left");
elButtonRight = document.querySelector(".main__right__button");
elMainRight = document.querySelector(".main__right");
elSignUp = document.querySelector(".sign-up");
elLogin = document.querySelector(".login");
elGoBack = document.querySelector(".go-back");
elResBtnSign = document.querySelector(".res-btn-sign");
elResBtnLogin = document.querySelector(".res-btn-login ");
elPasswordEyeSign = document.querySelector("#password-img-sign");
elPasswordEyeLogin = document.querySelector("#password-img-login");
elPassword = document.querySelector("#password");
elPassword1 = document.querySelector("#password1");
elInput = document.querySelector("input");
elLabel = document.querySelector("label");

// elInput = document.querySelector(".sign-up__input");
// ellabel = document.querySelector(".sign-up-label");

const toconvertform = function (mainLeft, mainRight, login, signUp, goBack) {
  mainLeft.style.opacity = "0";
  mainRight.style.opacity = "1";
  login.style.display = "none";
  signUp.style.display = "block";
  goBack.classList.toggle("signclicked");
};

const passwordSee = function (imgPath, InputPath) {
  if (InputPath.type === "password") {
    InputPath.type = "text";
    imgPath.src = "./images/eye.png";
  } else if (InputPath.type === "text") {
    InputPath.type = "password";
    imgPath.src = "./images/eye-not.png";
    console.log("hi");
  }
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

elPasswordEyeSign.addEventListener("click", (evt) => {
  evt.preventDefault();
  passwordSee(elPasswordEyeSign, elPassword);
});

elPasswordEyeLogin.addEventListener("click", (evt) => {
  evt.preventDefault();
  passwordSee(elPasswordEyeLogin, elPassword1);
});
