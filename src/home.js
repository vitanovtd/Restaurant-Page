export function loadHome() {
  const contentDiv = document.getElementById("content");
  contentDiv.textContent = "";

  const welcomeMessage = document.createElement("h1");
  welcomeMessage.textContent = "Welcome to Our Restaurant!";
  contentDiv.appendChild(welcomeMessage);
}
