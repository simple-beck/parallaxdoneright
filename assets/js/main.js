(function(){
  $(function(){
    // global vars
    var didScroll = false;
    var parallaxBanner = $('.bg-image', '.parallax-enabled');
    var bannerY = 0;

    var duration = 600;
    var startValue = 0;
    var changeValue = 200;


    // Hook into scroll
    $(window).on('scroll', function(){
      didScroll = true;
    });

    // start a loop/interval
    setInterval( function(){
      if( didScroll ){

        window.requestAnimationFrame(function() {
          didScroll = false;

          var appScrollTop = $('body').scrollTop();
          value = easeInOutQuad( appScrollTop, startValue, changeValue, duration );

          parallaxBanner.css({'transform': 'translate3d(0, ' + value + 'px, 0)'});
        });
      }
    }, 10 );

    /**
     * easeInOutQuad easing
     */
    easeInOutQuad = function (t, b, c, d) {
      return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    };

  });
}).call(this);

