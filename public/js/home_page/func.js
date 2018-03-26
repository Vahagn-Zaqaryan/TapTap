function imgSize(){
    $(".img").each(function(){
        $(this).css({
            "height" : $(window).width()*0.1875
        });
    });
}
function scrollAnimation() {
    let y = $(this).scrollTop();
    if (y >= $(window).height()*(2/4)) {
        $('.view').animate({
            "opacity" : "1"
        });
        $(".box").each(function(i){
            $(this).delay(50*i).fadeIn();
        });
    }
}
