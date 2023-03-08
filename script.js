elButtonLeft = document.querySelector(".main__left__button");
elMainLeft = document.querySelector(".main__left");
elButtonRight = document.querySelector(".main__right__button");
elMainRight = document.querySelector(".main__right");
elSignUp = document.querySelector(".sign-up");

//events
elButtonRight.addEventListener("click", (evt) => {
  evt.preventDefault();
  elMainLeft.style.opacity = "1";
  elMainRight.style.opacity = "0";
  elSignUp.classList.toggle("sign-up-clicked");
});

elButtonLeft.addEventListener("click", (evt) => {
  evt.preventDefault();
  elMainRight.style.opacity = "1";
  elMainLeft.style.opacity = "0";
  elSignUp.classList.toggle("sign-up-clicked");
});
