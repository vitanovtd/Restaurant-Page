export function loadContact() {
  const contentDiv = document.getElementById("content");
  contentDiv.textContent = "";

  const contactHeading = document.createElement("h1");
  contactHeading.textContent = "Contact Us";
  contentDiv.appendChild(contactHeading);
}
