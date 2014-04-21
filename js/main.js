$("#scroll").click(function(e) {
  e.preventDefault();
  $('html, body').animate({
      scrollTop:$("#section-1").offset().top
    }, 600);
});

function reveal(button, anchor) {
  $(button).click(function() {
    var newHeight = $(anchor)[0].scrollHeight;
    var figure = anchor + " #teaser-figure";
    $(anchor).css("height", newHeight);
    $(anchor + " .fadeout").hide();
    $(button).hide();
    $('html, body').animate({
        scrollTop: $(figure).offset().top
    }, 600);
  });
};

reveal("#reveal-farmplicity", "#section-1");

reveal("#reveal-voyager", "#section-2");

reveal("#reveal-pantastic", "#section-3");

$("#section-1-scroll").click(function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop:$("#section-1").offset().top
  }, 600);
});

$("#section-2-scroll").click(function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop:$("#section-2").offset().top
  }, 600);
});

$("#section-3-scroll").click(function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop:$("#section-3").offset().top
  }, 600);
});

$("#section-4-scroll").click(function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop:$("#section-4").offset().top
  }, 600);
});

$("#section-5-scroll").click(function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop:$("footer").offset().top
  }, 600);
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