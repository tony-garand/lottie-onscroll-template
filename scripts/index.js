let select = function(s) {
  return document.querySelector(s);
};

let selectAll = function(s) {
  return document.querySelectorAll(s);
};


var container = document.getElementById('lottie');
// Set up our animation
var animData = {
 container: container,
 renderer: 'svg',
 autoplay: false,
 loop: true,
 animationData: animationdata
};

var scrollAnim = bodymovin.loadAnimation(animData);
scrollAnim.addEventListener('DOMLoaded', onAnimationDOMLoaded);


// -------- TLs-------------
var tl = new TimelineMax();

function onAnimationDOMLoaded(e) {
  tl.to({
    frame: 0
  }, 3, {
    frame: scrollAnim.totalFrames - 1,
    onUpdate: function() {
      scrollAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })
}

// ---------------------------------------------------------
// ------------------ Scrolling Control--------------------
// --------------------------------------------------------
let controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 'onLeave'
  }
});

//-------------------------------------------------
//----------- ANIMATIONS ---------------
//-------------------------------------------------
let notAnimationScene = new ScrollMagic.Scene({
    triggerElement: "#trigger",
    duration: '420%'
  })
  .setTween(tl)
  .addIndicators({name: "text"})
  .addTo(controller);
