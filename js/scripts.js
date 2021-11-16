(function ($) {
	jQuery(document).ready(function () {

		// Scroll to Top
		jQuery('.scrollto-top').click(function () {
			jQuery('html').animate({ 'scrollTop': '0px' }, 400);
			return false;
		});

		jQuery(window).scroll(function () {
			var upto = jQuery(window).scrollTop();
			if (upto > 500) {
				jQuery('.scrollto-top').fadeIn();
			} else {
				jQuery('.scrollto-top').fadeOut();
			}
		});

		//header-fixed
		jQuery(window).scroll(function () {
			var scroll = jQuery(window).scrollTop();
			if (scroll >= 15) {
				jQuery(".header-area").addClass("headerfixed");
				jQuery(".navbar-brand img").addClass("logo-width")
			} else {
				jQuery(".header-area").removeClass("headerfixed");
				jQuery(".navbar-brand img").removeClass("logo-width")
			}

		});

		//videp-modal script
		jQuery(".js-video-button").modalVideo({
			youtube: {
				controls: 0,
				nocookie: true
			}
		});













	});
})(jQuery);