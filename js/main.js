$(function() {
  "use strict";

  $("body").css("paddingTop", $(".navbar").innerHeight());

  $(".navbar li a").click(function(e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top + 1
      },
      1000
    );
  });

  // Add Active Class on Navbar Link

  $(".navbar li a").click(function() {
    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .find("a")
      .removeClass("active");
  });

  var scrollToTop = $(".scroll-to-top"); // Caching
  $(window).scroll(function() {
    // Synck Navbar Links With Section
    $(".block").each(function() {
      if ($(window).scrollTop() > $(this).offset().top) {
        $(".navbar li a[data-scroll=" + $(this).attr("id") + "]")
          .addClass("active")
          .parent()
          .siblings()
          .find("a")
          .removeClass("active");
      }
    });

    // Scroll To Top Button
    if ($(window).scrollTop() > 1000) {
      if ($(".scroll-to-top").is(":hidden")) {
        scrollToTop.fadeIn(400);
      }
    } else {
      scrollToTop.fadeOut(400);
    }
  });

  //Click To ScrollToTop
  scrollToTop.click(function(e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: 0
      },
      1000
    );
  });
});
