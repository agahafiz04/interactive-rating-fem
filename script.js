const buttonEl = document.querySelector(".submit-button");
const initialModalEl = document.querySelector(".initial-modal");
const stateModalEl = document.querySelector(".state-modal");
const radioButtonEl = document.querySelectorAll('input[name="rates"]');
const ratingEl = document.querySelector("#selected-rate");

buttonEl.disabled = true;

radioButtonEl.forEach((radio) => {
  radio.addEventListener("click", function () {
    buttonEl.disabled = false;
    ratingEl.textContent = radio.value;
  });
});

buttonEl.addEventListener("click", function () {
  if (buttonEl.disabled == true) {
  }

  if (initialModalEl.getAttribute("id", "on")) {
    initialModalEl.setAttribute("id", "off");
    stateModalEl.setAttribute("id", "on");
  }
});
