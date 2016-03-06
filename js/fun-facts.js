(function($) {
  "use strict";
	$("div#demo5").jContent({orientation: 'vertical', 
							 easing: "easeOutCirc", 
							 duration: 500,
							 auto: true,
							 pause_on_hover: true,
							 direction: 'next',
							 pause: 1500});
							  
	$("div#demo6").jContent({orientation: 'vertical', 
							 easing: "easeOutCirc", 
							 duration: 500,
							 auto: true,
							 pause_on_hover: true,
							 direction: 'prev',
							 pause: 1500});
							 
})(jQuery);