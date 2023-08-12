const btnMenu = document.getElementById("btn-menu");
const listMenu = document.querySelector(".menu-list ul");

btnMenu.addEventListener("click", () => {
  listMenu.classList.toggle("-translate-x-full");
});
