
document.addEventListener("DOMContentLoaded", function () {

  // MOBILE MENU
  const menuButton = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");

  if (menuButton && navMenu) {
    menuButton.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  }

  // CLOSE MENU AFTER CLICKING A LINK
  const navLinks = document.querySelectorAll("nav ul a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (navMenu) {
        navMenu.classList.remove("active");
      }
    });
  });

  // CONTACT FORM → WHATSAPP
  const contactForm = document.querySelector("#contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.querySelector("#name")?.value.trim() || "";
      const email = document.querySelector("#email")?.value.trim() || "";
      const phone = document.querySelector("#phone")?.value.trim() || "";
      const message = document.querySelector("#message")?.value.trim() || "";

      const whatsappNumber = "237677851448";

      const whatsappMessage =
        "Hello, I would like to make an inquiry.%0A%0A" +
        "Name: " + encodeURIComponent(name) + "%0A" +
        "Email: " + encodeURIComponent(email) + "%0A" +
        "Phone: " + encodeURIComponent(phone) + "%0A" +
        "Message: " + encodeURIComponent(message);

      const whatsappURL =
        "https://wa.me/" + whatsappNumber + "?text=" + whatsappMessage;

      window.open(whatsappURL, "_blank");
    });
  }

});
