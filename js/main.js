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


function sectionNavShow() {
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

$(document).ready(function(){

  var native_width = 0;
  var native_height = 0;

  //Now the mousemove function
  $(".magnify").mousemove(function(e){
    //When the user hovers on the image, the script will first calculate
    //the native dimensions if they don't exist. Only after the native dimensions
    //are available, the script will show the zoomed version.
    console.log("movemove over image");
    // if(!native_width && !native_height)
    // {
    //   console.log("if");
    //   //This will create a new image object with the same image as that in .small
    //   //We cannot directly get the dimensions from .small because of the
    //   //width specified to 200px in the html. To get the actual dimensions we have
    //   //created this image object.
    //   var image_object = new Image();
    //   image_object.src = $(".small").attr("src");

    //   //This code is wrapped in the .load function which is important.
    //   //width and height of the object would return 0 if accessed before
    //   //the image gets loaded.
    //   native_width = image_object.width;
    //   native_height = image_object.height;
    // }
    // else
    // {
      console.log("else");
      //x/y coordinates of the mouse
      //This is the position of .magnify with respect to the document.
      var magnify_offset = $(this).offset();
      //We will deduct the positions of .magnify from the mouse positions with
      //respect to the document to get the mouse positions with respect to the
      //container(.magnify)
      var mx = e.pageX - magnify_offset.left;
      var my = e.pageY - magnify_offset.top;

      //Finally the code to fade out the glass if the mouse is outside the container
      if(mx < $(this).width() && my < $(this).height() && mx > 0 && my > 0)
      {
        $(".large").fadeIn(100);
      }
      else
      {
        $(".large").fadeOut(100);
      }
      if($(".large").is(":visible"))
      {
        console.log("large is visible");
        //The background position of .large will be changed according to the position
        //of the mouse over the .small image. So we will get the ratio of the pixel
        //under the mouse pointer with respect to the image and use that to position the
        //large image inside the magnifying glass
        var rx = Math.round(mx/$(".small").width()*native_width - $(".large").width()/2)*-1;
        var ry = Math.round(my/$(".small").height()*native_height - $(".large").height()/2)*-1;
        var bgp = rx + "px " + ry + "px";

        //Time to move the magnifying glass with the mouse
        var px = mx - $(".large").width()/2;
        var py = my - $(".large").height()/2;
        //Now the glass moves with the mouse
        //The logic is to deduct half of the glass's width and height from the
        //mouse coordinates to place it with its center at the mouse coordinates

        //If you hover on the image now, you should see the magnifying glass in action
        $(".large").css({left: px, top: py, backgroundPosition: bgp});
      }
    // }
  })
})