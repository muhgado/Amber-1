//AOS Lobrary
AOS.init({
	offset: 100,
	duration: 1500
});
// loader
window.addEventListener('load', function () {
	const preloader = document.querySelector('.preloader');
	preloader.classList.add('endpreloader');
});
//navbarOnScroll
$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 20 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});
//smoothscroll
var scroll = new SmoothScroll('a[href*="#"]');
// video speed
var frame = document.getElementById("myframe");
var fdoc = frame.contentDocument;
fdoc.getElementsByTagName("video")[0].playbackRate = 3;