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

  $(".show-popup").click(function() {
    //alert($(this).data("popup"));

    $("." + $(this).data("popup")).fadeIn(100);
  });

  $(".popup").click(function(e) {
    $(this).fadeOut();
  });

  $(".popup .inner").click(function(e) {
    e.stopPropagation();
  });

  $(".popup .close").click(function(e) {
    e.preventDefault();
    $(this)
      .parentsUntil(".popup")
      .parent()
      .fadeOut();
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) {
      $(".popup").fadeOut();
    }
  });

  /* Start Button effects */
  $(".from-left").hover(
    function() {
      $(this)
        .find("span")
        .eq(0)
        .animate(
          {
            width: "100%"
          },
          200
        );
    },
    function() {
      $(this)
        .find("span")
        .eq(0)
        .animate(
          {
            width: "0%"
          },
          200
        );
      // out
    }
  );
  /* End Button effects */
});
