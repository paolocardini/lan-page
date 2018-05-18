jQuery(document).ready(function($) {

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // reveal jquery

  window.sr = ScrollReveal();
  sr.reveal('#about', {
    duration: 1000,
    origin: 'bottom',
    distance: '180px',
  });

  sr.reveal('.magic-title-intro', {
    duration: 1000,
    origin: 'top',
    distance: '300px',
  });

  sr.reveal('.par-left', {
    duration: 1000,
    origin: 'left',
    distance: '300px',
  });

  sr.reveal('.par-right', {
    duration: 1000,
    origin: 'right',
    distance: '300px',
  });

  sr.reveal('.item', {
    duration: 1000,
    origin: 'bottom',
    distance: '180px',
  });

  sr.reveal('.footer-info', {
    duration: 1500,
    origin: 'left',
    distance: '180px',
  });

  sr.reveal('.footer-links', {
    duration: 1500,
    origin: 'top',
    distance: '180px',
  });

  sr.reveal('.footer-contact', {
    duration: 1500,
    origin: 'top',
    distance: '180px',
  });

  sr.reveal('.footer-newsletter', {
    duration: 1500,
    origin: 'right',
    distance: '180px',
  });

  sr.reveal('.box-left', {
    duration: 1500,
    origin: 'left',
    distance: '180px',
  });

  sr.reveal('.box-top', {
    duration: 1500,
    origin: 'top',
    distance: '180px',
  });

  sr.reveal('.box-right', {
    duration: 1500,
    origin: 'right',
    distance: '180px',
  });

  // reveal jquery


  // Smooth scroll for the menu and links with .scrollto classes

  //   $('.nav-menu a, #mobile-nav a, .scrollto[href*="#"]:not([href="#"])').click(function() {
  //   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
  //     var target = $(this.hash);
  //     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  //     if (target.length) {
  //       $('html, body').animate({
  //         scrollTop: (target.offset().top - 54)
  //       }, 1000, "easeInOutExpo");
  //       return false;
  //     }
  //   }
  // });
  //
  //
  // $('body').scrollspy({
  //   target: '#header',
  //   offset: 10
  // });

  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (!$('#header').hasClass('header-fixed')) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });


  $('body').scrollspy({
    target: '.nav-text-color',
    offset: 54
  });


  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
      $('.nav-menu a').removeClass('nav-text-color').addClass('nav-change-text-color');
      $('#magic-footer').removeClass('hidden-footer-right').addClass('transparent-footer');

    } else {
      $('#header').removeClass('header-scrolled');
      $('.nav-menu a').removeClass('nav-change-text-color').addClass('nav-text-color');
      $('#magic-footer').removeClass('transparent-footer').addClass('hidden-footer-right');
    }

    if ($(this).scrollTop() > 4000) {
      $('#magic-footer').removeClass('transparent-footer').addClass('hidden-footer-right');
    } else {}


    // Test
    var navContainer = $("#nav-menu-container");
    navContainer.find(".nav-menu > LI").removeClass("menu-active");
    if (isIntoView($("#about"))) {
       navContainer.find(".nav-menu A[href='#about']").parent().addClass("menu-active");
    } else if (isIntoView($("#services"))) {
        navContainer.find(".nav-menu A[href='#services']").parent().addClass("menu-active");
    } else if (isIntoView($("#skills"))) {
        navContainer.find(".nav-menu A[href='#skills']").parent().addClass("menu-active");
    } else if (isIntoView($("#team"))) {
        navContainer.find(".nav-menu A[href='#team']").parent().addClass("menu-active");
    } else if (isIntoView($("#footer"))) {
        navContainer.find(".nav-menu A[href='#footer']").parent().addClass("menu-active");
    }

  });


  // Return true se element è in view (visibile)
  function isIntoView(element) {
      var pageTop = $(window).scrollTop();
      var pageBottom = pageTop + $(window).height();
      var elementTop = $(element).offset().top;
      var elementBottom = elementTop + $(element).height();
      return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
  }

  // Skills section


  $('#skills').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // jQuery counterUp (used in Facts section)


  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Porfolio isotope and filter


  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on('click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({
      filter: $(this).data('filter')
    });
  });




  // Clients carousel

  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 4
      },
      900: {
        items: 6
      }
    }
  });

  // Testimonials carousel

  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1,
    autoplayTimeout: 5000
  });

  // add magic section

  $('#btn-add-magic').on('click', function() {
    $("#particles-js").toggle('particles-background');

  });


});
