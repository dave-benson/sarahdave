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




$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
