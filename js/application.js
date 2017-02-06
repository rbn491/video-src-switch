function init()
{
	var swiperContainer = document.getElementById('swiper');
	var interleaveOffset = -.04;
	var parameters = {
		'loop': false,
		'speed': 1500,
		'threshold': 10,
		'touchReleaseOnEdges': true,
  		'keyboardControl': true,
		'prevButton': '.swiper-button-prev',
		'nextButton': '.swiper-button-next',
		'pagination': '.swiper-pagination',
		'paginationClickable': true,
		'watchSlidesProgress': true,

		'onInit': function(swiper)
		{
			var slide = swiper.slides[swiper.activeIndex];
			var videoSlide = slide.querySelector('video');
			videoSlide.play();
		},
		'onProgress': function(swiper, progress)
		{
			for(var i = 0; i < swiper.slides.length; i++)
			{
				var slide = swiper.slides[i];
				var translate;
				var innerTranslate;
				var progress = slide.progress;

				if(progress > 0)
				{
					translate = progress * swiper.width;
					innerTranslate = translate * interleaveOffset;
				}
				else
				{
					innerTranslate = Math.abs(progress * swiper.width) * interleaveOffset;
					translate = 0;
				}

				slide.style.transform = 'translate3d(' + translate + 'px, 0, 0)';
				slide.querySelector('.slide-content').style.transform = 'translate3d(' + innerTranslate + 'px, 0, 0)';
			}
		},
		'onSetTransition': function(swiper, speed)
		{
			for(var i = 0; i < swiper.slides.length; i++)
			{
				var slide = swiper.slides[i];
				slide.querySelector('.slide-content').parentNode.style.transition = speed + 'ms';
			}
		},
		'onTouchStart': function(swiper)
		{
			for(var i = 0; i < swiper.slides.length; i++)
			{
				var slide = swiper.slides[i];
				slide.style.transition = 'none';
			}

			var slidePrevious = swiper.slides[swiper.previousIndex];
			var previousVideo = slidePrevious.querySelector('video');

			var slideActive = swiper.slides[swiper.activeIndex];
			var activeVideo = slideActive.querySelector('video');

			setTimeout(function()
			{
				previousVideo.pause();
			}, 800);
		},
		'onTouchEnd': function(swiper)
		{
			var slidePrevious = swiper.slides[swiper.previousIndex];
			var previousVideo = slidePrevious.querySelector('video');
			
			var slideActive = swiper.slides[swiper.activeIndex];
			var activeVideo = slideActive.querySelector('video');

			setTimeout(function()
			{
				previousVideo.currentTime = 0;
			}, 1500);

			activeVideo.play();
		},
		'onSlideChangeStart': function(swiper)
		{
			var slidePrevious = swiper.slides[swiper.previousIndex];
			var previousVideo = slidePrevious.querySelector('video');

			var slideActive = swiper.slides[swiper.activeIndex];
			var activeVideo = slideActive.querySelector('video');
			
			setTimeout(function()
			{
				previousVideo.pause();
			}, 800);
		},
		'onSlideChangeEnd': function(swiper)
		{
			var slidePrevious = swiper.slides[swiper.previousIndex];
			var previousVideo = slidePrevious.querySelector('video');
			
			var slideActive = swiper.slides[swiper.activeIndex];
			var activeVideo = slideActive.querySelector('video');

			previousVideo.currentTime = 0;
			activeVideo.play();
		},
		'onClick': function(swiper, event)
		{
			var slideActive = swiper.slides[swiper.activeIndex];
			var activeVideo = slideActive.querySelector('video');

			activeVideo.pause();
		},
		'onTap': function(swiper, event)
		{
			var slideActive = swiper.slides[swiper.activeIndex];
			var activeVideo = slideActive.querySelector('video');

			activeVideo.pause();
		}
	};


	swiper = new Swiper(swiperContainer, parameters);
}

window.onload = init;