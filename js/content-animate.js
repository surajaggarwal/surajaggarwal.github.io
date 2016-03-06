  function about(x) {
    jQuery('#about').addClass('fadeInRight animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      
    });
	
	jQuery('#portfolio1').removeClass('fadeInRight animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      
    });
	
	jQuery('#contact').removeClass('fadeInRight animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      
    });
	
	jQuery('#blog').removeClass('fadeInRight animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    
    });
	
	jQuery('#shk-img').addClass('bounceInDown animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    
    });
	
	jQuery('#titl-anim').addClass('fadeInLeft animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    
    });
	
	setTimeout(function(){
      jQuery('#shk-img').removeClass('bounceInDown animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      
    });
	  jQuery('#titl-anim').removeClass('fadeInLeft animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      
    });
	}, 1000);
		
  };
  
  function portfolio(x) {
    jQuery('#about').removeClass('fadeInRight animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      
    });
	
	jQuery('#portfolio1').addClass('fadeInRight animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      
    });
	
	jQuery('#contact').removeClass('fadeInRight animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      
    });
	
	jQuery('#blog').removeClass('fadeInRight animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      
    });
	
	jQuery('#shk-img').addClass('bounceInDown animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    
    });
	
	jQuery('#titl-anim').addClass('fadeInLeft animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    
    });
	
	setTimeout(function(){
      jQuery('#shk-img').removeClass('bounceInDown animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      
    });
	  jQuery('#titl-anim').removeClass('fadeInLeft animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      
    });
	  jQuery('#portfolio1').removeClass('fadeInRight animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      
    });
	}, 1000);
		
  };
  
  function contact(x) {
    jQuery('#about').removeClass('fadeInRight animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      
    });
	
	jQuery('#portfolio1').removeClass('fadeInRight animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      
    });
	
	jQuery('#contact').addClass('fadeInRight animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      
    });
	
	jQuery('#blog').removeClass('fadeInRight animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      
    });
	
	jQuery('#shk-img').addClass('bounceInDown animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    
    });
	
	jQuery('#titl-anim').addClass('fadeInLeft animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    
    });
	
	setTimeout(function(){
      jQuery('#shk-img').removeClass('bounceInDown animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      
    });
	  jQuery('#titl-anim').removeClass('fadeInLeft animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      
    });
	}, 1000);
	
  };
  
  function blog(x) {
    jQuery('#about').removeClass('fadeInRight animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      
    });
	
	jQuery('#portfolio1').removeClass('fadeInRight animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      
    });
	
	jQuery('#contact').removeClass('fadeInRight animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      
    });
	
	jQuery('#blog').addClass('fadeInRight animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      
    });
	
	jQuery('#shk-img').addClass('bounceInDown animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    
    });
	
	jQuery('#titl-anim').addClass('fadeInLeft animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    
    });
	
	setTimeout(function(){
      jQuery('#shk-img').removeClass('bounceInDown animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      
    });
	  jQuery('#titl-anim').removeClass('fadeInLeft animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      
    });
	}, 1000);
		
  };
  
  function resume(x) {
	jQuery('#resume-popup-box').addClass(' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      
    });
		
  };

  jQuery(document).ready(function(){
    jQuery('#mnu1').click(function(){
      var anim = jQuery('.js--animations').val();
      about(anim);
    });
	
	jQuery('#mnu2').click(function(){
      var anim = jQuery('.js--animations').val();
      portfolio(anim);
    });
	
	jQuery('#mnu3').click(function(){
      var anim = jQuery('.js--animations').val();
      contact(anim);
    });
	
	jQuery('#mnu4').click(function(){
      var anim = jQuery('.js--animations').val();
      blog(anim);
    });
	
	jQuery('#resume-popup').click(function(){
      var anim = jQuery('.js--animations').val();
      resume(anim);
    });

    jQuery('.js--animations').change(function(){
      var anim = jQuery(this).val();
      about(anim);
	  portfolio(anim);
	  contact(anim);
	  blog(anim);
	  resume(anim);
    });
  });