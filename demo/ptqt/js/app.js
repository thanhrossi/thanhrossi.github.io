$(document).foundation();
// preload
$(window).load(function() {
    $('.preload').fadeOut();

});
// TinyNav.js 1
$('ul#menu-topmenu').tinyNav({
    active: 'selected',
    header: '-- Menu --',
});

