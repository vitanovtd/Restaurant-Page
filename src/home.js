export function loadHome() {
  const contentDiv = document.getElementById("content");
  contentDiv.textContent = "";

  contentDiv.className = "hero";

  const heroContent = document.createElement("div");
  heroContent.className = "hero-content";

  const heading = document.createElement("h1");
  heading.innerHTML = "Benvenuti <br /> Pasticceria San Marco";

  const paragraph = document.createElement("p");
  paragraph.textContent = "Il posto per te";

  const button = document.createElement("button");
  button.className = "cta-button";
  button.textContent = "Vai al menu";

  heroContent.appendChild(heading);
  heroContent.appendChild(paragraph);
  heroContent.appendChild(button);

  contentDiv.appendChild(heroContent);
}
