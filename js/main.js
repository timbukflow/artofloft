$(document).ready(function () {

    // navicon //

    $(".navicon").hover(function() {
        $(this).find("span").toggleClass("naviconhover");
    });

    $(".navicon").click(function() {
        $(".navcontainer").toggleClass("navactiv");
    });

    // navigation //

    $('button').click(function() {
       var thisid = $(this).attr('data-toggle');
       var otherbuttons = $(this).siblings();

       $('.navcontent').hide();
       $(thisid).show();
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
  $('.viewer').each(function() {
      var number = $(this).attr('id');
    if ($(this).isInViewport()) {
      $('#number-' + number).addClass('inview');
    } else {
      $('#number-' + number).removeClass('inview');
    }
  });
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

    // accordion //

     $('.accTitle').click(function() {
        $accordion = $(this).next('.accList');
        $('.accList').not($accordion).slideUp(400);
        $accordion.stop(true, false).slideToggle(400);
    });

});
