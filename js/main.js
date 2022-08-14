//Sticky header menu and scroll to top arrow
let scroller = document.querySelector(".scroller i");
let sticky = document.querySelector(".header-two");

window.onscroll = function () {
  if (window.scrollY >= 200) {
    sticky.style.opacity = 1;
    sticky.style.visibility = "visible";
    scroller.style.opacity = 1;
  } else {
    sticky.style.opacity = 0;
    sticky.style.visibility = "hidden";
    scroller.style.opacity = 0;
  }
};

$(scroller).on("click", function () {
  window.scrollTo(0, 0);
});

//Nav Menu
let openn = document.querySelector(".header .links .icons");
let exitt = document.querySelector(".header .links ul .exit");
let navMenu = document.querySelector(".header .links .nav-links ul");
let overlay = document.querySelector(".header .overlay");
let openTwo = document.querySelector(".header-two .cont-two .links .icons");

$(openn).on("click", () => {
  navMenu.style.transform = "translateX(0)";
  overlay.style.opacity = 1;
  overlay.style.zIndex = 1500;
});

$(openTwo).on("click", () => {
  navMenu.style.transform = "translateX(0)";
  overlay.style.opacity = 1;
  overlay.style.zIndex = 1500;
});

$(exitt).on("click", () => {
  navMenu.style.transform = "translateX(-500px)";
  overlay.style.opacity = 0;
  overlay.style.zIndex = -1;
});

$(overlay).on("click", () => {
  navMenu.style.transform = "translateX(-500px)";
  overlay.style.opacity = 0;
  overlay.style.zIndex = -1;
});

//theme category switching blocks

let home = document.querySelector(".theme-catg ul .home");
let collec = document.querySelector(".theme-catg ul .collections");
let categ = document.querySelector(".theme-catg ul .categ");
let product = document.querySelector(".theme-catg ul .product");
let blog = document.querySelector(".theme-catg ul .blog");
let others = document.querySelector(".theme-catg ul .others");
let liss = document.querySelector(".theme-catg ul");

let row = document.querySelector(".theme-catg .sw-home");
let roww = document.querySelector(".theme-catg .sw-collections");
let rowww = document.querySelector(".theme-catg .sw-categ");
let rowwww = document.querySelector(".theme-catg .sw-product");
let rowwwww = document.querySelector(".theme-catg .sw-blog");
let rowwwwww = document.querySelector(".theme-catg .sw-others");
let lines = document.querySelector(".theme-catg .lines");
let allRows = document.querySelector(".theme-catg .middle-cont");

// switching buttons

$(".theme-catg ul li").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");
});

//themes switchs

$(home).on("click", function () {
  if (this.className === "home active") {
    row.style.display = "block";
    roww.style.display = "none";
    rowww.style.display = "none";
    rowwww.style.display = "none";
    rowwwww.style.display = "none";
    rowwwwww.style.display = "none";
  }
});

$(collec).on("click", function () {
  if (this.className === "collections active") {
    row.style.display = "none";
    roww.style.display = "block";
    rowww.style.display = "none";
    rowwww.style.display = "none";
    rowwwww.style.display = "none";
    rowwwwww.style.display = "none";
  }
});

$(categ).on("click", function () {
  if (this.className === "categ active") {
    row.style.display = "none";
    roww.style.display = "none";
    rowww.style.display = "block";
    rowwww.style.display = "none";
    rowwwww.style.display = "none";
    rowwwwww.style.display = "none";
  }
});

$(product).on("click", function () {
  if (this.className === "product active") {
    row.style.display = "none";
    roww.style.display = "none";
    rowww.style.display = "none";
    rowwww.style.display = "block";
    rowwwww.style.display = "none";
    rowwwww.style.display = "none";
  }
});

$(blog).on("click", function () {
  if (this.className === "blog active") {
    row.style.display = "none";
    roww.style.display = "none";
    rowww.style.display = "none";
    rowwww.style.display = "none";
    rowwwww.style.display = "block";
    rowwwwww.style.display = "none";
  }
});

$(others).on("click", function () {
  if (this.className === "others active") {
    row.style.display = "none";
    roww.style.display = "none";
    rowww.style.display = "none";
    rowwww.style.display = "none";
    rowwwww.style.display = "none";
    rowwwwww.style.display = "block";
  }
});

//child thems slider

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  slidesPerGroup: 1,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    550: { slidesPerView: 2 },
    800: { slidesPerView: 3 },
    1000: { slidesPerView: 4 },
  },
});

//MULTIPLE
(function ($) {
  "use strict";
  $.fn.sliderResponsive = function (settings) {
    var set = $.extend(
      {
        slidePause: 5000,
        fadeSpeed: 800,
        autoPlay: "on",
        showArrows: "off",
        hideDots: "off",
        hoverZoom: "on",
        titleBarTop: "off",
      },
      settings
    );

    var $slider = $(this);
    var size = $slider.find("> div").length; //number of slides
    var position = 0; // current position of carousal
    var sliderIntervalID; // used to clear autoplay

    // Add a Dot for each slide
    $slider.append("<ul></ul>");
    $slider.find("> div").each(function () {
      $slider.find("> ul").append("<li></li>");
    });

    // Put .show on the first Slide
    $slider.find("div:first-of-type").addClass("show");

    // Put .showLi on the first dot
    $slider.find("li:first-of-type").addClass("showli");

    //fadeout all items except .show
    $slider.find("> div").not(".show").fadeOut();

    // If Autoplay is set to 'on' than start it
    if (set.autoPlay === "on") {
      startSlider();
    }

    // If showarrows is set to 'on' then don't hide them
    if (set.showArrows === "on") {
      $slider.addClass("showArrows");
    }

    // If hideDots is set to 'on' then hide them
    if (set.hideDots === "on") {
      $slider.addClass("hideDots");
    }

    // If hoverZoom is set to 'off' then stop it
    if (set.hoverZoom === "off") {
      $slider.addClass("hoverZoomOff");
    }

    // If titleBarTop is set to 'on' then move it up
    if (set.titleBarTop === "on") {
      $slider.addClass("titleBarTop");
    }

    // function to start auto play
    function startSlider() {
      sliderIntervalID = setInterval(function () {
        nextSlide();
      }, set.slidePause);
    }

    // on mouseover stop the autoplay
    $slider.mouseover(function () {
      if (set.autoPlay === "on") {
        clearInterval(sliderIntervalID);
      }
    });

    // on mouseout starts the autoplay
    $slider.mouseout(function () {
      if (set.autoPlay === "on") {
        startSlider();
      }
    });

    //on right arrow click
    $slider.find("> .right").click(nextSlide);

    //on left arrow click
    $slider.find("> .left").click(prevSlide);

    // Go to next slide
    function nextSlide() {
      position = $slider.find(".show").index() + 1;
      if (position > size - 1) position = 0;
      changeCarousel(position);
    }

    // Go to previous slide
    function prevSlide() {
      position = $slider.find(".show").index() - 1;
      if (position < 0) position = size - 1;
      changeCarousel(position);
    }

    //when user clicks slider button
    $slider.find(" > ul > li").click(function () {
      position = $(this).index();
      changeCarousel($(this).index());
    });

    //this changes the image and button selection
    function changeCarousel() {
      $slider.find(".show").removeClass("show").fadeOut();
      $slider.find("> div").eq(position).fadeIn(set.fadeSpeed).addClass("show");
      // The Dots
      $slider.find("> ul").find(".showli").removeClass("showli");
      $slider.find("> ul > li").eq(position).addClass("showli");
    }

    return $slider;
  };
})(jQuery);

//////////////////////////////////////////////
// Activate each slider - change options
//////////////////////////////////////////////
$(document).ready(function () {
  $("#slider2").sliderResponsive({
    fadeSpeed: 300,
    autoPlay: "off",
    showArrows: "on",
    hideDots: "on",
  });

  $("#slider3").sliderResponsive({
    hoverZoom: "off",
    hideDots: "on",
  });
});

//test
