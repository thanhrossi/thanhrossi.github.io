$(document).ready(function() {
    if ($('.cSwiper').length > 0) {
        var cSwiper = new Swiper('.cSwiper', {
            setWrapperSize: true,
            paginationClickable: true,
            slidesPerView: 3,
            spaceBetween: 16,
            loop: true,
            onInit: function(swiper) {
                swiper.container.find('.swiper-wrapper').css('transform', 'translate3D(0, 0,0)');
            }
        });
    }
    
    if ($('.mod-slide').length > 0) {
         var sSwiper = new Swiper('.mod-slide', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev'
        });
    }
   
    if ($('.bSwiper').length> 0) {
        var bSwiper = new Swiper('.bSwiper', {
            slidesPerView: 2.8,
            slidesPerColumn: 2,
            paginationClickable: true,
            spaceBetween: 30,
            calculateHeight: true
        });
    }

    if ($('.bbSwiper').length> 0) {
        var bSwiper = new Swiper('.bbSwiper', {
            slidesPerView: 3.5,
            slidesPerColumn: 2,
            spaceBetween: 10,
            calculateHeight: true
        });
    }
    
    if($('.dSwiper').length > 0 ) {
        var dSwiper = new Swiper('.dSwiper', {
            pagination: '.swiper-pagination',
            slidesPerView: 2.5,
            paginationClickable: true,
            spaceBetween: 10,
            calculateHeight:true
        });
    }

    if($('.mod-bottom-cate').length > 0) {
       
    var scrollTo = 0,
        swipeL = -30,
        swipeR = 30,
        tabContent = $(".bottom-cate__content"),
        menuWidth = 0,
        wWidth = $(window).outerWidth();

        $('.bottom-cate__titles li').each(function() {
            menuWidth += $(this).outerWidth( true );
        });
    if($('.mod-masonry').length > 0) {
        var $masonry = $('.mod-masonry .bottom-cate__deals').masonry({
            columnWidth: '.grid-deal-sizer',
            itemSelector: '.sys_deal_item',
            percentPosition: true,
            isAnimated: true,
            animationOptions: {
                duration: 700,
                easing: 'linear',
                queue: false
            }
        });

        $masonry.imagesLoaded().progress( function() {
          $masonry.masonry('layout');
        });
    }
    

    $('.bottom-cate__titles').on('click', "a", function (e) {
        e.preventDefault();

        var activeItem = $('.bottom-cate__titles li.active'),
            selectedItem = $(this).parent(),
            activeIndex = $('.bottom-cate__titles li').index(activeItem),
            selectedIndex = $('.bottom-cate__titles li').index(selectedItem),
            tabIndex = $(this).attr('href');

        if(menuWidth > wWidth) {
            if(selectedIndex === 0) {
                $(this).closest('ul').css('transform', 'translateX(0px)');
            }else {
                scrollTo = - selectedItem.position().left + $('.bottom-cate__titles').width() / 2 - selectedItem.width() / 2;
               $(this).closest('ul').css('transform', 'translateX(' + scrollTo + 'px)');
            }
        }   
        
        activeItem.removeClass('active');
        selectedItem.addClass('active');
        tabContent.not(tabIndex).hide();
        $(tabIndex).fadeIn();
        
        if($('.mod-masonry').length > 0) {
            $masonry.masonry('layout');
        }

        if($(this).closest('.bottom-cate__titles').hasClass('fixed')) {
            if($(".bottom-cate__tag").length> 0) {
                var tagX = $(".bottom-cate__tag").offset().top - 400;
            }else{
                var tagX = $(".wish-section").offset().top - 400;
            }
            
            $('html, body').animate({
                scrollTop: tagX
            }, 500);

        }

        }).on('swipeleft', function(e) {
            e.preventDefault();
            if(swipeL >- 400) {
                swipeL -= 50;
            }
            $('.bottom-cate__titles ul').css('transform', 'translateX(' + swipeL + 'px)');
        }).on('swiperight', function(e) {
            e.preventDefault();
            if(swipeR < 0){
                swipeR += 50;
            }else{
                swipeR = 0;
            }
            $('.bottom-cate__titles ul').css('transform', 'translateX(' + swipeR + 'px)');
        });

        // Fix menu
        var bCate = $('.bottom-cate__titles').offset().top;
        $(window).scroll(function() {
            if ($(window).scrollTop() > bCate) {
                $('.bottom-cate__titles').addClass('fixed');
            } else {
               $('.bottom-cate__titles').removeClass('fixed');
            }
        });

    }


    
    
  

});