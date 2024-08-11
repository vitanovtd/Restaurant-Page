export function loadMenu() {
  const contentDiv = document.getElementById("content");
  contentDiv.textContent = "";

  const menuHeading = document.createElement("h1");
  menuHeading.textContent = "Our Menu";
  contentDiv.appendChild(menuHeading);
}
