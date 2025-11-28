// Swiper 8.4.7
import './vendor/swiper';
import './vendor/focus-visible-polyfill';
import './modules/menu/menu';

new Swiper('.diplomas__swiper', {
  loop: true,
  speed: 500,
  navigation: {
    nextEl: '.diplomas__button--next',
    prevEl: '.diplomas__button--prev',
  },
  breakpoints: {
    1280: {
      slidesPerView: 4,
      spaceBetween: 22,
      allowTouchMove: false
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    }
  }
});

let swiperInstance;

function initMobileSwiper() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 768 && !swiperInstance) {
    swiperInstance = new Swiper('.services__swiper', {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      speed: 500,
      navigation: {
        nextEl: '.services__button--next',
        prevEl: '.services__button--prev',
      },
      pagination: {
        el: '.services__pagination',
        clickable: true,
        bulletClass: 'services__buttons',
        bulletActiveClass: 'services__buttons--active',
      },
    });
  } else if (screenWidth > 768 && swiperInstance) {
    swiperInstance.destroy(true, true); // 💥 Уничтожаем Swiper
    swiperInstance = null;
  }
}

window.addEventListener('load', initMobileSwiper);
window.addEventListener('resize', initMobileSwiper);
