document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav__toggle');
  const panel = document.querySelector('.nav__wrapper');
  const overlay = document.querySelector('.overlay');
  const links = document.querySelectorAll('.nav__link');

  if (!toggle || !panel || !overlay) return;

  function closeMenu() {
    panel.classList.remove('nav__wrapper--visible');
    overlay.classList.remove('overlay--visible');
    toggle.classList.remove('nav__toggle--opened');
    toggle.setAttribute('aria-expanded', false);
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', () => {
    const isOpened = panel.classList.toggle('nav__wrapper--visible');
    toggle.classList.toggle('nav__toggle--opened');
    toggle.setAttribute('aria-expanded', isOpened);
    overlay.classList.toggle('overlay--visible', isOpened);

    document.body.style.overflow = isOpened ? 'hidden' : '';
  });

  overlay.addEventListener('click', closeMenu);

  //  закрываем меню при клике на любую ссылку
  links.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});
