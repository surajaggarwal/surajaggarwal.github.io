jQuery(window).load(function(){
(function($) {
    var default_config = {
        fadeIn: 3000,
        stay: 3000,
        fadeOut: 3000
    };

    function fade(index, $elements, config) {
        $elements.eq(index)
          .fadeIn(config.fadeIn)
          .delay(config.stay)
          .fadeOut(config.fadeOut, function() {
              fade((index + 1) % $elements.length, $elements, config);
          });
    }

    $.fn.fadeLoop = function(config) {     
        fade(0, this, $.extend({}, default_config, config));
        return this;
    };

}(jQuery));

jQuery('#testimonial > ul').fadeLoop({fadeIn: 2000, stay: 4000, fadeOut: 100});

});