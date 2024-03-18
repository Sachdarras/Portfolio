const html = document.getElementsByTagName(`html`)[0];
const themeSwitch = document.getElementById(`themeLogo`);

themeSwitch.addEventListener(`click`, () => {
  html.classList.toggle(`jour`);
});
