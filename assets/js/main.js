const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#main-nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("nav--visible");
  });
}

const iconContainer = document.getElementById("brand-icon");

const icons = [
  `<span class="emoji-icon">🍹</span>`,
  `<span class="emoji-icon">🚲</span>`,
  `<span class="emoji-icon">⛵</span>`,
  `<span class="emoji-icon">⚓</span>`,
  `<span class="emoji-icon">🏐</span>`,
];

let current = 0;

setInterval(() => {

  current = (current + 1) % icons.length;

  // animación: primero cambiamos el contenido
  iconContainer.innerHTML = icons[current];

  // forzamos clase animada
  iconContainer.classList.remove("icon-pop");
  void iconContainer.offsetWidth; // ← resetea animación
  iconContainer.classList.add("icon-pop");

}, 3000);


const bookingForm = document.getElementById("booking-form");
const bookingMessage = document.getElementById("booking-message");

if (bookingForm && bookingMessage) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = bookingForm.nombre.value.trim();
    const actividad = bookingForm.actividad.value;
    const personas = bookingForm.personas.value;
    const fecha = bookingForm.fecha.value;

    bookingMessage.textContent =
      nombre
        ? `Grazie, ${nombre}! Abbiamo ricevuto la tua richiesta di prenotazione per ${personas} persona/e all’attività "${actividad}" in data ${fecha}. Verrai contattato a breve tramite WhatsApp per conferma.`
        : "Prenotazione inviata! Abbiamo ricevuto la tua richiesta e verrai contattato a breve tramite WhatsApp. Ti ringraziamo per aver scelto ZoccoBeach!";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const cookieBanner = document.getElementById("cookie-banner");
  const cookieAccept = document.getElementById("cookie-accept");

  if (!cookieBanner || !cookieAccept) return;

  // Siempre mostrar el banner al cargar la página
  cookieBanner.style.display = "block";

  // Solo lo ocultamos cuando el usuario hace clic
  cookieAccept.addEventListener("click", () => {
    cookieBanner.style.display = "none";
  });
});


const socialButtons = document.querySelectorAll(".social-tab__icon");

socialButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // quitar stato attivo dai altri
    socialButtons.forEach((b) => b.classList.remove("social-tab__icon--active"));

    // attivare questo
    btn.classList.add("social-tab__icon--active");

    // aprire il link in una nuova scheda
    const url = btn.getAttribute("data-url");
    if (url) {
      window.open(url, "_blank", "noopener");
    }
  });
});
