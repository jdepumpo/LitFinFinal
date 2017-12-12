$(document).ready(function() {
   // MagnificPopup
	var magnifPopup = function() {
		$('.image-popup').magnificPopup({
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-with-zoom',
			gallery:{
				enabled:true
			}
		});
	};

	var magnifVideo = function() {
		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
	};

	var magnifText = function() {
		$('.text-popup').magnificPopup({
			type: 'inline',
			midClick: true,
			gallery:{
				enabled:true
			}
		});
	};

	


	// Call the functions 
	magnifPopup();
	magnifVideo();
	magnifText();

});