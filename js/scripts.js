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

		//counter-up script
		jQuery('#count-box').CountUpCircle({
			duration: 3000,
			opacity_anim: true,
			step_divider: 2
		});

		jQuery('#count-box2').CountUpCircle({
			duration: 2000,
			opacity_anim: true,
			step_divider: 2
		});

		jQuery('#count-box3').CountUpCircle({
			duration: 2000,
			opacity_anim: true,
			step_divider: 2
		});

		jQuery('#count-box4').CountUpCircle({
			duration: 2000,
			opacity_anim: true,
			step_divider: 2
		});

		//owlCarousel
		jQuery("#owl-csel1").owlCarousel({
			items: 1,
			autoplay: false,
			autoplayTimeout: 3000,
			startPosition: 0,
			rtl: false,
			loop: true,
			margin: 15,
			dots: true,
			nav: true,
			navText: [
				'<img src="images/left.png" alt="">',
				'<img src="images/right.png" alt="">',
			],
			navContainer: '.main-content .custom-nav',
			responsive: {
				0: {
					items: 1,
				},
				767: {
					items: 1,
				},
				1200: {
					items: 1,
				}
			}

		});

		//tab
		jQuery('.tabs .tab-links a').on('click', function (e) {
			var currentAttrValue = jQuery(this).attr('href');
			// Show/Hide Tabs
			// Show/Hide Tabs
			jQuery('.tabs ' + currentAttrValue).siblings().hide();
			jQuery('.tabs ' + currentAttrValue).delay(400).show();
			// Change/remove current tab to active
			jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
			e.preventDefault();
		});








	});
})(jQuery);