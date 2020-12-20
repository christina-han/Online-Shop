window.addEventListener('DOMContentLoaded', initFun);

function initFun() {
  let swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 25,
    grabCursor: true,
    navigation: {
      nextEl: '#tab-next',
      prevEl: '#tab-prev',
    },
  });

}
