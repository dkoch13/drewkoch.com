$(document).ready(function(){
  //reveal first section
  $('.button-1').on('click', function(){
      $('.goods-1').show();
      $('.section-1').animate({height:"115px"},500);
      $('.div-link').hide();
      $('.back-arrow').show();
      $('.section-2').slideUp();
      $('.section-3').slideUp();
      $('.see-work').hide();
    });
  //reveal second section
  $('.button-2').on('click', function(){
      $('.goods-2').show();
      $('.section-2').animate({height:"115px"},500);
      $('.back-arrow').show();
      $('.section-1').slideUp();
      $('.section-3').slideUp();
      $('.see-work').hide();
      $('.div-link').hide();
    });
  //reveal third section
  $('.button-3').on('click', function(){
      $('.goods-3').show();
      $('.section-3').animate({height:"115px"},500);
      $('.back-arrow').show();
      $('.section-1').slideUp(500);
      $('.section-2').slideUp(500);
      $('.see-work').hide();
      $('.div-link').hide();
    });
  //back arrow is clicked
  $('.back-arrow').on('click', function(){
      $('.section').slideDown();
      $('.section-1').animate({height:"33.333%"},250);
      $('.section-2').animate({height:"33.333%"},250);
      $('.section-3').animate({height:"34%"},250);
      $('.div-link').show();
      $('.back-arrow').hide();
      $('.see-work').show();
      $('.goods').hide();
    });

    //hashchanges ftw!
    function locationHashChanged() {
        if (location.hash === "#farmplicity") {
            $('.goods-1').show();
            $('.section-1').animate({height:"115px"},500);
            $('.div-link').hide();
            $('.back-arrow').show();
            $('.section-2').slideUp();
            $('.section-3').slideUp();
            $('.see-work').hide();
            $('.col-md-8').removeClass('hover-on');
        }
        if (location.hash === "#pantastic") {
            $('.goods-2').show();
            $('.section-2').animate({height:"115px"},500);
            $('.back-arrow').show();
            $('.section-1').slideUp();
            $('.section-3').slideUp();
            $('.see-work').hide();
            $('.div-link').hide();
            $('.col-md-8').removeClass('hover-on');
        }
        if (location.hash === "#other-work") {
            $('.goods-3').show();
            $('.section-3').animate({height:"115px"},500);
            $('.back-arrow').show();
            $('.section-1').slideUp(500);
            $('.section-2').slideUp(500);
            $('.see-work').hide();
            $('.div-link').hide();
            $('.col-md-8').removeClass('hover-on');
        }
        if (location.hash === "") {
            $('.section').slideDown();
            $('.section-1').animate({height:"33.333%"},250);
            $('.section-2').animate({height:"33.333%"},250);
            $('.section-3').animate({height:"34%"},250);
            $('.div-link').show();
            $('.back-arrow').hide();
            $('.see-work').show();
            $('.goods').hide();
            $('.col-md-8').addClass('hover-on');
        }
    }
    window.onhashchange = locationHashChanged;
  });




//Bootstrap carousel keyboard navigation
$(document).bind('keyup', function(e) {
  if(e.keyCode==39 && location.hash === "#farmplicity"){
  $('.goods-1 a.carousel-control.right').trigger('click');
  }
  else if(e.keyCode==37){
  $('.goods-1 a.carousel-control.left').trigger('click');
  }
  if(e.keyCode==39 && location.hash === "#pantastic"){
  $('.goods-2 a.carousel-control.right').trigger('click');
  }
  else if(e.keyCode==37){
  $('.goods-2 a.carousel-control.left').trigger('click');
  }
  if(e.keyCode==39 && location.hash === "#other-work"){
  $('.goods-3 a.carousel-control.right').trigger('click');
  }
  else if(e.keyCode==37){
  $('.goods-3 a.carousel-control.left').trigger('click');
  }
});

//tooltips
$(document).ready(function(){
    $('#tooltip1').tooltip();
    $('#tooltip2').tooltip();
    $('#tooltip3').tooltip();
    $('#tooltip4').tooltip();
});

$(function () {
  $("input,select,textarea").not("[type=submit]").jqBootstrapValidation(); } );

