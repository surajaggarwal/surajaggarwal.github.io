(function($) {
  "use strict";
	$('#portfoliolist').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'images/port-loader.gif',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<br />' + item.el.attr('data-desc');
			}
		}
	});
})(jQuery);