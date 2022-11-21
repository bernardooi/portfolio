
$("#bb1").click(function() {
    $('html,body').animate({
        scrollTop: $("#about").offset().top},
        'slow');
});
$("#bb2").click(function() {
    $('html,body').animate({
        scrollTop: $("#work").offset().top},
        'slow');
});
$("#bb3").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact").offset().top},
        'slow');
});