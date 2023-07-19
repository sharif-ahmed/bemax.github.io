$(document).ready(function () {
  $(".slider-active").owlCarousel({
    loop: true,
    nav: true,
    navText: [
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>',
    ],
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
  });

  $(".project-active").owlCarousel({
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });

  $(".blog-active").owlCarousel({
    loop: true,
    nav: true,
    items:1,
    navText: [
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>',
    ],
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
  });

  $(".brand-active").owlCarousel({
    loop: true,
    nav: false,
    margin: 50,
    navText: [
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 6,
      },
    },
  });

  $(".vedio-popup").magnificPopup({
    type: "iframe",
    // other options
  });

  jQuery("#mobile-menu").meanmenu({
    meanScreenWidth: "767",
    meanMenuContainer: ".mobile-menu-place",
  });
});
