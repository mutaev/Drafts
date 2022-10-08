$(function () { 

  //slider main
  $('.news__slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  });

  $('.attendance__slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  });

})