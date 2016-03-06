/********************************* Blog Details Nav Display **********************************/

jQuery(window).load(function() {
	jQuery("#about").addClass('dis-non');
	jQuery("#portfolio1").addClass('dis-non');
	jQuery("#contact").addClass('dis-non');
	jQuery("#blog").removeClass('dis-non');
	jQuery("#menu1").hide();
	jQuery("#menu2").hide();
	jQuery("#menu3").hide();
	jQuery("#menu4").show();
	jQuery("#mnu1").removeClass('nav_active');
	jQuery("#mnu2").removeClass('nav_active');
	jQuery("#mnu3").removeClass('nav_active');
	jQuery("#mnu4").addClass('nav_active');
});