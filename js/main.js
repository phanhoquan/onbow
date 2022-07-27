(function ($) {
  "use strict";
  const $WIN = $(window);
  var ssPreloader = function () {
    $WIN.on("load", function () {
      // force page scroll position to top at page refresh
      $("html, body").animate({ scrollTop: 0 }, "normal");
    });
  };

  /* Smooth Scrolling
   * ------------------------------------------------------ */
  var ssSmoothScroll = function () {
    $(".smoothscroll").on("click", function (e) {
      var target = this.hash,
        $target = $(target);
      e.preventDefault();
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
      } else {
        $("li .smoothscroll.active").removeClass("active");
        $(this).addClass("active");
      }
      $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top - 60,},200);
    });
  };
  $(window).bind("scroll", function () {
    if ($(window).scrollTop() > 70) {
      $("#header").addClass("fixed");
    } else {
      $("#header").removeClass("fixed");
    }
  });

  ssPreloader();
  ssSmoothScroll();
})(jQuery);
