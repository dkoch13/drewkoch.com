$("#scroll").click(function() {
  $('html, body').animate({
    scrollTop: window.innerHeight}, 800);
});

$("#reveal-farmplicity").click(function() {
  $("section.farmplicity").css("height", "auto");
  $("section.farmplicity #fadeOut").hide();
  $("#reveal-farmplicity").hide();
});

$("#reveal-voyager").click(function() {
  $("section.voyager").css("height", "auto");
  $("section.voyager #fadeOut").hide();
  $("#reveal-voyager").hide();
});

$("#reveal-pantastic").click(function() {
  $("section.pantastic").css("height", "auto");
  $("section.pantastic #fadeOut").hide();
  $("#reveal-pantastic").hide();
});