jQuery(document).ready(function () {
  "use strict";
  
  jQuery(".anchor_nav").onePageNav();
  function waxon_tm_filter_opener() {
    var button = jQuery(".waxon_tm_portoflio .portfolio_filter .wrapper a");
    var list = jQuery(".waxon_tm_portoflio .portfolio_filter ul li");
    button.on("click", function () {
      var element = jQuery(this);
      if (element.hasClass("opened")) {
        element.removeClass("opened");
        list.removeClass("opened");
      } else {
        element.addClass("opened");
        list.each(function (i) {
          var ele = jQuery(this);
          setTimeout(function () {
            ele.addClass("opened");
          }, i * 100);
        });
      }
      return false;
    });
  }
  waxon_tm_filter_opener();
  function tdProgress(container) {
    container.find(".progress_inner").each(function () {
      var progress = jQuery(this);
      var pValue = parseInt(progress.data("value"), 10);
      var pColor = progress.data("color");
      var pBarWrap = progress.find(".bar");
      var pBar = progress.find(".bar_in");
      pBar.css({ width: pValue + "%", backgroundColor: pColor });
      setTimeout(function () {
        pBarWrap.addClass("open");
      });
    });
  }
  jQuery(".waxon_progress").each(function () {
    var pWrap = jQuery(this);
    pWrap.waypoint({
      handler: function () {
        tdProgress(pWrap);
      },
      offset: "90%",
    });
  });
  function waxon_tm_jarallax() {
    jQuery(".jarallax").each(function () {
      var element = jQuery(this);
      var customSpeed = element.data("speed");
      if (customSpeed !== "undefined" && customSpeed !== "") {
        customSpeed = customSpeed;
      } else {
        customSpeed = 0.5;
      }
      element.jarallax({ speed: customSpeed, automaticResize: true });
    });
  }
  waxon_tm_data_images();
  waxon_tm_jarallax();
  function edrea_tm_hamburger() {
    var hamburger = jQuery(".hamburger");
    var mobileMenu = jQuery(".waxon_tm_mobile_menu .dropdown");
    hamburger.on("click", function () {
      var element = jQuery(this);
      if (element.hasClass("is-active")) {
        element.removeClass("is-active");
        mobileMenu.slideUp();
      } else {
        element.addClass("is-active");
        mobileMenu.slideDown();
      }
      return false;
    });
  }
  edrea_tm_hamburger();
  function waxon_tm_nav_bg() {
    jQuery(window).on("scroll", function () {
      var topbar = jQuery(".waxon_tm_topbar,.waxon_tm_topbar_single");
      var WinOffset = jQuery(window).scrollTop();
      if (WinOffset >= 100) {
        topbar.addClass("animate");
      } else {
        topbar.removeClass("animate");
      }
    });
  }
  waxon_tm_nav_bg();

  function waxon_tm_carousel() {
    var carousel1 = jQuery(".waxon_tm_service .owl-carousel");
    var rtlMode = false;
    if (jQuery("body").hasClass("rtl")) {
      rtlMode = "true";
    }
    carousel1.owlCarousel({
      loop: true,
      items: 2,
      lazyLoad: false,
      margin: 50,
      autoplay: true,
      autoplayTimeout: 7000,
      rtl: rtlMode,
      dots: true,
      nav: false,
      navSpeed: true,
      responsive: {
        0: { items: 1 },
        480: { items: 1 },
        768: { items: 2 },
        1040: { items: 3 },
        1200: { items: 3 },
        1600: { items: 3 },
        1920: { items: 3 },
      },
    });
    waxon_tm_imgtosvg();
    var carousel2 = jQuery(".partners .owl-carousel");
    carousel2.owlCarousel({
      loop: true,
      items: 4,
      lazyLoad: false,
      margin: 50,
      autoplay: true,
      autoplayTimeout: 7000,
      rtl: rtlMode,
      dots: true,
      nav: false,
      navSpeed: true,
      responsive: {
        0: { items: 1 },
        480: { items: 2 },
        768: { items: 3 },
        1040: { items: 3 },
        1200: { items: 3 },
        1600: { items: 4 },
        1920: { items: 4 },
      },
    });
    var carousel3 = jQuery(".waxon_tm_testimonials .owl-carousel");
    carousel3.owlCarousel({
      loop: true,
      items: 3,
      lazyLoad: false,
      margin: 50,
      autoplay: true,
      autoplayTimeout: 7000,
      dots: false,
      nav: false,
      rtl: rtlMode,
      navSpeed: false,
      responsive: { 0: { items: 1 }, 768: { items: 3 } },
    });
  }
  waxon_tm_carousel();
  function waxon_tm_imgtosvg() {
    jQuery("img.svg").each(function () {
      var jQueryimg = jQuery(this);
      var imgClass = jQueryimg.attr("class");
      var imgURL = jQueryimg.attr("src");
      jQuery.get(
        imgURL,
        function (data) {
          var jQuerysvg = jQuery(data).find("svg");
          if (typeof imgClass !== "undefined") {
            jQuerysvg = jQuerysvg.attr("class", imgClass + " replaced-svg");
          }
          jQuerysvg = jQuerysvg.removeAttr("xmlns:a");
          jQueryimg.replaceWith(jQuerysvg);
        },
        "xml"
      );
    });
  }
  waxon_tm_imgtosvg();
  function waxon_tm_popup() {
    jQuery(".gallery_zoom").each(function () {
      jQuery(this).magnificPopup({
        delegate: "a.zoom",
        type: "image",
        gallery: { enabled: true },
        removalDelay: 300,
        mainClass: "mfp-fade",
      });
    });
    jQuery(".popup-youtube, .popup-vimeo").each(function () {
      jQuery(this).magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true,
      });
    });
    jQuery(".soundcloude_link").magnificPopup({
      type: "image",
      gallery: { enabled: true },
    });
  }
  waxon_tm_popup();
  function waxon_tm_data_images() {
    var data = jQuery("*[data-img-url]");
    data.each(function () {
      var element = jQuery(this);
      var url = element.data("img-url");
      element.css({ backgroundImage: "url(" + url + ")" });
    });
  }
  waxon_tm_data_images();
  jQuery(".tm_counter").each(function () {
    var el = jQuery(this);
    el.waypoint({
      handler: function () {
        if (!el.hasClass("stop")) {
          el.addClass("stop").countTo({
            refreshInterval: 50,
            formatter: function (value, options) {
              return value
                .toFixed(options.decimals)
                .replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
            },
          });
        }
      },
      offset: "80%",
    });
  });
  function waxon_tm_portfolio() {
    if (jQuery().isotope) {
      var list = jQuery(".waxon_tm_portoflio .portfolio_inner ul");
      var filter = jQuery(".waxon_tm_portoflio .portfolio_filter ul");
      if (filter.length) {
        filter.find("a").on("click", function () {
          var selector = jQuery(this).attr("data-filter");
          list.isotope({
            filter: selector,
            animationOptions: { duration: 750, easing: "linear", queue: false },
          });
          return false;
        });
        filter.find("a").on("click", function () {
          filter.find("a").removeClass("current");
          jQuery(this).addClass("current");
          return false;
        });
      }
    }
  }
  waxon_tm_portfolio();
  function waxon_tm_myload() {
    var speed = 50;
    setTimeout(function () {
      jQuery(".waxon_tm_preloader").addClass("loaded");
    }, speed);
    setTimeout(function () {
      jQuery(".waxon_tm_hero .background .myOverlay").addClass("loaded");
    }, speed + 100);
    setTimeout(function () {
      jQuery(".waxon_tm_topbar.home").addClass("opened");
    }, speed + 500);
    setTimeout(function () {
      waxon_tm_isotope();
    }, speed + 1000);
  }
  function waxon_tm_isotope() {
    var masonry = $(".masonry");
    if ($().isotope) {
      masonry.each(function () {
        $(this).isotope({ itemSelector: ".masonry_item", masonry: {} });
      });
    }
  }
  waxon_tm_isotope();
  function waxon_tm_contact_form() {
    jQuery(".contact_form #send_message").on("click", function () {
      var name = jQuery(".contact_form #name").val();
      var email = jQuery(".contact_form #email").val();
      var message = jQuery(".contact_form #message").val();
      var subject = jQuery(".contact_form #subject").val();
      var success = jQuery(".contact_form .returnmessage").data("success");
      jQuery(".contact_form .returnmessage").empty();
      if (name === "" || email === "" || message === "") {
        jQuery("div.empty_notice").slideDown(500).delay(2000).slideUp(500);
      } else {
        jQuery.post(
          "modal/contact.php",
          {
            ajax_name: name,
            ajax_email: email,
            ajax_message: message,
            ajax_subject: subject,
          },
          function (data) {
            jQuery(".contact_form .returnmessage").append(data);
            if (
              jQuery(".contact_form .returnmessage span.contact_error").length
            ) {
              jQuery(".contact_form .returnmessage")
                .slideDown(500)
                .delay(2000)
                .slideUp(500);
            } else {
              jQuery(".contact_form .returnmessage").append(
                "<span class='contact_success'>" + success + "</span>"
              );
              jQuery(".contact_form .returnmessage")
                .slideDown(500)
                .delay(4000)
                .slideUp(500);
            }
            if (data === "") {
              jQuery("#contact_form")[0].reset();
            }
          }
        );
      }
      return false;
    });
  }
  waxon_tm_contact_form();
  

  jQuery(window).on("resize", function () {
    waxon_tm_isotope();
    waxon_tm_portfolio();
  });
  jQuery(window).on("load", function () {
    waxon_tm_myload();
});
});
