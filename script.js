/* NGANSA WEBSITE - script.js
   Mobile menu + WhatsApp contact form
*/

(function () {
    "use strict";

    // MOBILE MENU
    window.toggleMenu = function () {
        const navLinks = document.querySelector(".nav-links");

        if (!navLinks) return;

        navLinks.classList.toggle("open");
    };

    document.addEventListener("DOMContentLoaded", function () {

        const navLinks = document.querySelector(".nav-links");
        const menuButton = document.querySelector(".menu-btn");
        const contactForm = document.getElementById("contactForm");

        // Keep the button as ☰ Menu
        if (menuButton) {
            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-label", "Open navigation");
        }

        // Close menu when a link is clicked
        if (navLinks) {
            navLinks.querySelectorAll("a").forEach(function (link) {
                link.addEventListener("click", function () {
                    navLinks.classList.remove("open");
                });
            });
        }

        // Close menu when clicking outside
        document.addEventListener("click", function (event) {
            if (!navLinks || !menuButton) return;

            if (
                navLinks.classList.contains("open") &&
                !navLinks.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {
                navLinks.classList.remove("open");
            }
        });

        // WHATSAPP CONTACT FORM
        if (contactForm) {

            contactForm.addEventListener("submit", function (event) {
                event.preventDefault();

                const name = document.getElementById("name");
                const phone = document.getElementById("phone");
                const service = document.getElementById("service");
                const message = document.getElementById("message");

                if (!name || !phone || !service || !message) {
                    alert("Please complete the enquiry form.");
                    return;
                }

                const nameValue = name.value.trim();
                const phoneValue = phone.value.trim();
                const serviceValue = service.value.trim();
                const messageValue = message.value.trim();

                if (!nameValue || !phoneValue || !messageValue) {
                    alert(
                        "Please fill in your name, phone number and project details."
                    );
                    return;
                }

                // NGANSA WhatsApp number
                const whatsappNumber = "237677851448";

                const whatsappMessage =
                    "Hello NGANSA, I would like to make an enquiry.\n\n" +
                    "Name: " + nameValue + "\n" +
                    "Phone: " + phoneValue + "\n" +
                    "Service needed: " + serviceValue + "\n" +
                    "Project details: " + messageValue;

                const whatsappURL =
                    "https://wa.me/" +
                    whatsappNumber +
                    "?text=" +
                    encodeURIComponent(whatsappMessage);

                window.open(whatsappURL, "_blank");

                contactForm.reset();
            });
        }

    });

})();
