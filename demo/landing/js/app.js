$(document).ready(function() {

    $('#slider').coinslider({
        width: 308,
        height: 462,
        navigation: true,
        opactity: 0.5,
        delay: 5000
    });

    Cufon.replace('.top-status h3,.center h2', {
        fontFamily: 'inline'
    });
    Cufon.replace('ul#menu a', {
        fontFamily: 'dinamond',
        hover: {
            color: '#9c3'
        }
    });
    Cufon.replace('.top-status h2, .bot-status h3,.bot-status h3:before,.bot-status h3:after,#l-footer h3', {
        fontFamily: 'lobster'
    });
});
