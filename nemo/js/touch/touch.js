$(document).ready(function() {
	var toggleMenu = $(".header__submenu");
    toggleMenu.on('click', function(e) {
        e.preventDefault();
        $(".header__dropdown").fadeToggle('fast');
    });

    // header menu
    // $(".header__menu").on('click', function(event) {
    //     event.preventDefault();
    //     $("body").addClass('is-overlay');
    //     $('.offcanvas').addClass('active');
    // });
    
    // lazyload
    if($(".sys_lazy_load").length > 0) {
        $(".sys_lazy_load").lazyload({
            effect: "fadeIn"
        });
    }
    // End lazyload
    // dropdown
    if($(".xxxDropdown").length> 0){
        $(".xxxDropdown").xxxDropdown();
    }

    // back to top
    $('.container-page').append('<div id="back2top" style="display: none;">Back to Top</div>');
    $(window).scroll(function() {
        if ($(window).scrollTop() > $(window).height()) {
            $('#back2top').fadeIn();
        } else {
            $('#back2top').fadeOut();
        }
    });

    $('#back2top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
    // End back top top
    // overlay
    // $(".overlay").on('click', function(e) {
    //     e.preventDefault();
    //     $("body").removeClass('is-overlay');
    //     $('.offcanvas').removeClass('active');
    // });

    // popup
    if($('.popup-wrap').length > 0 ){
        var $el = $('.popup-wrap'),
            popupTrigger = $('.popup__trigger');
        popupTrigger.on('click', function(e) {
            e.preventDefault();
            setTimeout(function () {
                $el.addClass('active');
            }, 500);
        });

        popupTrigger.trigger('click');
        
    }

});