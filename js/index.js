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

  showSlides();
});

var slideIndex = 0;
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slideIndex++;

  if (slideIndex > slides.length) {slideIndex = 1}    
  
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 1500); // Change image every 2 seconds
}
