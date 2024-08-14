export function loadHome() {
  const contentDiv = document.getElementById("content");
  contentDiv.textContent = "";

  const heroContent = document.createElement("div");
  heroContent.className = "hero-content";

  const welcomeMessage = document.createElement("h1");
  welcomeMessage.innerHTML = "Benvenuti <br />Pasticceria San Marco";
  heroContent.appendChild(welcomeMessage);

  const description = document.createElement("p");
  description.textContent = "Il posto per te";
  heroContent.appendChild(description);

  const menuButton = document.createElement("button");
  menuButton.className = "cta-button";
  menuButton.textContent = "Vai al menu";
  menuButton.addEventListener("click", () => {
    document.getElementById("menu-btn").click(); // Simulate a click on the Menu tab
  });
  heroContent.appendChild(menuButton);

  contentDiv.appendChild(heroContent);
}
