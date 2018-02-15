$(document).ready(function(){
  $('.slickSlider').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed:3000 ,
  arrows: true,
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint:1350,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,

      }
    },
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
})
$('.slickSliderIncoutournable').slick({
  infinite: true,
  dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed:2500,
  slidesToShow: 1,
  slidesToScroll: 1
});
});
