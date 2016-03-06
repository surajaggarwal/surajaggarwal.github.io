jQuery(window).load(function() {
	jQuery("#loader").fadeOut("slow");
	jQuery("#container").addClass('bounceInDown animated-wrapper');
	jQuery("#shk-img").addClass('bounceInDown animated-photo');
	jQuery("#tweet-box").addClass('flipInX animated');
	setTimeout(function(){
		jQuery("#container").removeClass('bounceInDown animated-wrapper');
		jQuery("#shk-img").removeClass('bounceInDown animated-photo');
		jQuery("#titl-anim").removeClass('fadeInLeft animated');
	}, 3000);
});