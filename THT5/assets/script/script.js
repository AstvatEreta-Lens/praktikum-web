
const toggleButton = document.querySelector(".toggle-button");
const menu = document.querySelector(".menu");

toggleButton.addEventListener("click", () => {
  menu.classList.toggle("show");
});
