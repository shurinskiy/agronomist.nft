import Swiper from 'swiper/core';

(() => {
	new Swiper('.discover__slider', {
		loop: true,
		speed: 800,
		centeredSlides: true,
		spaceBetween: 40,
		slidesPerView: 4.1
	});

})();