window.onload = function() {

    // ---------- PORTFOLIO SWIPER
    var swiperPortfolio = new Swiper('.swiper-container', {
        spaceBetween: 10,
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        loop : true,
        autoplay: {
            delay: 8000,
        }
      });

}