window.onload = function() {
    // ----------- MENU MOBILE BTN SETUP
    document
        .getElementById('mobile-menu-btn')
        .addEventListener('click', function(e) {
            if (
                document
                    .getElementById('menu-mobile')
                    .classList.contains('active')
            ) {
                document
                    .getElementById('menu-mobile')
                    .classList.remove('active');
            } else {
                document.getElementById('menu-mobile').classList.add('active');
            }
        });

    // -------- SMOOTH SCROLLING SETUP ---------
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        if (anchor.getAttribute('href') === '#') {
            return;
        }
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // ---------- PORTFOLIO SWIPER
    var swiperPortfolio = new Swiper('.swiper-container', {
        spaceBetween: 10,
        effect: 'fade',
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        loop: true,
        autoplay: {
            delay: 8000
        },
        autoHeight: true
    });

    // ---------- FORM SETUP
    document.getElementById('form').addEventListener('submit', function(e) {
        e.preventDefault();

        var name = document.getElementById('name').value;
        console.log('name:', name);
    });

    // axios.post('../mailer.php', {
    //     firstName: 'Fred',
    //     lastName: 'Flintstone'
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
};
