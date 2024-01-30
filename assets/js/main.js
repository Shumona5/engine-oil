(function ($) {
	"use strict";

	/*------------------------------------
		Preloader
	--------------------------------------*/
	$(window).on("load", function () {
		$("#preloader").delay(350).fadeOut("slow");
		$("body").delay(350).css({ overflow: "visible" });
	});

	/*------------------------------------
		Mobile Menu
	--------------------------------------*/

	$("#mobile-menu-active").metisMenu();

	$("#mobile-menu-active .has-dropdown > a").on("click", function (e) {
		e.preventDefault();
	});

	$(".hamburger-menu > a").on("click", function (e) {
		e.preventDefault();
		$(".slide-bar").toggleClass("show");
		$("body").addClass("on-side");
		$(".body-overlay").addClass("active");
		$(this).addClass("active");
	});

	$(".close-mobile-menu > a").on("click", function (e) {
		e.preventDefault();
		$(".slide-bar").removeClass("show");
		$("body").removeClass("on-side");
		$(".body-overlay").removeClass("active");
		$(".hamburger-menu > a").removeClass("active");
	});

	$(".body-overlay").on("click", function () {
		$(this).removeClass("active");
		$(".slide-bar").removeClass("show");
		$("body").removeClass("on-side");
		$(".hamburger-menu > a").removeClass("active");
	});

	/* Search
	-------------------------------------------------------*/
	var $searchWrap = $(".search-wrap");
	var $navSearch = $(".nav-search");
	var $searchClose = $("#search-close");

	$(".search-trigger").on("click", function (e) {
		e.preventDefault();
		$searchWrap.animate({ opacity: "toggle" }, 500);
		$navSearch.add($searchClose).addClass("open");
	});

	$(".search-close").on("click", function (e) {
		e.preventDefault();
		$searchWrap.animate({ opacity: "toggle" }, 500);
		$navSearch.add($searchClose).removeClass("open");
	});

	function closeSearch() {
		$searchWrap.fadeOut(200);
		$navSearch.add($searchClose).removeClass("open");
	}

	$(document.body).on("click", function (e) {
		closeSearch();
	});

	$(".search-trigger, .main-search-input").on("click", function (e) {
		e.stopPropagation();
	});

	//extra_btn
	$(".extra_btn").click(function () {
		$(".extra_info").addClass("info-open");
	});
	$(".close_icon").click(function () {
		$(".extra_info").removeClass("info-open");
	});

	//sticky-menu
	$(window).on("scroll", function () {
		var scroll = $(window).scrollTop();
		if (scroll < 200) {
			$(".main-header-area").removeClass("sticky");
		} else {
			$(".main-header-area").addClass("sticky");
		}
	});

	// -------------------------- scroll animate
	var links = $("a.scroll-target");
	links.on("click", function () {
		if (
			location.pathname.replace(/^\//, "") ==
				this.pathname.replace(/^\//, "") ||
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
			if (target.length) {
				$("html,body").animate(
					{
						scrollTop: target.offset().top - 75
					},
					1000
				);
				return false;
			}
		}
	});

	// mainSlider
	function mainSlider() {
		var BasicSlider = $(".slider-active");
		var team = $(".slick_team");
		BasicSlider.on("init", function (e, slick) {
			var $firstAnimatingElements = $(".single-slider:first-child").find(
				"[data-animation]"
			);
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on(
			"beforeChange",
			function (e, slick, currentSlide, nextSlide) {
				var $animatingElements = $(
					'.single-slider[data-slick-index="' + nextSlide + '"]'
				).find("[data-animation]");
				doAnimations($animatingElements);
			}
		);
		BasicSlider.slick({
			autoplay: true,
			autoplaySpeed: 5000,
			dots: false,
			fade: true,
			speed: 1000,
			arrows: true,
			cssEase: "linear",
			prevArrow:
				'<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
			nextArrow:
				'<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
			responsive: [
				{ breakpoint: 1250, settings: { dots: false, arrows: false } },
				{ breakpoint: 850, settings: { dots: false, arrows: false } }
			]
		});

		team.slick({
			infinite: false,
			arrows: true,
			autoplay: true,
			autoplaySpeed: 3000,
			slidesToShow: 3,
			slidesToScroll: 1,
			cssEase: "linear",
			prevArrow:
				'<span type="button" class="team-slider-prev slick-prev"><i class="fa fa-chevron-left"></i></span>',
			nextArrow:
				'<span type="button" class="team-slider-next slick-next"><i class="fa fa-chevron-right"></i></span>',
			responsive: [
				{
					breakpoint: 960,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});

		function doAnimations(elements) {
			var animationEndEvents =
				"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data("delay");
				var $animationType = "animated " + $this.data("animation");
				$this.css({
					"animation-delay": $animationDelay,
					"-webkit-animation-delay": $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	mainSlider();

	//project-slider
	$(".testimonial-active").slick({
		infinite: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 2,
		slidesToScroll: 2,
		prevArrow:
			'<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
		nextArrow:
			'<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
		responsive: [
			{
				breakpoint: 960,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	//project-slider
	$(".testimonial-active-02").slick({
		infinite: false,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow:
			'<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
		nextArrow:
			'<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					arrows: false
				}
			}
		]
	});
	//project-slider
	$(".testimonial-active-04").slick({
		infinite: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow:
			'<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
		nextArrow:
			'<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
		responsive: [
			{
				breakpoint: 1050,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 760,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	//project-slider
	$(".testimonial-active-05").slick({
		infinite: true,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow:
			'<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
		nextArrow:
			'<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
		responsive: [
			{
				breakpoint: 1800,
				settings: {
					arrows: false
				}
			},
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 4,
					arrows: false
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					arrows: false
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					arrows: false
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					arrows: false
				}
			}
		]
	});
	//project-slider
	$(".testtimonial-item-active").slick({
		infinite: true,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow:
			'<button type="button" class="slick-prev"><i class="far fa-chevron-left"></i></button>',
		nextArrow:
			'<button type="button" class="slick-next"><i class="far fa-chevron-right"></i></button>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					arrows: false
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 1,
					arrows: false
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					arrows: false
				}
			}
		]
	});

	//tbrand-active
	$(".brand-active").slick({
		infinite: true,
		arrows: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1250,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	// owlCarousel
	$(".owlcarousel").owlCarousel({
		loop: true,
		margin: 0,
		items: 2,
		navText: [
			'<i class="fa fa-angle-left"></i>',
			'<i class="fa fa-angle-right"></i>'
		],
		nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			767: {
				items: 2
			},
			992: {
				items: 2
			}
		}
	});

	// //parallax
	// var scene = document.getElementsById('scene');
	// var parallaxInstance = new Parallax(scene, {
	//   relativeInput: true
	// });

	/* magnificPopup img view */
	$(".popup-image").magnificPopup({
		type: "image",
		gallery: {
			enabled: true
		}
	});

	/* magnificPopup video view */
	$(".popup-video").magnificPopup({
		type: "iframe"
	});

	// active-class
	$(".features").on("mouseenter", function () {
		$(this)
			.addClass("active")
			.parent()
			.siblings()
			.find(".features")
			.removeClass("active");
	});

	// isotop
	$(".grid").imagesLoaded(function () {
		// init Isotope
		var $grid = $(".grid").isotope({
			itemSelector: ".grid-item",
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: 1,
				gutter: 0
			}
		});
		// filter items on button click
		$(".portfolio-menu").on("click", "button", function () {
			var filterValue = $(this).attr("data-filter");
			$grid.isotope({ filter: filterValue });
		});
	});

	//for menu active class
	$(".portfolio-menu button").on("click", function (event) {
		$(this).siblings(".active").removeClass("active");
		$(this).addClass("active");
		event.preventDefault();
	});

	// scrollToTop
	$.scrollUp({
		scrollName: "scrollUp", // Element ID
		topDistance: "300", // Distance from top before showing element (px)
		topSpeed: 500, // Speed back to top (ms)
		animation: "fade", // Fade, slide, none
		animationInSpeed: 300, // Animation in speed (ms)
		animationOutSpeed: 300, // Animation out speed (ms)
		scrollText: '<i class="fa fa-chevron-up"></i>', // Text for element
		activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});
	// wow animation - start
	// --------------------------------------------------
	function wowAnimation() {
		new WOW({
			offset: 100,
			mobile: true
		}).init();
	}
	wowAnimation();

	var contactForm = function () {
		if ($("#contactForm").length > 0) {
			$("#contactForm").validate({
				rules: {
					name: "required",
					subject: "required",
					email: {
						required: true,
						email: true
					},
					message: {
						required: true,
						minlength: 5
					}
				},
				messages: {
					name: "Please enter your name",
					subject: "Please enter your subject",
					email: "Please enter a valid email address",
					message: "Please enter a message"
				},
				/* submit via ajax */

				submitHandler: function (form) {
					var $submit = $(".submitting"),
						waitText = "Submitting...";

					$.ajax({
						type: "POST",
						url: "php/sendEmail.php",
						data: $(form).serialize(),

						beforeSend: function () {
							$submit.css("display", "block").text(waitText);
						},
						success: function (msg) {
							if (msg == "OK") {
								$("#form-message-warning").hide();
								setTimeout(function () {
									$("#contactForm").fadeIn();
								}, 1000);
								setTimeout(function () {
									$("#form-message-success").fadeIn();
								}, 1400);

								setTimeout(function () {
									$("#form-message-success").fadeOut();
								}, 8000);

								setTimeout(function () {
									$submit.css("display", "none").text(waitText);
								}, 1400);

								setTimeout(function () {
									$("#contactForm").each(function () {
										this.reset();
									});
								}, 1400);
							} else {
								$("#form-message-warning").html(msg);
								$("#form-message-warning").fadeIn();
								$submit.css("display", "none");
							}
						},
						error: function () {
							$("#form-message-warning").html(
								"Something went wrong. Please try again."
							);
							$("#form-message-warning").fadeIn();
							$submit.css("display", "none");
						}
					});
				} // end submitHandler
			});
		}
	};
	contactForm();

	$(document).on("scroll", function () {
		if ($(document).scrollTop() > 20) {
			$(".menu-heading").addClass("nav-color");
		} else {
			$(".menu-heading").removeClass("nav-color");
		}
	});
})(jQuery);
