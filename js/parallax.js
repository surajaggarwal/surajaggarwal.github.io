jQuery(document).ready(function(){
	jQuery(window).bind('scroll',function(e){
		parallaxScroll();
	});
	function parallaxScroll(){
		var scrolledY = $(window).scrollTop();
		jQuery('.bgWrapper').css('background-position','center -'+((scrolledY*0.3))+'px');
	}
});