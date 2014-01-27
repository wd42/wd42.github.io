(function () {
  $('.lightswitch').click(function(){
    $(this).toggleClass('on');
    $('.contain, .content').toggleClass('open');
    $('body').toggleClass('active');
  });
//
//  var swiper = new Swiper('.swiper-container',{
//    centeredSlides: true,
//    slidesPerView: 1,
//    watchActiveIndex: true,
//    initialSlide: 1,
//    keyboardControl: true,
//    cssWidthAndHeight: true
//  });

//  $('nav a').click(function(){
//    swiper.swipeTo($(this).data('index'));
//  });

  var slidey = $('.content').unslider({
      delay: false
    });

  var data = slidey.data('unslider'),
    nav = $('nav a');

  nav.click(function(){
    data.move($(this).data('index'));
    nav.removeClass('active');
    $(this).addClass('active');
  });

})();