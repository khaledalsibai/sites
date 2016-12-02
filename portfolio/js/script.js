//Mobile menu
$(document).ready(function() {
    $('.material-button-toggle').click(function() {
        $(this).toggleClass('open');
        $('.option').toggleClass('scale-on');
    });
});

//Auto collapse meny on click and on mouseleave
$('.navbar-collapse a').click(function() {
    $(".navbar-collapse").collapse('hide');
});

$('.navbar').mouseleave(function() {
    $(".navbar-collapse").collapse('hide');
});

//Bootstrap Carousel controls
$(function() {
    $('.carousel.slide').carousel({
        interval: 10000,
        pause: "hover"
    });

    $('input').focus(function() {
        $("#myCarousel").carousel('pause');
    }).blur(function() {
        $("#myCarousel").carousel('cycle');
    });
});
