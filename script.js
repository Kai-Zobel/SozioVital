const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const navLinks = nav?.querySelectorAll('a') ?? [];

const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 20);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

navToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav?.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('[data-accordion] button').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.accordion-item');
    const panel = item?.querySelector('.accordion-panel');
    const expanded = button.getAttribute('aria-expanded') === 'true';

    document.querySelectorAll('[data-accordion] button').forEach((otherButton) => {
      otherButton.setAttribute('aria-expanded', 'false');
      const otherPanel = otherButton.closest('.accordion-item')?.querySelector('.accordion-panel');
      if (otherPanel) otherPanel.hidden = true;
    });

    if (!expanded && panel) {
      button.setAttribute('aria-expanded', 'true');
      panel.hidden = false;
    }
  });
});

const observer = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 })
  : null;

document.querySelectorAll('.reveal').forEach((element) => {
  if (observer) observer.observe(element);
  else element.classList.add('visible');
});

document.querySelector('[data-year]').textContent = new Date().getFullYear();

const form = document.querySelector('[data-contact-form]');
const notice = document.querySelector('[data-demo-notice]');
const status = document.querySelector('[data-form-status]');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  status.textContent = 'Die Angaben sind vollständig. In der Live-Version kann die Anfrage nun versendet werden.';
  if (notice) notice.hidden = false;
});

document.querySelector('[data-close-notice]')?.addEventListener('click', () => {
  if (notice) notice.hidden = true;
});

notice?.addEventListener('click', (event) => {
  if (event.target === notice) notice.hidden = true;
});
