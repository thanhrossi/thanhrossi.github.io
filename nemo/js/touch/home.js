$(document).ready(function() {
	if ($('.homeSlider').length> 0 ) {
		var hSwiper = new Swiper('.homeSlider', {
	        nextButton: '.homeSlider-next',
	        prevButton: '.homeSlider-prev',
	    });
	}
	
	if($('.popular-list__slider').length > 0) {
		var pSwiper = new Swiper('.popular-list__slider', {
	        pagination: '#sys_topdeal_slide_pagination',
	        paginationClickable: true,
	        slidesPerView: 6,
	        // spaceBetween: 40,
	        loop: true,
	        loopedSlides: 4,
	        calculateHeight:true,
	        onInit: function(swiper) {
	            swiper.container.find('.swiper-wrapper').css('transform', 'translate3D(0, 0,0)');
	        }

	    });
	}
    
	if ($('.vSwiper').length > 0) {
		var vSwiper = new Swiper('.vSwiper', {
	        paginationClickable: true,
	        slidesPerView: 3.5,
	        spaceBetween: 10,
	        loop: true,
	        loopedSlides: 4,
	        calculateHeight:true
	    });
	}
    
    if ($('.mSwiper').length >0) {
    	var mSwiper = new Swiper('.mSwiper', {
	        paginationClickable: true,
	        slidesPerView: 2.5,
	        spaceBetween: 10,
	        loop: true,
	        loopedSlides: 4,
	        calculateHeight:true
	    });
    }
    
    if ($('.bSwiper').length >0) {
    	var bSwiper = new Swiper('.bSwiper', {
	        pagination: '.swiper-pagination',
	        slidesPerView: 2.8,
	        slidesPerColumn: 2,
	        paginationClickable: true,
	        spaceBetween: 30,
	        calculateHeight:true
	    });
    }
    
    if ($('.dSwiper').length > 0) {
    	var dSwiper = new Swiper('.dSwiper', {
	        pagination: '.swiper-pagination',
	        slidesPerView: 2.5,
	        paginationClickable: true,
	        spaceBetween: 10,
	        calculateHeight:true
	    });
    }

   
});