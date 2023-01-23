
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




$(document).ready(function(){


    $("h1").delay("1000").fadeIn();



    $("#back-top").hide();


   
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
      
            }
        });


        $('a#back-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });


});