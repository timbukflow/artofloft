$(document).ready(function () {

    // navicon //

    $('.navicon').click(function() {
        $('.navcontent').hide();
        $('button').removeClass('activ resize');

        setTimeout(function() {
          $('.navcontainer').fadeToggle(750);
          $('.maincontainer').fadeToggle(750);
          $('.navcontainer').css({ "position": "fixed" });
          //arrowmover
          $('.navicon').toggleClass('naviconmove');
    }, 150);

    });

    // navigation //

    $('button').click(function() {
       var thisid = $(this).data("target");
       var otherbuttons = $(this).siblings('button');

       $(window).scrollTop(0);
       $('.navcontainer').css({ "position": "relative" });

       $('.navcontent').hide();
       $(thisid).fadeIn(700);

       $('.navcontent').children().removeClass('inview');
       $(thisid).children('article:first-child').addClass('inview');

       $(otherbuttons).addClass('activ');
       $(this).removeClass('activ');
   });


   // in view function  //

   $.fn.isInViewport = function() {
     var elementTop = $(this).offset().top;
     var elementBottom = elementTop + $(this).outerHeight();

     var viewportTop = $(window).scrollTop();
     var viewportBottom = viewportTop + $(window).height();

     return elementBottom > viewportTop && elementTop < viewportBottom;
   };

   $(window).on('resize scroll', function() {
     $('.viewport').each(function() {
       var number = $(this).attr('id');
       if ($(this).isInViewport()) {
         $('#object-' + number).addClass('inview');
       } else {
         $('#object-' + number).removeClass('inview');
       }
     });
   });

   // accordion //

    $('.accTitle').click(function() {
       $accordion = $(this).next('.accList');
       $('.accList').not($accordion).slideUp(400);
       $accordion.stop(true, false).slideToggle(400);
   });

   // werkliste img //

   $('.werkimglink').click(function() {
      $(this).next('div').stop(true, false).slideToggle(700);
  });

    // slideshow //

    $('#slideshow > div:gt(0)').hide();
    setInterval(function() {
      $('#slideshow > div:first')
      .fadeOut(2000)
      .next()
      .fadeIn(2000)
      .end()
      .appendTo('#slideshow');
    }, 5000);

    // shuffle projekt //

    $(function () {
      var parent = $(".shuffleprojekt");
      var divs = parent.children();
      while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
      }
    });

    $(function () {
      var parent = $(".shufflestudie");
      var divs = parent.children();
      while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
      }
    });

    // impressum //

    $('.impressum').click(function() {
      var $target = $($(this).data("target"));
      $target.slideToggle(500, function() {
          if ($target.is(":visible")) {
              $('html,body').animate({scrollTop: $target.offset().top}, 1000);
          }
      });
    });

});
