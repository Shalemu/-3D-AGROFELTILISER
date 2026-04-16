document.querySelectorAll('a.nav-link, .dropdown-item').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = this.getAttribute('href');
        if (target.startsWith('#') && document.querySelector(target)) {
            e.preventDefault();
            const offset = 70; // adjust if you have a sticky navbar height
            const elementPosition = document.querySelector(target).offsetTop;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            });
        }
    });
});



(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


// Sticky Navbar
$(window).scroll(function () {

    if ($(this).scrollTop() > 0) {

        $('.custom-navbar')
        .addClass('sticky shadow-sm')
        .css('top', '0');

    } else {

        $('.custom-navbar')
        .removeClass('sticky shadow-sm')
        .css('top', '0');

    }

});

    // Hero Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'slideOutDown',
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });





    // Dance Class carousel
    $(".class-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });

   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


   

})(jQuery);

const track = document.querySelector(".slider-track");

document.querySelector(".next").addEventListener("click", () => {
track.scrollBy({
left:350,
behavior:"smooth"
});
});

document.querySelector(".prev").addEventListener("click", () => {
track.scrollBy({
left:-350,
behavior:"smooth"
});
});

