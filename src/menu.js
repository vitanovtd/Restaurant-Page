export function loadMenu() {
  const contentDiv = document.getElementById("content");
  contentDiv.textContent = "";

  const recipe1 = document.createElement("div");
  recipe1.className = "recipe";

  const recipe1Title = document.createElement("h2");
  recipe1Title.textContent = "Tiramisu";
  recipe1.appendChild(recipe1Title);

  const recipe1Description = document.createElement("p");
  recipe1Description.textContent =
    "A classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.";
  recipe1.appendChild(recipe1Description);

  const line = document.createElement("hr");

  const recipe2 = document.createElement("div");
  recipe2.className = "recipe";

  const recipe2Title = document.createElement("h2");
  recipe2Title.textContent = "Cannoli";
  recipe2.appendChild(recipe2Title);

  const recipe2Description = document.createElement("p");
  recipe2Description.textContent =
    "Crispy pastry shells filled with sweet ricotta cheese and chocolate chips.";
  recipe2.appendChild(recipe2Description);

  contentDiv.appendChild(recipe1);
  contentDiv.appendChild(line);
  contentDiv.appendChild(recipe2);
}
