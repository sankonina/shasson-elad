// כתובת הדוא"ל לקבלת פניות מהאתר.
const CONTACT_EMAIL = "eladsb@gmail.com";

const yearElement = document.getElementById("year");
if (yearElement) yearElement.textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu");
const nav = document.querySelector(".site-header nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }));
}

const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const subject = encodeURIComponent("פנייה חדשה מהאתר – " + data.get("name"));
    const body = encodeURIComponent(
      "שם: " + data.get("name") +
      "\nטלפון: " + data.get("phone") +
      "\nהודעה: " + (data.get("message") || "לא נמסרה הודעה")
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  });
}
