$(document).ready(function (){
    let date = new Date();
    let firstTime = true;
    $("footer").append("<p>© 2017-" + date.getFullYear() + " TapTap Co. ALL RIGHTS RESERVED</p>");
    $("#BALocal").on("click", function(){
        let sum = $(window).height() - $(window).scrollTop();
        $('html,body').animate({
            scrollTop: $(window).scrollTop() + sum
        }, "slow");
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
