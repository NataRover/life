// import './scss/style.scss'

const menu_btn = document.querySelector(".header-menu-btn");
const drop_menu = document.querySelector(".container-drop-menu") as any;
const container = document.querySelector(".container");

//нажатие на МЕНЮ
menu_btn?.addEventListener("click", function () {
  console.log("click");
  drop_menu.style.display = "block";
  noScroll();
});
//скролл окна исчезает
function noScroll() {
  document.body.style.overflow = "hidden";
}

//скролл окна появляется
function windowScroll() {
  document.body.style.overflow = "auto";
}
