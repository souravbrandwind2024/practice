$( document ).ready(function() {

  // Menu-on-hover-area-start //
  $('body').on('mouseenter mouseleave', '.nav-item', function (e) {
    if ($(window).width() > 750) {
        var _d = $(e.target).closest('.nav-item');
        _d.addClass('show');
        setTimeout(function () {
            _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
        }, 1);
    }
});

// Menu-on-hover-area-end //

// Dropdown-area-start //
$('.dropdown-menu a.dropdown-toggle').click(function (e) {
    if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');


    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
        $('.dropdown-submenu .show').removeClass("show");
    });
    return false;
});
// Dropdown-area-end //


// sticky-header-area-start //
$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $('.topmain').addClass("sticky");
    } else {
        $('.topmain').removeClass("sticky");
    }
});
// sticky-header-area-end //


// home-banner-area-start //
var mySwiper = new Swiper('.swiper-container', {
    autoplay: {
      delay: 8000,
    },
    direction: 'horizontal',
  effect: 'fade',
  loop: true,
  speed: 1000,
        // Add pagination
        pagination: {
            el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
          },
          // Add navigation buttons
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
})

// home-banner-area-end //


// category-carousel-area-start //
$('.category-carousel').owlCarousel({
  center: true,
  items: 4,
  margin: 20,
  loop: true,
  responsiveClass: true,
  nav: false,
  dots: false,
  animateOut: 'fadeOut',
  autoplay: true,
  autoplayTimeout: 2000,
  smartSpeed: 2000,
  dotsSpeed: 2000,
  autoplayHoverPause: true,
  responsive: {
      0: {
          items: 1,
          nav: false
      },
      500: {
          items: 2,
      },
      1200: {
          items: 6
      }
  }
});

// category-carousel-area-end //

// product-carousel-area-start //
$('.product-carousel').owlCarousel({
  center: true,
  items: 4,
  margin: 27,
  loop: true,
  responsiveClass: true,
  nav: false,
  dots: false,
  animateOut: 'fadeOut',
//   autoplay: true,
  autoplay: 8500,
  autoplayTimeout: 4500,
//   smartSpeed: 2000,
smartSpeed: 4500,
  dotsSpeed: 4500,
  autoplayHoverPause: true,
  responsive: {
      0: {
          items: 1,
          nav: false,
      },
      500: {
          items: 2,
      },
      1200: {
          items: 5,
      }
  }
});

// product-carousel-area-end //


// product-tooltip-area-start //
$("[data-toggle=tooltip]").tooltip();
// product-tooltip-area-end //

// scroll-to-top-area-start //
var scrollTop = $(".scrollTop");
$(window).scroll(function () {
$(this).scrollTop() > 100 ? $(scrollTop).css("opacity", "1") : $(scrollTop).css("opacity", "0")
  }),
$(scrollTop).click(function () {
return $("html, body").animate({
  scrollTop: 0
   }, 800),
  !1
});
  
// scroll-to-top-area-end //

 // footer-bottom-year-area-start //
 const yearEl = document.querySelector('.year');
 let date = new Date();
 
 yearEl.innerText = date.getFullYear();
 // footer-bottom-year-area-end //


});