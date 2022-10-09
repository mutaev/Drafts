$(function () { 

  //slider main
  $('.news__slider').slick({
    dots: true,
    arrows: false,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1010,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 796,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.attendance__slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  });


  $('.menu-burger__header').click(function(){
    $('.menu-burger__header').toggleClass('open-menu');
    $('.header__nav').toggleClass('open-menu');
    $('body').toggleClass('fixed-page');
});
})