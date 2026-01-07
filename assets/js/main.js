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
        ? `Grazie, ${nombre}! Abbiamo ricevuto la tua richiesta di informazione per ${personas} persona/e all’attività "${actividad}" in data ${fecha}. Verrai contattato a breve tramite WhatsApp per conferma.`
        : "Richiesta inviata! Abbiamo ricevuto il tuo messaggio e verrai contattato a breve tramite WhatsApp. Ti ringraziamo per aver scelto ZoccoBeach!";
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


  const modalOverlay = document.getElementById('modal-overlay');
  const modalContent = document.getElementById('modal-content');

const contents = {
  privacy: `
    <h3>Privacy Policy</h3>
    <p>Ai sensi dell’art. 13 del Regolamento UE 2016/679 (GDPR), informiamo gli utenti che i dati personali raccolti tramite questo sito saranno trattati in modo lecito, corretto e trasparente per finalità legate esclusivamente alla fruizione dei servizi offerti da ZoccoBeach.</p>
    <p>I dati raccolti non saranno ceduti a terzi senza consenso, salvo obblighi di legge. L’utente ha diritto in qualsiasi momento di accedere, modificare o cancellare i propri dati scrivendo a: <a href="mailto:privacy@zoccobeach.it">privacy@zoccobeach.it</a>.</p>
    <p>I dati vengono conservati per il tempo necessario a fornire il servizio richiesto o per adempiere obblighi normativi.</p>
  `,

  cookie: `
    <h3>Cookie Policy</h3>
    <p>Questo sito utilizza cookie tecnici necessari al corretto funzionamento del sito stesso e cookie di terze parti (es. Google Analytics) per finalità statistiche e di analisi del traffico.</p>
    <p>L’uso dei cookie consente di migliorare l’esperienza dell’utente. Continuando la navigazione, accetti implicitamente l’uso dei cookie.</p>
    <p>È possibile disattivare i cookie in qualsiasi momento tramite le impostazioni del proprio browser. Per maggiori informazioni, visita la sezione “Gestione dei Cookie”.</p>
  `,

  termini: `
    <h3>Termini & Condizioni</h3>
    <p>Accedendo e utilizzando i servizi di ZoccoBeach, l’utente accetta le seguenti condizioni:</p>
    <ul>
      <li>Le prenotazioni sono valide solo se confermate via email o tramite il sistema di booking online.</li>
      <li>I pacchetti acquistati non sono rimborsabili, salvo annullamento da parte della struttura per cause di forza maggiore.</li>
      <li>L'accesso alla struttura implica il rispetto del regolamento interno, disponibile all’ingresso e sul sito ufficiale.</li>
      <li>ZoccoBeach non è responsabile per oggetti smarriti o danni causati da uso improprio delle attrezzature.</li>
    </ul>
    <p>Per domande o chiarimenti, contattaci a: <a href="mailto:info@zoccobeach.it">info@zoccobeach.it</a>.</p>
  `
};


  document.querySelectorAll('.modal-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const type = link.dataset.content;
      modalContent.innerHTML = contents[type];
      modalOverlay.classList.add('active');
    });
  });

  function closeModal() {
    modalOverlay.classList.remove('active');
  }

  document.querySelectorAll('.modal-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const type = link.dataset.content;
      modalContent.innerHTML = contents[type];
      modalOverlay.classList.add('active');
    });
  });

  function closeModal() {
    modalOverlay.classList.remove('active');
  }

