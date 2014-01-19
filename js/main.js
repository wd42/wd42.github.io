(function () {
  $('.lightswitch').click(function(){
    $(this).toggleClass('on');
    $('.contain, .swiper-container').toggleClass('open');
  });

  var slides = $('.swiper-slide');
  applyTransforms(1);

  var swiper = new Swiper('.swiper-container',{
    centeredSlides: true,
    slidesPerView: 1,
    watchActiveIndex: true,
    initialSlide: 1,
    keyboardControl: true,
    cssWidthAndHeight: true,
    onSlideChangeStart: function(slider){
      applyTransforms(slider.activeIndex);
    }
  });

  $('.next').click(function(){
    swiper.swipeNext();
  });

  $('.prev').click(function(){
    swiper.swipePrev();
  });

  $('.jump').click(function(){
    swiper.swipeTo($(this).data('index'));
  });

  function applyTransforms(index){
//    for (var i = 0; i < index; i++) {
//      var x = 4 - i;
//      //500 is width of slide before scale
//      //300 is slideWidth - scaledSlideWidth - ((slideWidth-scaledSlideWidth)/2)
//      var full = x * 500 - (300 + (x*x) * 50);
//      slides.eq(i).css('transform', 'translateX('+full+'px) scale(0.2)');
//    }
//
//    for (var i = index+1; i <= slides.length; i++) {
//      //get i to 1 if only one on right of main
//      var full = i * 500 - (300 + (i*i) * 50);
//      slides.eq(i).css('transform', 'translateX(-'+full+'px) scale(0.2)');
//    }

    slides.eq(index).removeClass('toLeft toRight');

    if(index == slides.length - 1){
      $('.next').addClass('inactive');
    } else if (index == 0) {
      $('.prev').addClass('inactive');
    } else {
      $('.next, .prev').removeClass('inactive');
    }

    for (var i = 0; i < index; i++) {
      slides.eq(i).removeClass('toLeft toRight').addClass('toLeft');
    }

    for (var i = index+1; i <= slides.length; i++) {
      slides.eq(i).removeClass('toLeft toRight').addClass('toRight');
    }
  }

})();