// יש להגדיר כאן את כתובת הדוא"ל שאליה יישלחו הפניות.
const CONTACT_EMAIL = "your-email@example.com";
document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu");
const nav = document.querySelector(".header nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  if (CONTACT_EMAIL === "your-email@example.com") {
    alert("יש להגדיר כתובת דוא״ל בקובץ script.js לפני קבלת פניות.");
    return;
  }
  const subject = encodeURIComponent("פנייה חדשה מהאתר – " + data.get("name"));
  const body = encodeURIComponent(
    "שם: " + data.get("name") +
    "\nטלפון: " + data.get("phone") +
    "\nהודעה: " + (data.get("message") || "לא נמסרה הודעה")
  );
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});
