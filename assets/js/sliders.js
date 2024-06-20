$(document).ready(function() {
  // owl carousel
  $('.special').owlCarousel({
    items: 1,
    margin: 10, 
    loop: true,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 5000,
    // autoplayHoverPause: true
  });

  $('.test').owlCarousel({
    items: 3,
    margin: 20,
    center: true,
    nav: true,
    dots:false,
    loop: true,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 5000
  });

  $('.test .owl-nav button.owl-next').html('<span class="fas fa-arrow-right"></span>')
  $('.test .owl-nav button.owl-prev').html('<span class="fas fa-arrow-left"></span>')
})