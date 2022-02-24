$(document).ready(function () {

    // navicon //

    $(".navicon").hover(function() {
        $(this).find("span").toggleClass("naviconhover");
    });

    $(".navicon").click(function() {
        $(".nav").toggleClass("navactiv");
    });

    // navigation //

    $('button').click(function() {
       var thisid = $(this).attr("data-toggle");
       var otherids = $(this).siblings().attr("data-toggle");
       var otherbuttons = $(this).siblings();

       $(thisid).addClass('show');
       $(otherids).removeClass('show');
       $(otherbuttons).removeClass('resize').addClass('activ').children('span').removeClass('activ');
       $(this).addClass('resize').removeClass('activ');
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
