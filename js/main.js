(function () {
  $('.lightswitch, .top, .bottom').click(function(){
    $('.lightswitch').toggleClass('on');
    $('.contain, .inner').toggleClass('open');
    $('body').toggleClass('active');
    return false;
  });

  var slidey = $('.inner').unslider({
    delay: false,
    keys: false
  });

  var data = slidey.data('unslider'),
    nav = $('nav a');

  nav.click(function(){
    data.move($(this).data('index'));
    nav.removeClass('active');
    $(this).addClass('active');
  });

  $('.gallery a').colorbox({rel:'gal'});

})();