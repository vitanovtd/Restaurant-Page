import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";

import "./style.css";

function switchTab(e) {
  const tabs = document.querySelectorAll("nav ul li a");
  tabs.forEach((tab) => tab.classList.remove("active"));

  e.target.classList.add("active");



  if (e.target.id === "home-btn") {
    loadHome();
  } else if (e.target.id === "menu-btn") {
    loadMenu();
  } else if (e.target.id === "contact-btn") {
    loadContact();
  }
}

function init() {
  document.getElementById("home-btn").addEventListener("click", switchTab);
  document.getElementById("menu-btn").addEventListener("click", switchTab);
  document.getElementById("contact-btn").addEventListener("click", switchTab);

  loadHome();
}

document.addEventListener("DOMContentLoaded", init);
