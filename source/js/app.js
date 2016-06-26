$(document).ready(function() {
	$('.dial').knob({
		'width': 100,
		'height': 100,
		'displayInput': false,
		// 'displayPrevious': true,
		'fgColor': '#77a266',
		'readOnly': true
	});


	// $(function () {
	// 	var imgs = [];

	// 	$.each($('*'), function() {

	// 		var $this = $(this),
	// 			background = $this.css('background'),
	// 			img = $this.is('img');

	// 		if (background != 'none') {

	// 			var path = background.replace('url("', '').replace('")', '');

	// 			imgs.push(path);
	// 		}

	// 		if (img) {
				
	// 			var path = $this.attr('src');
				
	// 			if (path) {	
	// 				imgs.push(path);
	// 			}
	// 		}
	// 	});

	// 	console.log(imgs);

	// 	var percents = 1;


	// 	for (var i = 0; i<imgs.length; i++) {

	// 		var image = $('<img>', {
	// 			attr: {
	// 				src : imgs[i]
	// 			}
	// 		});

	// 		image.load(function() {
	// 			setPercents(imgs.length, percents);
	// 			percents++;
	// 		});

	// 	}

	// 	function setPercents(total, current) {

	// 		if (percent >= 1) {
	// 			$('.head__wrapper').css('display', 'block');
	// 		}

	// 		var percent = Math.ceil(current / total * 100);

	// 		$('.preload').css({'stroke-dasharray' : percent + '%'})
	// 		$('.preload__svg text').text(percent + '%')

	// 	}

	// });

/*SLIDER  IN WORK */

	// (function slider () {
		var counter = 1;

		$('.slider_btn-link').on('click', function(e){
			e.preventDefault();

			var $this = $(this),
				container = $this.parents('.slider__container'),
				items = container.find('.slider__item'),
				activeItem = container.find('.slider__item_active');
			
			if (counter >= items.length) {
				counter = 0;
			}

			var reqItem = items.eq(counter);

			activeItem.animate({
				'top' : '100%'
			}, 700);

			reqItem.animate({
				'top' : '0%'
			}, 700, function () {
				activeItem.removeClass('slider__item_active').css('top', '-100%');
				$(this).addClass('slider__item_active')
			});

			counter++;

		});
	// });


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

});