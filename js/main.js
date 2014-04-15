$("#scroll").click(function() {
  $('html, body').animate({
    scrollTop: window.innerHeight}, 800);
});

$("#reveal").click(function() {
  $("main section").css("height", "auto"); //hardcoded height of section for animation purposes css3
  $("#fadeOut").hide();
  $(this).hide();
});