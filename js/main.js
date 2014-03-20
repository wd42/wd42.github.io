(function () {
  var lightswitch = $('.lightswitch');

  lightswitch.add('.top, .bottom').click(function(){
    lightswitch.toggleClass('on');
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

  $('.gallery a').colorbox({
    rel:'gal',
    current: '',
    previous: '<span class="icon-angle-left"></span>',
    next: '<span class="icon-angle-right"></span>',
    close: '<span class="icon-times">&times;</span>',
    height: '100%'
  });


   function ifNoAction(interactables, after, duration, callbackStart, callbackEnd){
    var mainTimer = window.setTimeout(trigger, after);
    for (var i = 0; i < interactables.length; i++){
      $(interactables[i].selector).on(interactables[i].events, function(){
        window.clearTimeout(mainTimer);
        return false;
      });
    }

    function trigger(){
      callbackStart();
      window.setTimeout(callbackEnd, duration);
    }
  };

  ifNoAction([{selector: '.lightswitch, .top, .bottom', events: 'click'}], 5000, 2000,
    function(){
      lightswitch.addClass('notify');
    },
    function(){
      lightswitch.removeClass('notify');
    });

  function mapInit() {
    var styles = [
      {
        stylers: [
          { saturation: -100 },
          { lightness: -10 }
        ]
      },{
          featureType: "road",
          elementType: "geometry",
          stylers: [
            { lightness: 100 }
          ]
        }
    ],
    mapOptions = {
      zoom: 16,
      center: new google.maps.LatLng(-42.885187,147.336267),
      streetViewControl: false
    },
    contentString = '<div id="content">'+
      '<p>We meet on the last Wednesday of every month from 5.30pm at:</p>'+
      '<address>The Typewriter Factory,<br>Level 3, 13-17 Castray Esplanade,<br>Hobart, Tasmania,<br>Australia</address>'+
      '</div>';

    var map = new google.maps.Map(document.getElementById('map'), mapOptions),
    infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 200
    }),
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(-42.886681,147.336267),
      map: map,
      title: 'The Typewriter Factory'
    });

    map.setOptions({styles: styles});
    infowindow.open(map,marker);
  }

  google.maps.event.addDomListener(window, 'load', mapInit);
})();