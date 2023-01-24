

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

$(".workBb").click(function() {
    window.open( "https://github.com/bernardooi");
    return false;//Just in case if it is a link prevent default behavior
});

var aboutParagraph = "<p id='info'><strong>Hello!</strong> As you may already know my name is <strong>Bernard</strong>, my passion and ambition in life is all about <strong>computers</strong>. I've graduated in Information and Media Technology at NTI Södertörn and is currently studying to become a web developer.</p>";
var onabout = false;

$('#bb1').click(function(){
    
    if(onabout==true){
        location.reload()
    }

    if(onabout==false){
        $('#job,#bioPara').remove()
        $('#bio').append(aboutParagraph);

        $('#bb1').text('Back');
        $('#bioName').text('About me');
        onabout=true;
    }
    
})