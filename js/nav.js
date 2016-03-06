/********************************* Main Nav Animation Toggle **********************************/

(function($) {
  "use strict";
	var lati = 48.8567;
	var long = 2.3508;
	$("#mnu1").click(function() {
		$("#about").removeClass('dis-non');
		$("#portfolio1").addClass('dis-non');
		$("#contact").addClass('dis-non');
		$("#blog").addClass('dis-non');
		$("#menu1").show();
		$("#menu2").hide();
		$("#menu3").hide();
		$("#menu4").hide();
		$("#mnu1").addClass('nav_active');
		$("#mnu2").removeClass('nav_active');
		$("#mnu3").removeClass('nav_active');
		$("#mnu4").removeClass('nav_active');
	});
	$("#mnu2").click(function() {
		$("#about").addClass('dis-non');
		$("#portfolio1").removeClass('dis-non');
		$("#contact").addClass('dis-non');
		$("#blog").addClass('dis-non');
		$("#menu1").hide();
		$("#menu2").show();
		$("#menu3").hide();
		$("#menu4").hide();
		$("#mnu1").removeClass('nav_active');
		$("#mnu2").addClass('nav_active');
		$("#mnu3").removeClass('nav_active');
		$("#mnu4").removeClass('nav_active');
	});
	$("#mnu3").click(function() {
		$("#about").addClass('dis-non');
		$("#portfolio1").addClass('dis-non');
		$("#contact").removeClass('dis-non');
		$("#blog").addClass('dis-non');
		$("#menu1").hide();
		$("#menu2").hide();
		$("#menu3").show();
		$("#menu4").hide();
		$("#mnu1").removeClass('nav_active');
		$("#mnu2").removeClass('nav_active');
		$("#mnu3").addClass('nav_active');
		$("#mnu4").removeClass('nav_active');
		
		var map = new GMaps({
		  el: "#map",
		  lat: lati,
		  lng: long,
		  zoom: 8, 
		  zoomControl : true,
		  zoomControlOpt: {
			style : "SMALL",
			position: "TOP_LEFT"
		  },
		  panControl : true,
		  streetViewControl : false,
		  mapTypeControl: false,
		  overviewMapControl: false
		});
		
		var styles = [
			{
			  stylers: [
				{ hue: "#00ffe6" },
				{ saturation: -100 }
			  ]
			}, {
				featureType: "road",
				elementType: "geometry",
				stylers: [
					{ lightness: 100 },
					{ visibility: "simplified" }
			  ]
			}, {
				featureType: "road",
				elementType: "labels",
				stylers: [
					{ visibility: "off" }
			  ]
			}
		];
		
		map.addStyle({
			styledMapName:"Styled Map",
			styles: styles,
			mapTypeId: "map_style"  
		});
		
		map.setStyle("map_style");
		
		map.addMarker({
			lat: lati,
			lng: long,
			icon: 'images/marker_black.png',
			title: 'Marker with InfoWindow',
			infoWindow: {
			  content: '<p>HTML Content</p>'
			}
		});
	});
	$("#mnu4").click(function() {
		$("#about").addClass('dis-non');
		$("#portfolio1").addClass('dis-non');
		$("#contact").addClass('dis-non');
		$("#blog").removeClass('dis-non');
		$("#menu1").hide();
		$("#menu2").hide();
		$("#menu3").hide();
		$("#menu4").show();
		$("#mnu1").removeClass('nav_active');
		$("#mnu2").removeClass('nav_active');
		$("#mnu3").removeClass('nav_active');
		$("#mnu4").addClass('nav_active');
	});
	$("#menu-drop").mouseenter(function() {
		$("#mnu5").addClass('drop-active');
	});
	$("#menu-drop").mouseleave(function() {
		$("#mnu5").removeClass('drop-active');
	});
	$("#menu li.menu-child").click(function() {
		document.getElementById("show-menu").checked = false;
	});
	var menuhash=window.location.hash;
	if(menuhash=='#about') {
		$("#about").removeClass('dis-non');
		$("#portfolio1").addClass('dis-non');
		$("#contact").addClass('dis-non');
		$("#blog").addClass('dis-non');
		
		$("#menu1").show();
		$("#menu2").hide();
		$("#menu3").hide();
		$("#menu4").hide();
		
		$("#mnu1").addClass('nav_active');
		$("#mnu2").removeClass('nav_active');
		$("#mnu3").removeClass('nav_active');
		$("#mnu4").removeClass('nav_active');
	}
	if(menuhash=='#portfolio') {
		$("#about").addClass('dis-non');
		$("#portfolio1").removeClass('dis-non');
		$("#contact").addClass('dis-non');
		$("#blog").addClass('dis-non');
		
		$("#menu1").hide();
		$("#menu2").show();
		$("#menu3").hide();
		$("#menu4").hide();
		
		$("#mnu1").removeClass('nav_active');
		$("#mnu2").addClass('nav_active');
		$("#mnu3").removeClass('nav_active');
		$("#mnu4").removeClass('nav_active');
	}
	if(menuhash=='#contact') {
		$("#about").addClass('dis-non');
		$("#portfolio1").addClass('dis-non');
		$("#contact").removeClass('dis-non');
		$("#blog").addClass('dis-non');
		
		$("#menu1").hide();
		$("#menu2").hide();
		$("#menu3").show();
		$("#menu4").hide();
		
		$("#mnu1").removeClass('nav_active');
		$("#mnu2").removeClass('nav_active');
		$("#mnu3").addClass('nav_active');
		$("#mnu4").removeClass('nav_active');
		jQuery(window).load(function() {
			var map = new GMaps({
			  el: "#map",
			  lat: lati,
			  lng: long,
			  zoom: 8, 
			  zoomControl : true,
			  zoomControlOpt: {
				style : "SMALL",
				position: "TOP_LEFT"
			  },
			  panControl : true,
			  streetViewControl : false,
			  mapTypeControl: false,
			  overviewMapControl: false
			});
			
			var styles = [
				{
				  stylers: [
					{ hue: "#00ffe6" },
					{ saturation: -100 }
				  ]
				}, {
					featureType: "road",
					elementType: "geometry",
					stylers: [
						{ lightness: 100 },
						{ visibility: "simplified" }
				  ]
				}, {
					featureType: "road",
					elementType: "labels",
					stylers: [
						{ visibility: "off" }
				  ]
				}
			];
			
			map.addStyle({
				styledMapName:"Styled Map",
				styles: styles,
				mapTypeId: "map_style"  
			});
			
			map.setStyle("map_style");
			
			map.addMarker({
				lat: lati,
				lng: long,
				icon: 'images/marker_black.png',
				title: 'Marker with InfoWindow',
				infoWindow: {
				  content: '<p>HTML Content</p>'
				}
			});
		});
	}
	if(menuhash=='#blog') {
		$("#about").addClass('dis-non');
		$("#portfolio1").addClass('dis-non');
		$("#contact").addClass('dis-non');
		$("#blog").removeClass('dis-non');
		
		$("#menu1").hide();
		$("#menu2").hide();
		$("#menu3").hide();
		$("#menu4").show();
		
		$("#mnu1").removeClass('nav_active');
		$("#mnu2").removeClass('nav_active');
		$("#mnu3").removeClass('nav_active');
		$("#mnu4").addClass('nav_active');
	}
})(jQuery);