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

				console.log(link);
				console.log(location);

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
				stickyStart = sidebar.offset().top
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

// 	(function slider () {
// 		var counter = 1;
// 		var btnDown = $('.link__down');
// 		var btnUp = $('.link__up');
// 		var btnContent = $('.slider__list');
// 		var cloneContent = btnContent.clone();
		
// 		btnUp.append(cloneContent);

// 		// $('.slider_btn-link').on('click', function(event) {
// 		// 	event.preventDefault();
// 		// 	alert('gd');
// 		// 	var $this_btn = $(this),
// 		// 			container = $this.children('.slider__list'),
// 		// 			items = container.find('.slider__item'),
// 		// 			activeItem = container.find('.slider__item_active');

// 		// 	var next_btn = $this_btn.parents(.slider__btn).siblings().find('.slider_btn-link'),
// 		// 			next_container = next_btn.children('.slider__list'),
// 		// 			next_items = next_container.find('.slider__item'),
// 		// 			next_activeItem = next_container.find('.slider__item_active');

// 		// 	var preview = $('.display__container'),
// 		// 			previewItem = preview.find('slider__display-pic'),
// 		// 			path = previewItem.attr('src');

			
			
// 		// 	if ($this_btn.hasClass('link__down')) {

// 		// 	}

// 		// });
// 	(function previewSlider(){

// 		$('.slider_btn-link').on('click', function(event) {
// 			event.preventDefault();
// 			var $this = $(this),
// 					previewItem = $this.parents('.slider__container').find('.slider__display-pic'),
// 					$link = $this.find('.slider__item_active').find('.slider__preview-img').attr('src');
// 			console.log($link);

// 			previewItem.fadeOut(300, function () {
// 				previewItem.attr('src', $link).fadeIn();
// 			});

// 		});

// 	}());





// 		$('.link__down').on('click', function(e){
// 			e.preventDefault();

// 			var $this = $(this),
// 				container = $this.children('.slider__list'),
// 				items = container.find('.slider__item'),
// 				activeItem = container.find('.slider__item_active');
			
// 			if (counter >= items.length) {
// 				counter = 0;
// 			}

// 			var reqItem = items.eq(counter);

// 			activeItem.animate({
// 				'top' : '100%'
// 			}, 700);

// 			reqItem.animate({
// 				'top' : '0%'
// 			}, 700, function () {
// 				activeItem.removeClass('slider__item_active').css('top', '-100%');
// 				$(this).addClass('slider__item_active')
// 			});

// 			counter++;

// 		});

// 		$('.link__up').on('click', function(e){
// 			e.preventDefault();

// 			var $this = $(this),
// 				container = $this.children('.slider__list'),
// 				items = container.find('.slider__item'),
// 				activeItem = container.find('.slider__item_active');
			
// 			if (counter >= items.length) {
// 				counter = 2;
// 			}

// 			var reqItem = items.eq(counter);

// 			activeItem.animate({
// 				'bottom' : '100%'
// 			}, 700);

// 			reqItem.animate({
// 				'bottom' : '0%'
// 			}, 700, function () {
// 				activeItem.removeClass('slider__item_active').css('bottom', '-100%');
// 				$(this).addClass('slider__item_active')
// 			});

// 			counter--;

// 		});

// 	})();











});





var slider = (function () {
	
// privat
	return {
		init: function (){

			var _this = this;

			$('.slider_btn-link').on('click', function(event) {
				event.preventDefault();
				
				var 
						$this = $(this),
						slides = $this.closest('.slider__container'),find('.slider__item'),
						activeSlide = slides.filter('.slider__item_active'),
						nextSlide = activeSlide.next(),
						prevSlide = activeSlide.prev(),
						firstSlide = slides.first(),
						lastSlide = slides.last();

				if ($('.link__down')) {

					_this.moveSlide(nextSlide, 'forward')
				}

			});

		},

		moveSlide: function(slide, directiom){

			var 
					container = slide.closest('.slider'),
					sliders = container.find('.slider__item'),
					active = sliders.filter('.slider__item_active'),
					slideHeight = sliders.heigth(),
					duration = 500,
					reqCssPosition = 0,
					reqSlideStrafe = 0;

			if (direction === 'forward') {
					reqCssPosition = slideHeight;
					reqSlideStrafe = -slideHeight;

			} else if (direction === 'backward') {
				reqCssPosition = -slideHeight;
				reqSlideStrafe = slideHeight;
			}

			slide.css('left', reqCssPosition).addClass('inslide');


		}
	}







}());

$(document).ready(function() {
	if ($('.slider__container').length) {
		slider.init();
	}
});