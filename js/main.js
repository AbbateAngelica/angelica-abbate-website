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
        var errors = 0;

        function printValidationError (item) {
            errors++;
            if (!document.getElementById(item).classList.contains('form__input--error')) {
                document.getElementById(item).classList.add('form__input--error');
            }
        }

        function clearValidationError (item) {
            if (document.getElementById(item).classList.contains('form__input--error')) {
                document.getElementById(item).classList.remove('form__input--error');
            }
        }

        function validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
        
        var name = document.getElementById('name').value;
        if (name === "") {
            printValidationError('name');
        }
        else {
            clearValidationError('name');
        }

        var email = document.getElementById('email').value;
        if (!validateEmail(email)) {
            printValidationError('email');
        }
        else {
            clearValidationError('email');
        }

        var subject = document.getElementById('subject').value;
        if (subject === "") {
            printValidationError('subject');
        }
        else {
            clearValidationError('subject');
        }

        var message = document.getElementById('message').value;
        if (message === "") {
            printValidationError('message');
        }
        else {
            clearValidationError('message');
        }

        if(errors == 0) {
            axios.post('../mailer.php', {
                name: name,
                email: email,
                subject: subject,
                message: message
            })
            .then(function(response) {
                alert('Tu mensaje ha sido enviado. Estaré respondiendo a la brevedad posible. Gracias. || Your message have been sent. I\'ll be answering as soon as I can. Thank you.');
                document.getElementById('form').reset();
            }, function(error) {
                alert('Ha ocurrido un error al enviar el mensaje. Por favor, intentalo nuevamente.');
                console.log(error);
            })
            .catch(function(error) {
                alert('Ha ocurrido un error al enviar el mensaje. Por favor, intentalo nuevamente.');
                console.log(error);
            });
        }
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
