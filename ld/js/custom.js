$(document).ready(function () {
    let toggleBtn = $('#menu-toggler');
    let formSlider = $('.form-slider');
    let isMobile = /Mobi/.test(navigator.userAgent);
    let navLink =  $('.nav-container .nav > li > a');
    let footerLink =  $('.footer-links > li > a');
    toggleBtn.on('click', function (){
        $('body').toggleClass("menu-active");
    });

    formSlider.slick({
        autoplay:true,
        autoplaySpeed:3000,
        speed:600,
        arrows: false,
    });

    function scrollLink(nav) {
        nav.on('click', function (e) {
            e.preventDefault();
            $('body').removeClass("menu-active");
            let targetLocation = '#'+$(this).data("link");
            $('html, body').animate({
                scrollTop: $(targetLocation).offset().top - 100
            }, 2000);
        });
    }
    scrollLink(navLink);
    scrollLink(footerLink);
    if(isMobile) {
        let isFirstTimeLoad = localStorage.getItem("first_time");
        if(!isFirstTimeLoad) {
            $('#myModal').modal('show');
            localStorage.setItem("first_time","1");
        }
    }
    if(isMobile) {
        let posMobileForm = $('#form-mb-bottom').offset().top;
        $(window).scroll(function(){
            let windowPos = $(window).scrollTop();
            console.log("posMobileForm", posMobileForm);
            console.log("Scrool",  $(window).scrollTop());
            if(posMobileForm < windowPos) {
                $("body").addClass('body-fixed');
            }else {
                $("body").removeClass('body-fixed');
            }
        });
    }
});

