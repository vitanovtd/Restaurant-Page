export function loadContact() {
  const contentDiv = document.getElementById("content");
  contentDiv.textContent = "";

  const contactHeading = document.createElement("h1");
  contactHeading.textContent = "Contact Us";
  contentDiv.appendChild(contactHeading);

  const contactInfo = document.createElement("div");
  contactInfo.className = "contact-info";

  const address = document.createElement("p");
  address.textContent = "123 Pasticceria St, Siena, Italia";

  const phone = document.createElement("p");
  phone.textContent = "Phone: +39 55 555 5555";

  const hours = document.createElement("p");
  hours.textContent = "Opening Hours: Mon-Fri, 8am - 8pm";

  contactInfo.appendChild(address);
  contactInfo.appendChild(phone);
  contactInfo.appendChild(hours);

  contentDiv.appendChild(contactInfo);
}
