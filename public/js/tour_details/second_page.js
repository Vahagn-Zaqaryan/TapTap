
//scroll animation
function getElementY(query) {
  return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top
}
function doScrolling(element, duration) {
	let startingY = window.pageYOffset
  let elementY = getElementY(element)
  let targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY
	let diff = targetY - startingY
  let easing = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 }
  let start

  if (!diff) return
	window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp
    let time = timestamp - start
    let percent = Math.min(time / duration, 1)
    percent = easing(percent)

    window.scrollTo(0, startingY + diff * percent)
    if (time < duration) {
      window.requestAnimationFrame(step)
    }
  })
}

document.getElementById('scrolling').addEventListener('click', doScrolling.bind(null, '#section-id', 1000));
document.getElementById('scrollToMap').addEventListener('click', doScrolling.bind(null, '#map', 1000));
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
    $(".book-close").on("click", function() {
        scrollBar = false;
        openModal = false;
        $('.container').removeClass('blur');
        $('#myModal').fadeOut();
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
//slider
// var swiper_rev = new Swiper('.shape_abaj', {
//     slidesPerView: 1,
//     autoplay: 3000,
//     speed: 800,
//     spaceBetween: 8,
//     paginationClickable: true,
//     nextButton: '.swiper-button-next',
//     prevButton: '.swiper-button-prev'
//
// });
