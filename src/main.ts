// import './scss/style.scss'

let menu_btn = document.querySelector(".header-menu-btn");
let drop_menu = document.querySelector(".container-drop-menu");

function open_drop_menu() {
  console.log("click");
  drop_menu.style.display = "block";
}

menu_btn?.addEventListener("click", open_drop_menu);
