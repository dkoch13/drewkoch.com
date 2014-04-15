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