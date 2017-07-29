var slider = (function() {
	var indexCurrent = 0;
	var sliderItems = document.getElementsByClassName('slider__bkg');
	var arrowLeft = document.getElementsByClassName('slider__arrow_left')[0];
	var arrowRight = document.getElementsByClassName('slider__arrow_right')[0];

	var slideCurrent = sliderItems[0];
	var slidePresious = sliderItems[3];
	slideCurrent.style.left = '0px';
	slideCurrent.style.zIndex = '2';
	slidePresious.style.left = '0px';

	function clickLeft() {
		showSlide(-1);
	};
	function clickRight() {
		showSlide(1);
	};
	
	function showSlide(increm) {

		indexCurrent += increm;
		if(indexCurrent < 0) { indexCurrent = 3 };
		if(indexCurrent > sliderItems.length - 1) { indexCurrent = 0 };

		previousCurrent = indexCurrent - 1;
		if(previousCurrent < 0) { previousCurrent = 3 };
		if(previousCurrent > sliderItems.length - 1) { previousCurrent = 0 };

		if(increm > 0) {

			slidePresious.style.left = '';
			slideCurrent.style.zIndex = '';
			slideCurrent.classList.remove('toRight');

			slideCurrent = sliderItems[indexCurrent];
			slidePresious = sliderItems[previousCurrent];

			slideCurrent.classList.add('toCenter');
			slidePresious.style.left = '0px';
			slidePresious.classList.remove('toCenter');
		} else {
			slideCurrent.style.left = '';

			slideCurrent.classList.add('toRight');
			slideCurrent.classList.remove('toCenter');
			
			checkPosition();
			
			function checkPosition() {
				
				var timer = setTimeout(function() {

					slideCurrent.classList.remove('toRight');
					slideCurrent.style.zIndex = '';

					slideCurrent = sliderItems[indexCurrent];
					slidePresious = sliderItems[previousCurrent];

					slideCurrent.style.left = '0px';
					slideCurrent.style.zIndex = '2';
					slidePresious.style.left = '0px';
				
				}, 1000);
			};
			
		};
	};

	return {
		init : function() {
			arrowLeft.onclick = clickLeft;
			arrowRight.onclick = clickRight;
		}
	}
})();
slider.init();