$(document).ready(function (){
    let date = new Date();
    let beforeScroll = $(window).scrollTop();
    //$( window ).load(function() {
        $('.view').animate({
            "opacity" : "1"
        });
        $(".box").each(function(i){
            $(this).delay(50*i).fadeIn();
        });
    //});
    $("#BALocal").on("click", function(){
        let sum = $(window).height() - $(window).scrollTop();
        $('html,body').animate({
            scrollTop: $(window).scrollTop() + sum
        }, "slow", 'swing');
    });

    imgSize();
    scrollAnimation();
    $( window ).resize(function() {
        imgSize();
    });
    $(document).scroll(function () {
        scrollAnimation();
    });
});
