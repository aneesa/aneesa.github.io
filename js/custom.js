(function ($) {

    // Init Wow
    wow = new WOW( {
        animateClass: 'animated',
        offset:       100
    });
    wow.init();

    // Navigation scrolls
    $('.navbar-nav li a').bind('click', function(event) {
        $('.navbar-nav li').removeClass('active');
        $(this).closest('li').addClass('active');
        var $anchor = $(this);
        var nav = $($anchor.attr('href'));
        if (nav.length) {
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top
          }, 1500, 'easeInOutExpo');

          event.preventDefault();
        }
        $('.navbar-collapse').collapse('hide');
    });

    // Home section scroll
    $(".navbar-header a").on('click', function(event) {
        event.preventDefault();
        $('.navbar-nav li').removeClass('active');
        $('.navbar-nav li:first').addClass('active');
        $('html, body').animate({
            scrollTop: 0
        }, 900);
    });

    // Foo Bar section scroll
    $(".overlay-detail a").on('click', function(event) {
        event.preventDefault();
        $('.navbar-nav li').removeClass('active');
        $('.navbar-nav li:nth-child(2)').addClass('active');
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900);
    });

    //jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar-default").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    // Testimonials Slider
    $('.bxslider').bxSlider({
      adaptiveHeight: true,
      mode: 'fade'
    });

})(jQuery);
