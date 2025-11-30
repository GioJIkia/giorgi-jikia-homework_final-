const burger = document.querySelector(".header-burger-icon");
const xmark = document.querySelector(".header-x-icon");
const menu = document.querySelector(".header-menu");
burger.addEventListener("click", () => {
  burger.style.display = "none";
  xmark.style.display = "block";
  menu.style.left = "0";
});
xmark.addEventListener("click", () => {
  xmark.style.display = "none";
  burger.style.display = "block";
  menu.style.left = "-100%";
});
