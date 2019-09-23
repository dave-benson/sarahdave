(function() {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
  }
})();
/* When your mouse cursor enter the background, the fading won't pause and keep playing */ 
$('.carousel').carousel({
    pause: "false" /* Change to true to make it paused when your mouse cursor enter the background */
});

/*Clock */

var deadline = new Date("jul 18, 2020 16:00:00").getTime();
 
var x = setInterval(function() {
 
var now = new Date().getTime();
var t = deadline - now;
var days = Math.floor(t / (1000 * 60 * 60 * 24));
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((t % (1000 * 60)) / 1000);
document.getElementById("day").innerHTML =days ;
document.getElementById("hour").innerHTML =hours;
document.getElementById("minute").innerHTML = minutes; 
document.getElementById("second").innerHTML =seconds; 
if (t < 0) {
        clearInterval(x);
       /* document.getElementById("demo").innerHTML = "TIME UP";*/
        document.getElementById("day").innerHTML ='0';
        document.getElementById("hour").innerHTML ='0';
        document.getElementById("minute").innerHTML ='0' ; 
        document.getElementById("second").innerHTML = '0'; }
}, 1000);
/*Clock End*/

const menu = document.querySelector(".menu")
var init, min, max
window.addEventListener("scroll", scroll, { passive: true })
window.addEventListener("load", ready)
ready()

function ready() {
  menu.style.transform = "translateY(0px)"
  init =
    menu.getBoundingClientRect().top + document.documentElement.scrollTop ||
    document.body.scrollTop
  init = Math.round(init)
  min = init * 0.5
  max = init * 1.5
  scroll()
}

function scroll() {
  const top = document.documentElement.scrollTop || document.body.scrollTop;
  let pos
  if (top < min) {
    menu.setAttribute('data-position', "static")
    pos = 0;
  } else if (top > max) {
    
    menu.setAttribute('data-position', "fixed")
    pos = top - init
  } else {
    menu.setAttribute('data-position', "hybrid")
    let t = (top - min) / (max - min)
    let qq = min * (1 + t * (2 - t) * (init / min - 1))
    pos = top - qq
  }
  menu.style.transform = "translateY(" + pos + "px)"
}




<script>
  $(function() {
    $(".rslides").responsiveSlides();
  });
</script>

$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: false,           // Boolean: Show pager, true or false
  nav: false,             // Boolean: Show navigation, true or false
  random: false,          // Boolean: Randomize the order of the slides, true or false
  pause: false,           // Boolean: Pause on hover, true or false
  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
  prevText: "Previous",   // String: Text for the "previous" button
  nextText: "Next",       // String: Text for the "next" button
  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
  manualControls: "",     // Selector: Declare custom pager navigation
  namespace: "rslides",   // String: Change the default namespace used
  before: function(){},   // Function: Before callback
  after: function(){}     // Function: After callback
});