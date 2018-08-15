$(function() {
  "use strict";

  $("body").css("paddingTop", $(".navbar").innerHeight());

  $(".navbar li a").click(function(e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top
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
  // Synck Navbar Links With Section

  $(window).scroll(function() {
    $(".block").each(function() {
      if ($(window).scrollTop() > $(this).offset().top) {
        console.log($(this).attr("id"));
        var blockID = $(this).attr("id");
        $(".navbar li a[data-scroll=" + blockID + "]")
          .addClass("active")
          .parent()
          .siblings()
          .find("a")
          .removeClass("active");

        /*   $(".navbar li a").each(function() {
        if ($(this).data("scroll") == blockID) {
          $(this)
            .addClass("active")
            .parent()
            .siblings()
            .find("a")
            .removeClass("active");
        }
      }); */
      }
    });
  });
});
