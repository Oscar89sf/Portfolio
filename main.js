import { init } from "./animations.js";

const navBtn = document.getElementById("nav-btn");
const navSm = document.getElementById("nav-sm");

navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("open");
  navSm.classList.toggle("toggled");
});

navSm.addEventListener("click", () => {
  navBtn.classList.toggle("open");
  navSm.classList.toggle("toggled");
});

window.addEventListener("load", init);
