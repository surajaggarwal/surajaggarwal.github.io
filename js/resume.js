(function($) {
  "use strict";
	function launch() {
		 $('#resume-popup-box').lightbox_me({centered: true, onLoad: function() { $('#resume-popup-box').find('input:first').focus()}});
	}
	$('#resume-popup').click(function(e) {
		$("#resume-popup-box").lightbox_me({centered: true, preventScroll: true, onLoad: function() {
			$("#resume-popup-box").find("input:first").focus();
		}});
		
		e.preventDefault();
	});
	$('table tr:nth-child(even)').addClass('stripe');
})(jQuery);
(function($) {
	$('#description').perfectScrollbar({
	  wheelSpeed: 20,
	  wheelPropagation: false
	});
})(jQuery);