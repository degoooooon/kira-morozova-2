document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav__toggle');
  const panel = document.querySelector('.nav__wrapper');
  const overlay = document.querySelector('.overlay');
  const links = document.querySelectorAll('.nav__link');

  if (!toggle || !panel || !overlay) return;

  // Определяем iOS
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  function closeMenu() {
    panel.classList.remove('nav__wrapper--visible');
    overlay.classList.remove('overlay--visible');
    toggle.classList.remove('nav__toggle--opened');
    toggle.setAttribute('aria-expanded', false);

    // 🚀 снимаем класс блокировки
    document.body.classList.remove(isIOS ? 'scroll-lock-ios' : 'scroll-lock');
  }

  toggle.addEventListener('click', () => {
    const isOpened = panel.classList.toggle('nav__wrapper--visible');
    toggle.classList.toggle('nav__toggle--opened');
    toggle.setAttribute('aria-expanded', isOpened);
    overlay.classList.toggle('overlay--visible', isOpened);

    // 🚀 добавляем нужный класс
    if (isOpened) {
      document.body.classList.add(isIOS ? 'scroll-lock-ios' : 'scroll-lock');
    } else {
      document.body.classList.remove(isIOS ? 'scroll-lock-ios' : 'scroll-lock');
    }
  });

  overlay.addEventListener('click', closeMenu);

  links.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});