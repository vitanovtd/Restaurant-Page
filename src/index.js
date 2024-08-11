import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";

// function loadHomePage() {
//   const contentDiv = document.getElementById("content");
//   contentDiv.textContent = "";

//   const welcomeMessage = document.createElement("h1");
//   welcomeMessage.textContent = "Welcome to Our Restaurant";
//   contentDiv.appendChild(welcomeMessage);
// }

// document.addEventListener("DOMContentLoaded", () => {
//   loadHomePage();
// });

function init() {
  document.getElementById("home-btn").addEventListener("click", loadHome);
  document.getElementById("menu-btn").addEventListener("click", loadMenu);
  document.getElementById("contact-btn").addEventListener("click", loadContact);

  loadHome();
}

document.addEventListener("DOMContentLoaded", init);
