 $(document).ready(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() > 79){
	        $(".head").addClass("mod-header-fixed");
        } else if ($(window).scrollTop() < 90) {
            $(".head").removeClass("mod-header-fixed");
        }
    });
});