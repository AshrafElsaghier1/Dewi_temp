
$(window).ready(function () {
	$('#loader').delay(6000).fadeOut()

	var L = 3;
	$(window).scroll(function () {

		if( $(this).scrollTop() > 1){
			$('.header').css('borderBottom','0')
		}else{
			$('.header').css('borderBottom','1px solid #cccccc24')

		}

		if( $(this).scrollTop() > 150){
			$('.header').addClass('sticky');

		}else{
			$('.header').removeClass('sticky')

		}


		if( $(this).scrollTop() > 250){


			$('.footer .up-btn a').fadeIn()
		}
		else{

			$('.footer .up-btn a').fadeOut()
		}


		$('.section').each(function () {
			if ($(window).scrollTop() >  $(this).offset().top ){
				var sectionId = $(this).attr('id');
				$('nav li .nav-link-a[data-link = "'+sectionId+'" ]')
				.addClass('active')
				.parent().siblings().find('a').removeClass('active')
			}

		})
// about-feats count down
if( $(this).scrollTop() > ($('.feats-content').offset().top -500 ) && L == 3 ){
	L = 4
	$('.timer').countTo();
	return false;

}


})

	if( $(window).scrollTop() > 150){
		$('.header').addClass('sticky')
	}else {
		$('.header').removeClass('sticky')

	}
	if( $(window).scrollTop() > 250){


		$('.footer .up-btn a').fadeIn()
	}
	else{

		$('.footer .up-btn a').fadeOut()
	}

	$('.header .nav-link-a').on('click',function (e) {
		e.preventDefault()
		$('html,body').animate({

			scrollTop : $( '#' + $(this).data('link')).offset().top +1 
		},800)
	})
	
// buttons animation 
$('button').hover(function () {
	$(this).find('span').animate({
		width : '100%',
		right:0
	},500)


},function () {
	$(this).find('span').animate({
		width : '0',
		left : '0'

	},500)
})

	// Links hover animation //
	
	$('nav li').hover(function () {

		$(this).find('span').animate({
			width : '100%'
		},400)
		
	},function () {
		$(this).find('span').animate({
			width : '0'
		},400)
	})
	
	// adding class Active to links 
	$('nav li .nav-link-a').on("click",function () {
		$('nav li .nav-link-a').removeClass('active')
		$(this).addClass('active');
		$('nav li .nav-link-a').parent().find("span").removeClass('active')
		$(this).parent().find("span").addClass('active');

	})
// playing iframe video 
// closing video 

$(".home-video , .play-icon").on("click",function (e) {
	e.preventDefault()

	$('.video-content').children('iframe').attr('src' , 'https://www.youtube.com/embed/jDDaplaOz7Q');

	$('.video-content').fadeIn()

})
$('.video-content i').on('click',function (e) {
	$('.video-content').children('iframe').attr('src' , ' ');

	$('.video-content').fadeOut()

})
$('.video-content').on('click',function (e) {
	e.stopPropagation()
	$(this).hide()
	$('.video-content').children('iframe').attr('src' , ' ');

}) 

$(document).keydown(function (e) {
	if ( e.keyCode==27){
		$('.video-content').hide()
		$('.video-content').children('iframe').attr('src' , ' ');

	}
}) 

// making cards same height 
var cardHeight = 0;
$('.card').each(function () {

	cardHeight	= $(this).height();

	$('.card').height(cardHeight);

})

//add and remove class active from featurs linka 

$('.our-features .nav-link').on('click',function () {
	$(this).addClass('active').parentsUntil('col-3').siblings().find('a').removeClass('active');


	$($(this).data('feats')).fadeIn().siblings().fadeOut()

})

$('.owl-carousel').owlCarousel({
	autoplay:true,
	autoplayTimeout:3000,
	rewind:true,
	loop:true,

	responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
		1000:{
			items:1
		}
	}
});
// isotope liberary 

$('.portfolio-works .menu li a').on('click',function (e) {
	var selected = $(this).data('selected');
	e.preventDefault()
	$('.portfolio-works .menu li a').removeClass('active')
	$(this).addClass('active')

	$('.portfolio-content .row').isotope({
		filter : selected

	})
	return false

})
$('.portfolio-content .row').isotope({
	layoutMode: 'masonry'


})


var placeholderItrr = '';
$('[placeholder]').focus(function () {

	placeholderItrr= $(this).attr('placeholder')


	$(this).attr('placeholder','')


})
$('[placeholder]').blur(function () {

	$(this).attr('placeholder',placeholderItrr)


});

$('.footer .up-btn a').on('click',function () {

	$('body,html').animate({

		scrollTop : 0
	},1000)

})




AOS.init({ 
	once: true,
	
});

})









