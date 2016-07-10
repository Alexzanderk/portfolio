$(document).ready(function() {

/*KNOB jQuery*/

	$('.dial').knob({
		'width': 100,
		'height': 100,
		'displayInput': false,
		// 'displayPrevious': true,
		'fgColor': '#77a266',
		'readOnly': true
	});


/*Map*/

(function() {
	'use strict';

    // When the window has finished loading create our google map below
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
           var mapOptions = {
            zoom: 12,
            scrollwheel: false,
				    navigationControl: false,
				    mapTypeControl: false,
				    scaleControl: false,
				    draggable: true,
				    sensor: false,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(50.4550727, 30.5024781), // New York
             styles: [
                    {
                    	"featureType": "administrative",
                    	"elementType": "labels.text.fill",
                    	"stylers": [
                    	{
                    		"color": "#444444"
                    	}
                    	]
                    },
                    {
                    	"featureType": "landscape",
                    	"elementType": "all",
                    	"stylers": [
                    	{
                    		"color": "#f2f2f2"
                    	}
                    	]
                    },
                    {
                    	"featureType": "landscape.natural.terrain",
                    	"elementType": "geometry.fill",
                    	"stylers": [
                    	{
                    		"visibility": "off"
                    	},
                    	{
                    		"hue": "#00d3ff"
                    	}
                    	]
                    },
                    {
                    	"featureType": "poi",
                    	"elementType": "all",
                    	"stylers": [
                    	{
                    		"visibility": "off"
                    	}
                    	]
                    },
                    {
                    	"featureType": "poi.park",
                    	"elementType": "geometry.fill",
                    	"stylers": [
                    	{
                    		"color": "#58746e"
                    	},
                    	{
                    		"visibility": "on"
                    	},
                    	{
                    		"lightness": "77"
                    	}
                    	]
                    },
                    {
                    	"featureType": "road",
                    	"elementType": "all",
                    	"stylers": [
                    	{
                    		"saturation": -100
                    	},
                    	{
                    		"lightness": 45
                    	}
                    	]
                    },
                    {
                    	"featureType": "road.highway",
                    	"elementType": "all",
                    	"stylers": [
                    	{
                    		"visibility": "simplified"
                    	}
                    	]
                    },
                    {
                    	"featureType": "road.highway",
                    	"elementType": "geometry.fill",
                    	"stylers": [
                    	{
                    		"visibility": "on"
                    	},
                    	{
                    		"color": "#736868"
                    	}
                    	]
                    },
                    {
                    	"featureType": "road.arterial",
                    	"elementType": "geometry.fill",
                    	"stylers": [
                    	{
                    		"visibility": "on"
                    	},
                    	{
                    		"color": "#736868"
                    	},
                    	{
                    		"lightness": "50"
                    	}
                    	]
                    },
                    {
                    	"featureType": "road.arterial",
                    	"elementType": "labels.icon",
                    	"stylers": [
                    	{
                    		"visibility": "off"
                    	}
                    	]
                    },
                    {
                    	"featureType": "transit",
                    	"elementType": "all",
                    	"stylers": [
                    	{
                    		"visibility": "off"
                    	}
                    	]
                    },
                    {
                    	"featureType": "water",
                    	"elementType": "all",
                    	"stylers": [
                    	{
                    		"color": "#86a77a"
                    	},
                    	{
                    		"visibility": "on"
                    	}
                    	]
                    },
                    {
                    	"featureType": "water",
                    	"elementType": "geometry.fill",
                    	"stylers": [
                    	{
                    		"lightness": "0"
                    	},
                    	{
                    		"gamma": "1.00"
                    	},
                    	{
                    		"weight": "1.00"
                    	}
                    	]
                    }
                    ]

                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                	position: new google.maps.LatLng(50.4550727,30.5024781),
                	map: map,
                	title: 'Snazzy!'
                });
            }


        })();


/*Flipper*/

  	var btn = $('.btn_autorization');
	var $this = btn;
	
	btn.click(function(event) {
		$this.fadeOut(50);
		$('.flip__container').toggleClass('flipped');
	});

	var btn_main = $('.autorization-btn__link');

	btn_main.click(function(event) {
		btn.fadeIn(200);
		$('.flip__container').toggleClass('flipped');
	});

/*Hamburger clicked*/
	
		var link = $('.hamburg__wrapper')

		link.click(function(event) {
			link.toggleClass('clicked');

			if ($(this).hasClass('clicked')) {
				$('.modal__menu').css('display', 'block');
				$('html, body').css('overflow', 'hidden');
			} else {
				$('.modal__menu').css('display', 'none');
				$('html, body').css('overflow', 'auto');
			}

		});


/*Active link menu*/
		(function(){
			$('.menu__link').each(function(index) {
				var location = window.location.href;
				var link = $('.menu__link')[index].href;

			if (location === link) {
					$(this).parent().addClass('menu__item_active');
				} else {

					$('.menu__item').parent().removeClass('menu__item_active');
				}

			});

		}());


/*Scroll 1 viewport*/

(function () {
	
	$('.sidedown__link').click(function(e) {
		e.preventDefault();
		var hWindow = $(window).height();
		$('html, body').animate({ scrollTop: hWindow}, 800, 'swing');
		return false;

	});	

	$('.sideup__link').click(function(e) {
		e.preventDefault();
		$('html, body').stop().animate({scrollTop: 0}, 800, 'swing');

	});



})();



/*Fixed article__list*/
(function () {
	
		$(window).scroll(function(event) {
			var 
				wScroll = $(window).scrollTop(),
				menu = $('.static .artcl__list'),
				sidebar = $('.static .artcl'),
				stickyStart = sidebar.offset().top,
				menuClone = sidebar.clone(),
				fixedSidebar = $('.fixed .left-side__article');

			if (wScroll >= stickyStart) {

				if (!fixedSidebar.find('.artcl').length) {

					fixedSidebar.append(menuClone); 
					menu.hide();

				}
				
			} else {

					fixedSidebar.find('.artcl').remove();
					menu.show();
				}

		});
	// body...
})();

/*Scroll Spy*/

(function() {


		  // Cache selectors
		var lastId,
		    topMenu = $("#article__list"),
		    topMenuHeight = topMenu.outerHeight()+15,
		    // All list items
		    menuItems = $('.artcl__link'),
		    // Anchors corresponding to menu items
		    scrollItems = menuItems.map(function(){
		      var item = $($(this).attr("href"));
		      if (item.length) { return item; }
		    });

		// Bind click handler to menu items
		// so we can get a fancy scroll animation
		$(".artcl__link").on("click", function(e){
		  var href = $(this).attr("href"),
		      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
		  $('html, body').stop().animate({ 
		      scrollTop: offsetTop
		  }, 300);
		  e.preventDefault();
		});

		// Bind to scroll
		$(window).scroll(function(){
		   // Get container scroll position
		   var fromTop = $(this).scrollTop()+topMenuHeight;
		   
		   // Get id of current scroll item
		   var cur = scrollItems.map(function(){
		     if ($(this).offset().top < fromTop)
		       return this;
		   });
		   // Get the id of the current element
		   cur = cur[cur.length-1];
		   var id = cur && cur.length ? cur[0].id : "";
		   
		   if (lastId !== id) {
		       lastId = id;
		       // Set/remove active class
		       $(".artcl__link")
		         .parent().removeClass("artcl__item-active")
		         .end().filter("[href='#"+id+"']").parent().addClass("artcl__item-active");
		   }                   
		});
})();
















// /*SLIDER  IN WORK */

	// (function slider () {
	// 	var counter = 0;
	// 	var btnDown = $('.link__down');
	// 	var btnUp = $('.link__up');
	// 	var btnContent = $('.slider__list');
	// 	var cloneContent = btnContent.clone();
		
	// 	btnUp.append(cloneContent);

	// 	// $('.slider_btn-link').on('click', function(event) {
	// 	// 	event.preventDefault();
	// 	// 	alert('gd');
	// 	// 	var $this_btn = $(this),
	// 	// 			container = $this.children('.slider__list'),
	// 	// 			items = container.find('.slider__item'),
	// 	// 			activeItem = container.find('.slider__item_active');

	// 	// 	var next_btn = $this_btn.parents(.slider__btn).siblings().find('.slider_btn-link'),
	// 	// 			next_container = next_btn.children('.slider__list'),
	// 	// 			next_items = next_container.find('.slider__item'),
	// 	// 			next_activeItem = next_container.find('.slider__item_active');

	// 	// 	var preview = $('.display__container'),
	// 	// 			previewItem = preview.find('slider__display-pic'),
	// 	// 			path = previewItem.attr('src');

			
			
	// 	// 	if ($this_btn.hasClass('link__down')) {

	// 	// 	}

	// 	// });
	// (function previewSlider(){

	// 	$('.slider_btn-link').on('click', function(event) {
	// 		event.preventDefault();
	// 		var $this = $(this),
	// 				previewItem = $this.parents('.slider__container').find('.slider__display-pic'),
	// 				$link = $this.find('.slider__item_active').find('.slider__preview-img').attr('src');
	// 		console.log($link);

	// 		previewItem.fadeOut(300, function () {
	// 			previewItem.attr('src', $link).fadeIn();
	// 		});

	// 	});

	// }());





	// 	$('.link__down').on('click', function(e){
	// 		e.preventDefault();

	// 		var $this = $(this),
	// 			container = $this.children('.slider__list'),
	// 			items = container.find('.slider__item'),
	// 			activeItem = container.find('.slider__item_active');
			
	// 		if (counter >= items.length) {
	// 			counter = 0;
	// 		}

	// 		var reqItem = items.eq(counter);

	// 		activeItem.animate({
	// 			'top' : '100%'
	// 		}, 700);

	// 		reqItem.animate({
	// 			'top' : '0%'
	// 		}, 700, function () {
	// 			activeItem.removeClass('slider__item_active').css('top', '-100%');
	// 			$(this).addClass('slider__item_active')
	// 		});

	// 		counter++;

	// 	});

	// 	$('.link__up').on('click', function(e){
	// 		e.preventDefault();

	// 		var $this = $(this),
	// 			container = $this.children('.slider__list'),
	// 			items = container.find('.slider__item'),
	// 			activeItem = container.find('.slider__item_active');
			
	// 		if (counter >= items.length) {
	// 			counter = 0;
	// 		}

	// 		var reqItem = items.eq(counter);

	// 		activeItem.animate({
	// 			'bottom' : '100%'
	// 		}, 700);

	// 		reqItem.animate({
	// 			'bottom' : '0%'
	// 		}, 700, function () {
	// 			activeItem.removeClass('slider__item_active').css('bottom', '-100%');
	// 			$(this).addClass('slider__item_active')
	// 		});

	// 		counter--;

	// 	});

	// })();











});





// var slider = (function () {

// 		var works = [
// 		{
// 			"srcImage"		: "/assets/img/site1-1.png",
// 			"title"				: "Site number 1",
// 			"skill"				: ["html", "css", "javascript"],
// 			"link"				: "#"
// 		},
// 		{
// 			"srcImage"      : "/assets/img/site1-2.png",
// 			"title"         : "Site number 2",
// 			"skill"				  : ["html", "css", "javascript", "php"],
// 			"link"          : "#"
// 		},
// 		{
// 			"srcImage"      : "/assets/img/site1-3.png",
// 			"title"         : "Site number 3",
// 			"skill"				  : ["html", "css"],
// 			"link"          : "#"
// 		},
// 		{
// 			"srcImage"			: "/assets/img/site1-4.png",
// 			"title"					: "Site number 4",
// 			"skill"					: ["html", "css"],
// 			"link"					: "#"
// 		},
// 		{
// 			"srcImage"			: "/assets/img/site1-5.png",
// 			"title"					: "Site number 5",
// 			"skill"					: ["html", "css"],
// 			"link"					: "#"
// 		},
// 		{
// 			"srcImage"			: "/assets/img/site1-6.png",
// 			"title"					: "Site number 6",
// 			"skill"					: ["html", "css"],
// 			"link"					: "#"
// 		},
// 		{
// 			"srcImage"			: "/assets/img/site1-7.png",
// 			"title"					: "Site number 7",
// 			"skill"					: ["html", "css"],
// 			"link"					: "#"
// 		},
// 		{
// 			"srcImage"			: "/assets/img/site1-8.png",
// 			"title"					: "Site number 8",
// 			"skill"					: ["php", "css", "html"],
// 			"link"					: "#"
// 		}
//   ];
	

// 			var
// 					flag = true;

// 			var slideIndex = function (slide) {
// 				return $('.display__container .slider__item').index(slide);
// 			};


// // privat
// 	return {
// 		init: function () {

// 			var _this = this;
// 			$('.slider_btn-link').on('click', function(event) {
// 				event.preventDefault();

// 				var 
// 						$this = $(this),
// 						slides = $this.find('.slider__item'),
// 						activeSlide = slides.filter('.slider__item_active'),
// 						nextSlide = activeSlide.next(),
// 						prevSlide = activeSlide.prev(),
// 						firstSlide = slides.first(),
// 						lastSlide = slides.last();

// 				var 
// 						preview = $('.display__container'),
// 						previewSlides = preview.find('.slider__list').find('.slider__item'),
// 						activeSlidePreview = previewSlides.filter('.slider__item_active'),
// 						nextSlidePreview = activeSlidePreview.next(),
// 						prevSlidePreview = activeSlidePreview.prev(),
// 						firstSlidePreview = previewSlides.first(),
// 						lastSlidePreview = previewSlides.last();

// 				var 
// 						slidesUp = $('.link__up').find('.slider__list').find('.slider__item'),
// 						activeSlideUp = slidesUp.filter('.slider__item_active'),
// 						prevSlideUp = activeSlideUp.prev(),
// 						lastSlideUp = slidesUp.last();
				
// 				var
// 						slidesDown = $('.link__down').find('.slider__list').find('.slider__item'),
// 						activeSlideDown = slidesDown.filter('.slider__item_active'),
// 						nextSlideDown = activeSlideDown.next(),
// 						firstSlideDown = slidesDown.first();


// 				if (flag) {
// 					flag = false;
// 					if ($this.hasClass('link__down')) {

// 						if (nextSlide.length) {
// 							_this.moveSlide(nextSlide, 'down');
// 						} else {
// 							_this.moveSlide(lastSlide, 'down');
// 						}
					

// 						if (nextSlideDown.length) {
// 							_this.moveSlide(nextSlideDown, 'up');
// 						} else {
// 							_this.moveSlide(firstSlideDown, 'up');
// 						}

// 						if (nextSlidePreview.length) {
// 							_this.descriptionSlide(slideIndex(prevSlidePreview));
// 							_this.mainSlide(prevSlidePreview);
// 						} else {
// 							_this.descriptionSlide(slideIndex(lastSlidePreview));
// 							_this.mainSlide(lastSlidePreview);
// 						}
					
// 				} else {
// 					if (nextSlide.length) {
// 						_this.moveSlide(prevSlide, 'up');
// 					} else {
// 						_this.moveSlide(lastSlide, 'up');
// 					}

// 					if (prevSlideUp.length) {
// 						_this.moveSlide(prevSlideUp, 'down');
// 					} else {
// 						_this.moveSlide(lastSlideUp, 'down');
// 					}

// 					if (prevSlidePreview.length) {
// 						_this.descriptionSlide(slideIndex(nextSlidePreview));
// 						_this.mainSlide(nextSlidePreview);
// 					} else {
// 						_this.descriptionSlide(slideIndex(firstSlidePreview));
// 						_this.mainSlide(firstSlidePreview);
// 					}
// 				}
// }
				
// 			});

// 		},

// 		moveSlide: function (slide, direction) {

// 			var 
// 					container = slide.closest('.slider'),
// 					slides = container.find('.slider__item'),
// 					activeSlide = slides.filter('.slider__item_active'),
// 					slideHeight = slides.height(),
// 					duration = 500,
// 					reqCssPosition = 0,
// 					reqSlideStrafe = 0;

// 			if (direction === 'up') {
// 					reqCssPosition = -slideHeight;
// 					reqSlideStrafe = slideHeight;

// 			} else if (direction === 'down') {
// 				reqCssPosition = slideHeight;
// 				reqSlideStrafe = -slideHeight;
// 			}

// 			slide.css('top', reqCssPosition).addClass('inslide');

// 			var movableSlide = slides.filter('.inslide');
// 			activeSlide.animate({top: reqSlideStrafe}, duration, function () {
// 				if (direction === 'down') {
// 					reqCssPosition = slideHeight;
// 					reqSlideStrafe = -slideHeight; 
// 					var container = $('.slider');
// 				} else if (direction === 'up') {
// 					reqCssPosition = -slideHeight;
// 					reqSlideStrafe = slideHeight;
// 				}
// 			});

// 			movableSlide.animate({top: 0}, duration, function () {
// 				var $this = $(this);

// 				slides.css('top', 0).removeClass('slider__item_active');
// 				$this.toggleClass('inslide slider__item_active');
// 			});

// 		},

// 		mainSlide: function (slide) {

// 			var
// 					container = slide.closest('.slider__container'),
// 					previewContainer = container.find('.slider__preview').find('.display__container'),
// 					slides = previewContainer.find('.slider__list').find('.slider__item'),
// 					activeSlide = slides.filter('.slider__item_active'),
// 					duration = 500;


// 			activeSlide.animate({opacity: 0}, duration);
// 			slide.animate({opacity: 1}, duration, function(){
// 				activeSlide.removeClass('.slider__item_active');
// 				slide.addClass('.slider__item_active');
// 				flag = true;
// 			});

// 		},


// 		descriptionSlide: function (slide) {

// 			var
// 					// container = $('.slider__description'),
// 					descriptionContainer = $('.slider__description'),
// 					slideTitle = descriptionContainer.find('.description__title'),
// 					slideSkill = descriptionContainer.find('.description__skill').find('.skill__list').find('.skill__item'),
// 					slideLink = descriptionContainer.find('.description__btn').find('.slider__link');

// 			slideTitle.text(works[slide].title);
// 			slideSkill.text(function(){
// 				var skill = "", i=0;
// 				for(; i<works[slide].skill.length; i++) {
// 					if (i !=works[slide].skill.length - 1) {
// 						skill += works[slide].skill[i];
// 					} else {
// 						skill += works[slide].skill[i];
// 					}
// 				}
// 				return skill;
// 			});
// 			slideLink.attr('src', works[slide].link);
// 		}





// 	}


// }());


// $(document).ready(function() {
// 	if ($('.slider__container').length) {
// 		slider.init();
// 	}
// });


/*BLUR */

$(document).ready(function() {
		setBlur();
});

$(window).resize(function() {
	setBlur();
	
});


function setBlur() {
	var 
			imgWidth = $('.reviews__container').width(),
			blur = $('.blur__bg'),
			blurSection = $('.reviews'),
			posTop = blurSection.offset().top - blur.offset().top,
			posLeft = blurSection.offset().left - blur.offset().left;

			blur.css({
		'background-size' : imgWidth + 'px' + ' ' + 'auto',
		'background-position' : posLeft + 'px' + ' ' + posTop + 'px'
	});
};










var slider = (function () {
/*Объект с работами*/
		var works = [  
		{
			src		: "/assets/img/site1-1.png",
			title	: "Site number 1",
			skill	: ["html", "css", "javascript"],
			link	: "http://google.com.ua"
		},
		{
			src		: "/assets/img/site1-2.png",
			title	: "Site number 2",
			skill	: ["html", "css", "javascript", "php"],
			link	: "http://google.com.ua"
		},
		{
			src		: "/assets/img/site1-3.png",
			title	: "Site number 3",
			skill	: ["html", "css"],
			link	: "http://google.com.ua"
		},
		{
			src		: "/assets/img/site1-4.png",
			title	: "Site number 4",
			skill	: ["html", "css"],
			link	: "http://google.com.ua"
		},
		{
			src		: "/assets/img/site1-5.png",
			title	: "Site number 5",
			skill	: ["html", "css"],
			link	: "http://google.com.ua"
		},
		{
			src		: "/assets/img/site1-6.png",
			title	: "Site number 6",
			skill	: ["html", "css"],
			link	: "http://google.com.ua"
		},
		{
			src		: "/assets/img/site1-7.png",
			title	: "Site number 7",
			skill	: ["html", "css"],
			link	: "http://google.com.ua"
		},
		{
			src		: "/assets/img/site1-8.png",
			title	: "Site number 8",
			skill	: ["php", "css", "html"],
			link	: "http://google.com.ua"
		}
];


/*save slider container*/
  var slider = $('.slider__container');
/*save preview window*/
  var	previews = slider.find('.slider__preview').find('.slider__list').find('.slider__item');
/*save decription window*/
  var descriptionContainer = slider.find('.slider__description'),
  		descriptionTitle = descriptionContainer.find('.description__title'),
  		descriptionSkillContainer = descriptionContainer.find('.description__skill'),
  		descriptionSkillItem = descriptionSkillContainer.find('.skill__item'),
  		decriptionLink = descriptionContainer.find('.description__btn').find('.slider__link');
/*save slider controls*/
  var controls = slider.find('.slider').find('.slider_btn-link');
/*Flag*/

/*Иннициализация функции*/
	return {
		init: function () {

/*save this object*/
			var _this = this;
			$(controls).on('click', function(event) {
				event.preventDefault();

					var thisButton = $(this), /*Сохраняем кнопку по которой нажали */
							slides = thisButton.find('.slider__item'), /*Находим все слайды в кнопке*/
							activeSlide = slides.filter('.slider__item_active'), /*Находим активный слайд*/
							// nextSlide = activeSlide.next(), /*Сохраняем следующий слайд*/
							// prevSlide = activeSlide.prev(), /*Сохраняем предыдущий слайд*/
							thisSlideIndex = slides.index(activeSlide), /*Сохраняем индекс активного слайда*/
							heightSlide = activeSlide.height();
					
					var otherButton = thisButton.parent().siblings().find('.slider_btn-link'), /*Сохраняем другую кнопку*/
							otherSlides = otherButton.find('.slider__item'), /*Сохраняем слайды другой кнопки*/
							otherActiveSlide = otherSlides.filter('.slider__item_active'), /*находим активный слайд*/
							// otherNextSlide = otherActiveSlide.next(), /*след. слайд*/
							// otherPrevSlide = otherActiveSlide.prev(), /*предыдущий слайд*/
							otherSlideIndex = otherSlides.index(otherActiveSlide); /*Сохраняем индекс активного слайда*/
					
					var activePreview = previews.filter('.slider__item_active'), /*Сохраняем активный слайд*/
							indexPreview = previews.index(activePreview); /*сохраняем индекс*/
		
					if (thisButton.hasClass('link__down')) { /*Задаем условие для кнопки вниз*/
						thisSlideIndex = thisSlideIndex >= slides.length-1 ? 0 : thisSlideIndex+1;
						otherSlideIndex = (otherSlideIndex >= otherSlides.length-1) ? 0 : otherSlideIndex+1;
						indexPreview = (indexPreview >= previews.length-1) ? 0 : indexPreview+1;

						// slides.css('top', '-100%');

					} else {
						thisSlideIndex--;
						otherSlideIndex--;
						indexPreview--;

						// otherSlides.css('top', '100%');

					}

					function noAnimate(){ /* Отключаем действие кнопок во время анимации*/
						thisButton.prop('disabled', true); 
						otherButton.prop('disabled', true);

						setTimeout(function(){
							thisButton.prop('disabled', false);
							otherButton.prop('disabled', false);
						}, 500);
					}

						

			function moveSlide() {
				var thisEqIndex = slides.eq(thisSlideIndex), 		/*Сохраняем индекс слайд текущей кнопки*/
					otherEqIndex = otherSlides.eq(otherSlideIndex); /*Сохраняем индекс слайд другой кнопки*/

				thisEqIndex.removeClass('up').addClass('slider__item_active down'); /*Передаем анимацию на слайд*/
				activeSlide.removeClass('slider__item_active up').addClass('down'); /*удаляем с предыдущего активного слайда анимацию и класс*/

				otherEqIndex.removeClass('down').addClass('slider__item_active up'); /*дублируем на соседнюю кнопку*/
				otherActiveSlide.removeClass('slider__item_active down').addClass('up'); 
				
					/*Анимация на JS*/
				// activeSlide.animate({top: 100 + '%'}, 500);
				// thisEqIndex.animate({top: 0}, 500, function (){
				// 	var $this = $(this);
				// 	slides.css('top', '-100%');
				// 	activeSlide.removeClass('slider__item_active').css('top', '-100%');
				// 	$this.addClass('slider__item_active').css('top', '0');
				// });

				// otherActiveSlide.animate({top: -100 + '%'}, 500);
				// otherEqIndex.animate({top: 0 + '%'}, 500, function (){
				// 	var $this = $(this);
				// 	otherSlides.css('top', '100%');
				// 	otherActiveSlide.removeClass('slider__item_active').css('top', '100%');
				// 	$this.addClass('slider__item_active').css('top', '0');
				// });

			}


			function preview(){ /* Анимация на превью*/
				var nextPreview = previews.eq(indexPreview);

				activePreview.animate({opacity: 0}, 300);  /*Скрываем предыдущий слайд*/
				nextPreview.animate({opacity: 1}, 300, function (){ /*отображаем новый слайд*/
					activePreview.removeClass('slider__item_active'); /*Удаляем старому активному классу активный класс*/
					nextPreview.addClass('slider__item_active'); /*добавляем активный класс след. слайду*/
				});
			}


			function descriptionSlide(){  /*Описание превью*/
				 var descriptionContainer = slider.find('.slider__description'), /*Находим контейнер с описанием слайда*/
  					 descriptionTitle = descriptionContainer.find('.description__title'), /*Находим заголовок слайда*/
  					 descriptionSkillContainer = descriptionContainer.find('.description__skill'), /*Находим контейнер со скилами*/
  					 descriptionSkillList = descriptionSkillContainer.find('.skill__list'),
  					 descriptionSkillItem = descriptionSkillList.find('.skill__item'),
  					 decriptionLink = descriptionContainer.find('.description__btn').find('.slider__link');

  				descriptionTitle.text(works[indexPreview].title); /* передаем с переменной Title активного слайда*/
  				decriptionLink.attr('href', works[indexPreview].link); /*передаем Link активного слайда*/
  				(function(){
  					var i;
  					for (i=0; i<works[indexPreview].skill.length; i++) {
  						console.log(works[indexPreview].skill[i]);
  						// descriptionSkillItem[i].text(works[indexPreview].skill[i]);
  					}
  				})();
			}
		

			moveSlide();
			preview();
			descriptionSlide();
			noAnimate();
		});

	}

	}
}());


$(document).ready(function() {
	if ($('.slider__container').length) {
		slider.init();
	}
});
