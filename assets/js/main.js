$(document).ready(function () {
  // INITS PARALLAX
  var scene = $("#scene-premier").get(0);
  var parallaxInstance = new Parallax(scene);

  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    var scrollCoef = 0.001;

    $(".clouds").css({
      opacity: 1 - $(window).scrollTop() * scrollCoef
    });

    $(".rocket").css({
      bottom: +scroll / 3 + "%"
    });

    $(".confetti").css({
      bottom: -scroll / 5 + "%",
      opacity: 1 - $(window).scrollTop() * scrollCoef
    });

    $(".site-1").css({
      bottom: -scroll / 4 + "%"
    });

    $(".site-2").css({
      bottom: -scroll / 8 + "%"
    });

    $(".site-3").css({
      bottom: -scroll / 4 + "%",
      opacity: 1 - $(window).scrollTop() * scrollCoef
    });
  });

  // OWL CAROUSEL

  $(".slick-carousel").slick({
    slidesToShow: 5,
    arrows: false,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    draggable: false,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 1280,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // MAGNIFIC POPAP

  $(".popup-link").magnificPopup({
    type: "image",
    removalDelay: 300,
    mainClass: "mfp-fade"
  });

  // STICKY MENU
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      $("#header").addClass("sticky");
      $("#mobile-menu").addClass("sticky");
    } else {
      $("#header").removeClass("sticky");
      $("#mobile-menu").removeClass("sticky");
    }
  });

  // TYPED TEXT SECTION 1
  var premierSubTitle = new Typed(".hero-typed-text", {
    strings: ["Modern methods", "Original ways", "Services for every budget", "Your online business"],
    typeSpeed: 80,
    backSpeed: 40
  });

  var increaseTitle = new Typed(".hero-typed-text2", {
    strings: ["", "help with optimization?", "an advertisement?", "to increase customer flow?"],
    typeSpeed: 80,
    backSpeed: 40,
    loop: true
  });

  // WOW
  wow = new WOW({
    mobile: false
  });
  wow.init();

  // PRELOADER
  var preloader = $("#preloader"),
    imagesCount = $("img").length,
    dBody = $("body"),
    percent = 100 / imagesCount,
    progress = 0,
    imgSum = 5,
    loadedImg = 0;

  if (imagesCount >= imgSum && imagesCount > 0) {
    preloader.css("background", "#F9F9F9");
    dBody.css("overflow", "hidden");
    $(".dws-progress-bar")
      .circularProgress({
        color: "#ffd900",
        line_width: 17,
        height: "350px",
        width: "350px",
        percent: 0,
        starting_position: 25
      })
      .circularProgress("animate", percent, 1000);

    for (var i = 0; i < imagesCount; i++) {
      var img_copy = new Image();
      img_copy.src = document.images[i].src;
      img_copy.onload = img_load;
      img_copy.onerror = img_load;
    }
  } else {
    preloader.remove();
  }
  function img_load() {
    progress += percent;
    loadedImg++;
    if (progress >= 100 || loadedImg == imagesCount) {
      preloader.delay(400).fadeOut("slow");
      dBody.css("overflow", "");
    }
    $(".dws-progress-bar").circularProgress("animate", progress, 500);
  }


  // SCROLL TOP
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll-top").fadeIn();
    } else {
      $("#scroll-top").fadeOut();
    }
  });
  $("#scroll-top").click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

  // SCROLL ANCHORS
  $(".menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({
      scrollTop: top
    }, 1000);
  });

  // MODAL
  $(".trigger").on("click", function () {
    $(".modal-overlay").toggleClass("open");
    return false;
  });

  //E-mail Ajax Send
  $("form").submit(function () {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: th.serialize()
    }).done(function () {
      alert("Thank you, we will call you back.");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

});