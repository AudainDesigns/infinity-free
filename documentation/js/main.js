/*------------------------------------------------------ 
  WEBSITE LOADER            
-------------------------------------------------------*/

jQuery(window).load(function() {
        // will first fade out the loading animation
	jQuery(".status").delay(3000).fadeOut("slow");
        // will fade out the whole DIV that covers the website.
	jQuery(".preloader").delay(4000).fadeOut("slow");
	jQuery(".preloaded-content").delay(4000).fadeOut("slow");
});

/*------------------------------------------------------ 
  Smooth Scroll    
-------------------------------------------------------*/

$('.smooth').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
});

jQuery(document).ready(function($) {
 
/*------------------------------------------------------
	Initialize WOW Animations
-------------------------------------------------------*/

	new WOW().init();
	
});