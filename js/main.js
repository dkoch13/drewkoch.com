$("#scroll").click(function() {
  $('html, body').animate({
      scrollTop:$("#section-1").offset().top
    }, 1000);
});

function reveal(button, anchor) {
  $(button).click(function() {
  var newHeight = $(anchor)[0].scrollHeight;
  $(anchor).css("height", newHeight);
  $(anchor + " .fadeout").hide();
  $(button).hide();
  $('html, body').animate({
      scrollTop: $(window).scrollTop() + 400
  }, 600);
  });
};

reveal("#reveal-farmplicity", "section.farmplicity");

reveal("#reveal-voyager", "section.voyager");

reveal("#reveal-pantastic", "section.pantastic");

$("#section-1-scroll").click(function() {
  $('html, body').animate({
    scrollTop:$("#section-1").offset().top
  }, 1000);
});

$("#section-2-scroll").click(function() {
  $('html, body').animate({
    scrollTop:$("#section-2").offset().top
  }, 1000);
});

$("#section-3-scroll").click(function() {
  $('html, body').animate({
    scrollTop:$("#section-3").offset().top
  }, 1000);
});

$("#section-4-scroll").click(function() {
  $('html, body').animate({
    scrollTop:$("#section-4").offset().top
  }, 1000);
});

$("#section-5-scroll").click(function() {
  $('html, body').animate({
    scrollTop:$("footer").offset().top
  }, 1000);
});


function sectionNavShow () {
  // $("#scroll").click(function() {
  //   $("#section-nav").fadeIn();
  // });
  var topOfOthDiv = ( $("main").offset().top - 100);
  $(window).scroll(function() {
      if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
          $("#section-nav").removeClass("slideOutRight").addClass("slideInRight").show(); //reached the desired point -- show div
      } else {
        $("#section-nav").removeClass("slideInRight").addClass("slideOutRight");
      }
  });
};

sectionNavShow();