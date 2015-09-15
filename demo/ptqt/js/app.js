
$(document).ready(function() {
	$(document).foundation();
	// preload
	$(window).load(function() {
	    $('#loader-wrapper').fadeOut();

	});
	// TinyNav.js 1
	$('ul#menu-topmenu').tinyNav({
	    active: 'selected',
	    header: '-- Menu --',
	});

});