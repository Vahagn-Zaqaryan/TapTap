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

$(document).ready(function(){
    let scrollBar = true;
    let openModal = false;
    let beforeScroll = $(window).scrollTop();
    $("#sign_in").on("click", function(){
        scrollBar = false;
        $('.container').addClass('blur');
        $('#sign_in_modal').fadeIn();
    });
    $("#dates").on("click", function(){
        scrollBar = false;
        openModal = true;
        $('.container').addClass('blur');
        $('#myModal').fadeIn();
    });
    $(".close").on("click", function(){
        scrollBar = false;
        openModal = false;
        $('.container').removeClass('blur');
        $('#myModal').fadeOut();
    });
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            scrollBar = true;
            openModal = false;
            $('.container').removeClass('blur');
            $('.modal').fadeOut();
            $('.modal-dates').fadeOut();
        }
    });
    $(document).scroll(function () {
        if(!scrollBar)
            $(window).scrollTop(beforeScroll);
        else
            beforeScroll = $(window).scrollTop();
    });
    $(document).mouseup(function(e)
    {
        var container = $('.modal > .content');
        if (!container.is(e.target) && container.has(e.target).length === 0 && !scrollBar)
        {
            scrollBar = true;
            openModal = false;
            $('.container').removeClass('blur');
            $('.modal').fadeOut();
        }
    });
});
