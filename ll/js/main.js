var wow = new WOW(
    {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    }
);
wow.init();

$(document).ready(function(){
    var reg_btn = $("#reg-btn"),
        jump_To = $('.section-reasons-content').offset().top;

    reg_btn.on('click', function(){
        $('body,html').animate({
            scrollTop : jump_To
        }, 500);
    });

    if($("#your-address").length > 0){
        $("#your-address").select2({
            placeholder: "Khu vực gia đình đang sống",
            minimumResultsForSearch: -1
        });
    }
    
});