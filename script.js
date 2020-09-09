$(document).ready(function() {

	var typed = new Typed('#element', {
  		strings: [" ", "Web Designer","Wordpress Expert "],
  		loop: true,
  		typeSpeed:50,
  		backSpeed:50
	});

	$('.image_slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

	// counter up

	$('.counter').counterUp({
    	delay: 10,
    	time: 1000
	});

	// slicknav 
	$('.menu').slicknav();

	// Magnific Popup

	$('.image-link').magnificPopup({
		type:'image',
		gallery:{
    	enabled:true
  		}
	});

		$('.video').magnificPopup({
		type:'iframe'
	});


});