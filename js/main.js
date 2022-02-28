$(document).ready(function () {

    // navicon //


    $('.navicon').click(function() {
        $('.navcontent').hide();
        $('button').removeClass('activ resize');

        setTimeout(function() {
          $('.navcontainer').toggleClass('navactiv');
          $('.maincontainer').fadeToggle(750);
          //arrowmover
          $('.navicon').toggleClass('naviconmove');
    }, 150);

    });


    // navigation //

    $('button').click(function() {
       var thisid = $(this).attr('data-toggle');
       var otherbuttons = $(this).siblings();

       $(window).scrollTop(0);

       $('.navcontent').hide();
       $(thisid).fadeIn(700);

       $('.navcontent').children().removeClass('inview');
       $(thisid).children('article:first-child').addClass('inview');

       $(otherbuttons).removeClass('resize').addClass('activ');
       $(this).addClass('resize').removeClass('activ');
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

    // slideshow //

    $("#slideshow > div:gt(0)").hide();

    setInterval(function() {
      $('#slideshow > div:first')
      .fadeOut(2000)
      .next()
      .fadeIn(2000)
      .end()
      .appendTo('#slideshow');
    }, 5000);



});
