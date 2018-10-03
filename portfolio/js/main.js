$(document).ready(function() {
    var number = 0;
    $(".menu0").click(function() {
        $(".menu" + number).removeClass('current');
        $(".menu0").addClass('current');

        number = 0;
    });

    $(".menu1").click(function() {
        $(".menu" + number).removeClass('current');
        $(".menu1").addClass('current');

        number = 1;
    });

    $(".menu2").click(function() {
        $(".menu" + number).removeClass('current');
        $(".menu2").addClass('current');

        number = 2;
    });

    //$('.bg-img').height($(window).height());
    // Scroll Effect
    $('.navbar a').click(function() {
        $('body,html').animate({
            scrollTop:$('#' + $(this).data('value')).offset().top
        }, 1000)
    })

    // Hamburger toggler
    $('#js-navbar-toggle').on('click',function() {
        $('#js-menu').toggleClass('active');
    });
});