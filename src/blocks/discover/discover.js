import Swiper from 'swiper/core';

(() => {
	new Swiper('.discover__slider', {
		loop: true,
		speed: 800,
		centeredSlides: true,
		spaceBetween: 40,
		slidesPerView: 4.1,
		breakpoints: {
			1280: { 
				slidesPerView: 4.0,
				spaceBetween: 40,
			},
			1100: { 
				slidesPerView: 3.9,
				spaceBetween: 40,
			},
			960: { 
				slidesPerView: 3.5,
				spaceBetween: 40,
			},
			780 : {
				slidesPerView: 3.0,
				spaceBetween: 40,
			},
			640: { 
				slidesPerView: 2.45,
				spaceBetween: 40
			},
			480: { 
				slidesPerView: 2.0,
				spaceBetween: 30
			},
			360: { 
				slidesPerView: 1.5,
				spaceBetween: 30
			},
			0: { 
				slidesPerView: 1.1,
				spaceBetween: 80
			}
		}
	});

})();