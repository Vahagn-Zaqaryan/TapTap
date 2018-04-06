function imgSize(){
    $(".UI-Element-Image-Categories").each(function(){
        $(this).css({
            "height" : $(window).width()*1/4*0.61
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
let keys = {37: 1, 38: 1, 39: 1, 40: 1};
function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
}
function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

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
