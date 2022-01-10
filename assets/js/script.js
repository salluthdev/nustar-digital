// Sidebar Navigation - Jquery
$(document).ready(function(){
  $('.btn-menu').click(function(){
    $('.side-nav').addClass('active');
    $('.btn-menu').css("visibility", "hidden");
    $('.btn-close').css("visibility", "visible");
    $('.dark').css("display", "block")
  });

  $('.btn-close').click(function(){
    $('.side-nav').removeClass('active');
    $('.btn-menu').css("visibility", "visible")
    $('.btn-close').css("visibility", "hidden");
    $('.dark').css("display", "none")
  });
});

// Back To Top Menu
var mybutton = document.getElementById("back-to-top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 220 || document.documentElement.scrollTop > 220) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Slider - Swiper JS
const swiper = new Swiper('.mySwiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});