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
        scrollTop: $(figure).offset().top - 20
    }, 600);
  });
};

reveal("#reveal-amazon", "#section-1");

reveal("#reveal-farmplicity", "#section-2");

reveal("#reveal-voyager", "#section-3");

reveal("#reveal-pantastic", "#section-4");

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
		scrollTop:$("#section-5").offset().top
	}, 600);
});

$("#section-6-scroll").click(function(e) {
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

function checkScroll() {
	$('video').each(function(){
		if ($(this).is(":in-viewport")) {
			$(this)[0].play();
		} else {
			$(this)[0].pause();
		}
	});
	$('section').each(function(i) {
		if ($(this).is(":in-viewport")) {
			$('#section-nav button').eq(i).css('borderColor', 'white');
		} else {
			$('#section-nav button').eq(i).css('borderColor', 'rgba(255,255,255,0.6)');
		};
	});
	if($(window).scrollTop() + $(window).height() == $(document).height()) {
		$('#section-5-scroll').css('borderColor', 'rgba(255,255,255,0.6)');
		$('#section-6-scroll').css('borderColor', 'white');
	} else {
		$('#section-6-scroll').css('borderColor', 'rgba(255,255,255,0.6)');
	};
}


window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);
