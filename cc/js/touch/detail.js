$(document).ready(function() {
    
    var sSwiper = new Swiper('.mod-slide', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });

  
    var vSwiper = new Swiper('.vSwiper', {
        paginationClickable: true,
        slidesPerView: 3.5,
        spaceBetween: 10,
        loop: true,
        loopedSlides: 4,
        calculateHeight: true
    });

    var itemVal = parseInt($('.att_quantity_val').val());
    $('.att_quantity_decrease').on('click', function(e) {
        e.preventDefault();
        if (itemVal > 1) {
            itemVal -= 1;
            $('.att_quantity_val').val(itemVal);
        } else {
            return false;
        }
    });
    $('.att_quantity_increase').on('click', function(e) {
        e.preventDefault();
        if (itemVal >= 1) {
            itemVal += 1;
            $('.att_quantity_val').val(itemVal);
        } else {
            return false;
        }
    });
    
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $('.detail__nav').addClass('fixed')
        } else {
            $('.detail__nav').removeClass('fixed')
        }
        
    });
    

    var tdItem = $(".tech_detail_nav a"),
        tdContent = $(".tech_detail_content");
    tdItem.on('click', function(e) {
        e.preventDefault();
        var tIndex = $(this).attr('href');
        tdItem.removeClass('active');
        $(this).addClass('active');
        tdContent.not(tIndex).hide();
        $(tIndex).fadeIn();
        
    });

    var dNav = $('.detail__nav a'),
        dContent = $('.detail__content');
    dNav.on('click', function(e) {
        e.preventDefault();
        var dIndex = $(this).attr('href'),
            prevId = $('.detail__nav li a.active'),
            pIndex = prevId.attr('href');
        dNav.removeClass('active');
        $(this).addClass('active');
        // mo
        dContent.not(dIndex).hide();
        
        if(prevId.parent().index() > $(this).parent().index()){
            $(pIndex).show();
            $(pIndex).css('position', 'relative').css("right", "0");
            $(pIndex).animate({"right":"-100%"}, 150, function () {
                $(pIndex).css("right", 0).removeAttr("style").hide();
            });
            $(dIndex).show();
            $(dIndex).css('position', 'relative').css('left', '-2500px');
            $(dIndex).animate({"left":"0"}, 500);
        }else if(prevId.parent().index() == $(this).parent().index()){
            return false;
        }else {
            $(pIndex).show();
            $(pIndex).css('position', 'relative').css("left", "0");
            $(pIndex).animate({"left":"-100%"}, 150, function () {
                $(pIndex).css("left", 0).removeAttr("style").hide();
            });
            $(dIndex).show();
            $(dIndex).css('position', 'relative').css('right', '-2500px');
            $(dIndex).animate({"right":"0"}, 500);
        }
       
    });

    $('.in-detail-page').on('swipeleft', function(e) {
        var dNav = $('.detail__nav li a'),
            prevId = $('.detail__nav li a.active'),
            pIndex = prevId.attr('href'),
            dID    = prevId.parent().next()
            dIndex = prevId.parent().next().children('a').attr('href');
        if (prevId.parent().next('li').length > 0 ) {
            dContent.not(dIndex).hide();
            dNav.removeClass('active');
            dID.children('a').trigger('click');
            $(pIndex).show();
            $(pIndex).css('position', 'relative').css("left", "0");
            $(pIndex).animate({"left":"-100%"}, 50, function () {
                $(pIndex).css("left", 0).removeAttr("style").hide();
            });
            $(dIndex).show();
            $(dIndex).css('position', 'relative').css('right', '-1500px');
            $(dIndex).animate({"right":"0"}, 200);
        }else {
            return false;
        }
        
    }).on('swiperight', function(e) {
        var dNav = $('.detail__nav li a'),
            prevId = $('.detail__nav li a.active'),
            pIndex = prevId.attr('href'),
            dID    = prevId.parent().prev()
            dIndex = prevId.parent().prev().children('a').attr('href');
        if (prevId.parent().prev('li').length > 0 ) {
            dContent.not(dIndex).hide();
            dNav.removeClass('active');
            dID.children('a').trigger('click');
            $(pIndex).show();
            $(pIndex).css('position', 'relative').css("right", "0");
            $(pIndex).animate({"right":"-100%"}, 50, function () {
                $(pIndex).css("right", 0).removeAttr("style").hide();
            });
            $(dIndex).show();
            $(dIndex).css('position', 'relative').css('left', '-1500px');
            $(dIndex).animate({"left":"0"}, 200);
        }else {
            return false;
        }
        
    });

});