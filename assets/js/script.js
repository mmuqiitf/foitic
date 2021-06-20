$(() => {
  $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: true,
      nav: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
      // autoplay: true,
      // autoplayTimeout: 5000,
    });
  });

  //Click Logo To Scroll To Top
  $("#logo").on("click", () => {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  //Smooth Scrolling Using Navigation Menu
  $('a[href*="#"]').on("click", function (e) {
    $("html,body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 100,
      },
      500
    );
    e.preventDefault();
  });

  //Toggle Menu
  $("#menu-toggle").on("click", () => {
    $("#menu-toggle").toggleClass("closeMenu");
    $("ul.menu-nav-container").toggleClass("showMenu");

    // $("li").on("click", () => {
    //   $("ul.menu-nav-container").removeClass("showMenu");
    //   $("#menu-toggle").removeClass("closeMenu");
    // });
  });
});
