var slideIndex = 1;
var myTimer;
var slideshowContainer;

$(document).ready(function () {
  (function ($) {
    $(function () {
      var jcarousel = $(".jcarousel");

      jcarousel
        .on("jcarousel:reload jcarousel:create", function () {
          var carousel = $(this),
            width = carousel.innerWidth();

          if (width >= 600) {
            width = width / 3;
          } else if (width >= 350) {
            width = width / 2;
          }

          carousel.jcarousel("items").css("width", Math.ceil(width) + "px");
        })
        .jcarousel({
          wrap: "circular",
        });

      $(".jcarousel-control-prev").jcarouselControl({
        target: "-=1",
      });

      $(".jcarousel-control-next").jcarouselControl({
        target: "+=1",
      });

      $(".jcarousel-pagination")
        .on("jcarouselpagination:active", "a", function () {
          $(this).addClass("active");
        })
        .on("jcarouselpagination:inactive", "a", function () {
          $(this).removeClass("active");
        })
        .on("click", function (e) {
          e.preventDefault();
        })
        .jcarouselPagination({
          perPage: 1,
          item: function (page) {
            return '<a href="#' + page + '">' + page + "</a>";
          },
        });
    });
  })(jQuery);

  showSlides(slideIndex);
  myTimer = setInterval(function () {
    plusSlides(1);
  }, 4000);
});

// NEXT AND PREVIOUS CONTROL
function plusSlides(n) {
  clearInterval(myTimer);
  if (n < 0) {
    showSlides((slideIndex -= 1));
  } else {
    showSlides((slideIndex += 1));
  }

  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME

  if (n === -1) {
    myTimer = setInterval(function () {
      plusSlides(n + 2);
    }, 4000);
  } else {
    myTimer = setInterval(function () {
      plusSlides(n + 1);
    }, 4000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(n) {
  clearInterval(myTimer);
  myTimer = setInterval(function () {
    plusSlides(n + 1);
  }, 4000);
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

pause = () => {
  clearInterval(myTimer);
};

resume = () => {
  clearInterval(myTimer);
  myTimer = setInterval(function () {
    plusSlides(slideIndex);
  }, 4000);
};