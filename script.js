const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
const year = document.querySelector('#year');
const form = document.querySelector('#contactForm');
const status = document.querySelector('#formStatus');

if (year) year.textContent = new Date().getFullYear();

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get('name') || '';
    const email = data.get('email') || '';
    const organization = data.get('organization') || '';
    const message = data.get('message') || '';
    const subject = encodeURIComponent('Richiesta informazioni LIFECOMICS26');
    const body = encodeURIComponent(
      `Nome: ${name}\nEmail: ${email}\nEnte/Scuola/Comune: ${organization}\n\nMessaggio:\n${message}`
    );
    window.location.href = `mailto:mauriziocantore@gmail.com?subject=${subject}&body=${body}`;
    status.textContent = 'Si sta aprendo il programma email. Controlla il messaggio prima di inviarlo.';
  });
}
