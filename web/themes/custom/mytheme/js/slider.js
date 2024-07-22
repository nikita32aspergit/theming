const slider = ($) => {
  $(document).ready(function () {
    $(".owl-stage").slick({
      slidesToshow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
    });
  });
};
slider(jQuery);



