(function() {
  "use strict";

  // iPad and iPod detection
  var isiPad = function() {
    return navigator.platform.indexOf("iPad") != -1;
  };

  var isiPhone = function() {
    return (
      navigator.platform.indexOf("iPhone") != -1 ||
      navigator.platform.indexOf("iPod") != -1
    );
  };

  // Go to next section
  var gotToNextSection = function() {
    var el = $(".fh5co-learn-more"),
      w = el.width(),
      divide = -w / 2;
    el.css("margin-left", divide);
  };

  // Loading page
  var loaderPage = function() {
    $(".fh5co-loader").fadeOut("slow");
  };

  // Scroll Next
  var ScrollNext = function() {
    $("body").on("click", ".scroll-btn", function(e) {
      e.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $(
            $(this)
              .closest('[data-next="yes"]')
              .next()
          ).offset().top
        },
        1000,
        "easeInOutExpo"
      );
      return false;
    });
  };

  var goToTop = function() {
    $(".js-gotop").on("click", function(event) {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $("html").offset().top
        },
        500
      );

      return false;
    });
  };

  // Animations
  var contentWayPoint = function() {
    var i = 0;
    $(".animate-box").waypoint(
      function(direction) {
        if (direction === "down" && !$(this.element).hasClass("animated")) {
          i++;

          $(this.element).addClass("item-animate");
          setTimeout(function() {
            $("body .animate-box.item-animate").each(function(k) {
              var el = $(this);
              setTimeout(
                function() {
                  el.addClass("fadeInUp animated");
                  el.removeClass("item-animate");
                },
                k * 200,
                "easeInOutExpo"
              );
            });
          }, 100);
        }
      },
      { offset: "95%" }
    );
  };

  // Document on load.
  $(function() {
    gotToNextSection();
    loaderPage();
    ScrollNext();
    goToTop();

    // Animate
    contentWayPoint();
  });
})();
