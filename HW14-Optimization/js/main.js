const preLoader = document.querySelector("#preloader");

function loader () {
     preLoader.classList.add("loaded");

}
setInterval(loader, 2000);


$(document).ready(function(){
    $('.review-slider').slick({
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right'),
    });
  });