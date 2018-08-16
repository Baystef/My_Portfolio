$(document).ready(function() {
    var number = 0;
    $(".menu0").click(function() {
        $(".slide" + number).slideUp();
        $(".menu" + number).removeClass('current');
        $(".menu0").addClass('current');
        $(".slide0").slideDown();

        number = 0;
    });

    $(".menu1").click(function() {
        $(".slide" + number).slideUp();
        $(".menu" + number).removeClass('current');
        $(".menu1").addClass('current');
        $(".slide1").slideDown();

        number = 1;
    });

    $(".menu2").click(function() {
        $(".slide" + number).slideUp();
        $(".menu" + number).removeClass('current');
        $(".menu2").addClass('current');
        $(".slide2").slideDown();

        number = 2;
    });
});