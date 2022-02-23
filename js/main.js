$(document).ready(function () {

    // navicon //

    $(".navicon").hover(function() {
        $(this).find("span").toggleClass("naviconhover");
    });

    $(".navicon").click(function() {
        $(".nav").toggleClass("navactiv");
    });



    $('.p-button').click(function(){
        $('.navconfirst').addClass('firstmove');
        $('.navconsecond').removeClass('secondmove');
        $('.projekte').addClass('secondmove');
        $('.back-button').addClass('backmove');
        $(this).removeClass('navlinkactiv');
        $(this).siblings().addClass('navlinkactiv');
    });

    $('.wb-button').click(function(){
        $('.navconfirst').addClass('firstmove');
        $('.navconsecond').removeClass('secondmove');
        $('.wettbewerbe').addClass('secondmove');
        $('.back-button').addClass('backmove');
        $(this).removeClass('navlinkactiv');
        $(this).siblings().addClass('navlinkactiv');
    });

    $('.wl-button').click(function(){
        $('.navconfirst').addClass('firstmove');
        $('.navconsecond').removeClass('secondmove');
        $('.werkliste').addClass('secondmove');
        $('.back-button').addClass('backmove');
        $(this).removeClass('navlinkactiv');
        $(this).siblings().addClass('navlinkactiv');
    });

    $('.back-button').click(function(){
        $('.navconfirst').removeClass('firstmove');
        $('.navconsecond').removeClass('secondmove');
        $('.back-button').removeClass('backmove');
        $('.navlink').children().removeClass('navlinkactiv');
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
