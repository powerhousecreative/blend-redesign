// Top Nav Resize on Scroll to Top
$(window).scroll(function() {
	if ($('header').offset().top > 200) {
		$('header').addClass('solid');
	} else {
		$('header').removeClass('solid');
	}
});

//Fade Intro Text On Scroll
$(window).scroll(function(){
	$(".fade").css("opacity", 1 - $(window).scrollTop() / 180);
});
$(window).scroll(function(){
	$(".fade-intro").css("opacity", 1 - $(window).scrollTop() / 400);
});

// Mobile Nav
$('.menu-open').click(function() {
	$(this).toggleClass('is-active');
	$('nav').toggleClass('is-open');
	$('body').toggleClass('nav-open');
});
$('nav').click(function() {
	$('body').removeClass('nav-open');
	$('.menu-open').removeClass('is-active');
	$('nav').removeClass('is-open');
});

// Remove Mobile Nav on Desktop Function
function dothis(){
	if($(window).width() >= 768){
		$('body').removeClass('nav-open');
		$('.menu-open').removeClass('is-active');
		$('nav').removeClass('is-open');
	}
};

// Remove Mobile Nav on Desktop on Load
$(document).ready(function(e) {
	dothis();
});

// Remove Mobile Nav on Desktop on Window Resize
$(window).resize(function(e) {
	dothis();
});

// Adds Active State To Nav Links
$(function() {
	if ((location.pathname.split("/")[1]) !== ""){
		$('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
	}
});

//Intro Arrow Link
$('#mouse-icon, .video-close').click(function() {
	setTimeout(function() {
		$('.video-js')[0].player.pause().currentTime(0);
		$('header').removeClass('transparent');
		$('#intro-content').removeClass('transparent');
		$('#intro-video-container').removeClass('is-active');
	}, 400);

	return $("html, body").animate({
		scrollTop: $('#home').offset().top - 80
	}, "500"), !1
});

//Intro Video Close/Reset
$('#play-reel').click(function() {
	$('header').addClass('transparent');
	$('#intro-content').addClass('transparent');

	setTimeout(function() {
		$('#intro-video-container').addClass('is-active');
		$('.video-js')[0].player.play().currentTime(0);
	}, 400);
});

//Intro Video Close/Pause on scroll
var position = $('#home').offset();

$(document).scroll(function () {

	var y = $(this).scrollTop();

	if (y >= position.top) {
		$('.video-js')[0].player.pause().currentTime(0);
		$('header').removeClass('transparent');
		$('#intro-content').removeClass('transparent');
		$('#intro-video-container').removeClass('is-active');
	}
});

// $(function() {
// 	setTimeout(function() {
// 		$('.fade-in').addClass('fade-in-show');
// 	}, 500);
// });

var $animation_elements = $('.fade-in');
var $window = $(window);

function check_if_in_view() {
	var window_height = $window.height();
	var window_top_position = $window.scrollTop();
	var window_bottom_position = (window_top_position + window_height);

	$.each($animation_elements, function() {
		var $element = $(this);
		var element_height = $element.outerHeight();
		var element_top_position = $element.offset().top;
		var element_bottom_position = (element_top_position + element_height);

	//check to see if this current container is within viewport
	if ((element_bottom_position >= window_top_position) &&
		(element_top_position <= window_bottom_position)) {
		$element.addClass('in-view');
		} else {
			// $element.removeClass('in-view');
		}
	});
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

// Case Study Filter
$('.case-studies').isotope({
	itemSelector: '.case-study',
	layoutMode: 'fitRows'
});

$(window).load(function(){
	var $container = $('.case-studies');
	$container.isotope({
		filter: '*',
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false
		}
	});

	$('.filters a').click(function(){
		$('.filters a').removeClass('is-active');
		$(this).addClass('is-active');
		$('.case-study').removeClass('featured');

		var selector = $(this).attr('data-filter');
		$container.isotope({
			filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		 });
		 return false;
	}); 
});





