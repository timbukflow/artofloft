$(document).ready(function () {

    // navicon //

    $(".navicon").hover(function() {
        $(this).find("span").toggleClass("naviconhover");
    });

    $(".navicon").click(function() {
        $(".nav").toggleClass("navactiv");
    });

    // slideshow //

    $("#slideshow > div:gt(0)").hide();

    setInterval(function() {
      $('#slideshow > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow');
    }, 5000);


});
