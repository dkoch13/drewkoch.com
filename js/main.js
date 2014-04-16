$("#scroll").click(function() {
  $('html, body').animate({
    scrollTop: window.innerHeight}, 800);
});

$("#reveal-farmplicity").click(function() {
  var newHeight = $("section.farmplicity")[0].scrollHeight;
  $("section.farmplicity").css("height", newHeight);
  $("section.farmplicity #fadeOut").fadeOut();
  $("#reveal-farmplicity").hide();
});

$("#reveal-voyager").click(function() {
  var newHeight = $("section.voyager")[0].scrollHeight;
  $("section.voyager").css("height", newHeight);
  $("section.voyager #fadeOut").hide();
  $("#reveal-voyager").hide();
});

$("#reveal-pantastic").click(function() {
  var newHeight = $("section.pantastic")[0].scrollHeight;
  $("section.pantastic").css("height", newHeight);
  $("section.pantastic #fadeOut").hide();
  $("#reveal-pantastic").hide();
});

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


function sectionNavShow () {
  // $("#scroll").click(function() {
  //   $("#section-nav").fadeIn();
  // });
  var topOfOthDiv = ( $("main").offset().top - 100);
  $(window).scroll(function() {
      if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
          $("#section-nav").fadeIn(); //reached the desired point -- show div
      } else {
        $("#section-nav").fadeOut();
      }
  });
};

sectionNavShow();