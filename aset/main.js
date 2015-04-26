// Sticky Button
$(window).load(function() {

		// Show or hide the sticky footer button
	$(window).scroll(function() {
		if ($(this).scrollTop() > 200) {
			$('#go-top').fadeIn(200);
		} else {
			$('#go-top').fadeOut(200);
		}
	});

	// Animate the scroll to top
	$('#go-top').click(function(event) {
		event.preventDefault();

		$('html, body').animate({scrollTop: 0}, 300);
	})

});


//Animation code for Slider
$(window).load(function() {
    $('.flexslider').flexslider({
		animation: "slide",              //String: Select your animation type, "fade" or "slide"
		slideshow: true,                //Boolean: Animate slider automatically
		slideshowSpeed: 3000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
		animationDuration: 500,         //Integer: Set the speed of animations, in milliseconds
		
		directionNav: false,             //Boolean: Create navigation for previous/next navigation? (true/false)
		controlNav: true,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
		keyboardNav: true,              //Boolean: Allow slider navigating via keyboard left/right keys
		mousewheel: false,              //Boolean: Allow slider navigating via mousewheel
		prevText: "Previous",           //String: Set the text for the "previous" directionNav item
		nextText: "Next",               //String: Set the text for the "next" directionNav item
		pausePlay: false,               //Boolean: Create pause/play dynamic element
		pauseText: 'Pause',             //String: Set the text for the "pause" pausePlay item
		playText: 'Play',               //String: Set the text for the "play" pausePlay item
		randomize: false,               //Boolean: Randomize slide order
		slideToStart: 0,                //Integer: The slide that the slider should start on. Array notation (0 = first slide)
		animationLoop: true,            //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
		pauseOnAction: false,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
		pauseOnHover: false
	  });
	  
	  $('.flexslider_2').flexslider({
		animation: "slide",              //String: Select your animation type, "fade" or "slide"
		slideshow: false,                //Boolean: Animate slider automatically
		slideshowSpeed: 3000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
		animationDuration: 500,         //Integer: Set the speed of animations, in milliseconds
		
		directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
		controlNav: false,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
		keyboardNav: true,              //Boolean: Allow slider navigating via keyboard left/right keys
		mousewheel: false,              //Boolean: Allow slider navigating via mousewheel
		prevText: "P",           //String: Set the text for the "previous" directionNav item
		nextText: "N",               //String: Set the text for the "next" directionNav item
		pausePlay: false,               //Boolean: Create pause/play dynamic element
		pauseText: 'Pause',             //String: Set the text for the "pause" pausePlay item
		playText: 'Play',               //String: Set the text for the "play" pausePlay item
		randomize: false,               //Boolean: Randomize slide order
		slideToStart: 0,                //Integer: The slide that the slider should start on. Array notation (0 = first slide)
		animationLoop: true,            //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
		pauseOnAction: false,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
		pauseOnHover: false
	  });
  });