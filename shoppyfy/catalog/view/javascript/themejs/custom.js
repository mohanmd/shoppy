function gridResize() {
	if($('#grid-view').hasClass('active')) {
		// What a shame bootstrap does not take into account dynamically loaded columns
		cols = $('#column-right, #column-left').length;
//alert('ready');
		if (cols == 2) {
			$('#content .product-layout').attr('class', 'product-layout product-grid col-lg-4 col-md-6 col-sm-12 col-xs-12');
			$('#content .product-layout:nth-child(4n+1)').addClass('first-item');
			$('#content .product-layout:nth-child(4n+4)').addClass('last-item');
		} else if (cols == 1) {
			$('#content .product-layout').attr('class', 'product-layout product-grid col-lg-4 col-md-4 col-sm-3 col-xs-12');
			$('#content .product-layout:nth-child(4n+1)').addClass('first-item');
			$('#content .product-layout:nth-child(4n+4)').addClass('last-item');
			if (document.documentElement.clientWidth < 1500 && document.documentElement.clientWidth > 979) {
				$('#content .product-layout').attr('class', 'product-layout product-grid col-lg-4 col-md-4 col-sm-3 col-xs-12');
				$('#content .product-layout:nth-child(3n+1)').addClass('first-item');
				$('#content .product-layout:nth-child(3n+3)').addClass('last-item');
			}
			if (document.documentElement.clientWidth < 980 && document.documentElement.clientWidth > 767) {
				$('#content .product-layout').attr('class', 'product-layout product-grid col-lg-4 col-md-4 col-sm-4 col-xs-6');
				$('#content .product-layout:nth-child(3n+1)').addClass('first-item');
				$('#content .product-layout:nth-child(3n+3)').addClass('last-item');
			}
		if (document.documentElement.clientWidth < 768) {
				$('#content .product-layout').attr('class', 'product-layout product-grid col-lg-4 col-md-4 col-sm-4 col-xs-6');
				$('#content .product-layout:nth-child(3n+1)').addClass('first-item');
				$('#content .product-layout:nth-child(3n+3)').addClass('last-item');
			}
			if (document.documentElement.clientWidth < 479) {
				$('#content .product-layout').attr('class', 'product-layout product-grid col-lg-4 col-md-6 col-sm-12 col-xs-12 last-item');
				$('#content .product-layout').attr('class', 'product-layout product-grid col-lg-4 col-md-6 col-sm-12 col-xs-12 last-item');
			}
		} else {
			$('#content .product-layout').attr('class', 'product-layout product-grid col-lg-3 col-md-3 col-sm-6 col-xs-12');
			$('#content .product-layout:nth-child(3n+1)').addClass('first-item');
			$('#content .product-layout:nth-child(3n+3)').addClass('last-item');
		}
		}
}
$(document).ready(function () {
	gridResize();
});
$(window).resize(function () {
	gridResize();
});


var widthClassOptions = [];
var widthClassOptions = ({
	bestseller: 'bestseller_default_width',
	featured: 'featured_default_width',
	special: 'special_default_width',
	latest: 'latest_default_width',
	related: 'related_default_width',
	additional: 'additional_default_width',
	module: 'module_default_width',
	tabbestseller: 'tabbestseller_default_width',
	tabfeatured: 'tabfeatured_default_width',
	tabspecial: 'tabspecial_default_width',
	tablatest: 'tablatest_default_width',
	testimonial: 'testimonial_default_width'
});


$(document).ready(function () {
	$('#content select').customSelect();
	$('ul.breadcrumb').appendTo('#breadcrumb .container');
	$('.aboutus h1, .affiliate-success h1').prependTo('#breadcrumb .container');



	/*$('#content select').customSelect();
		$('ul.breadcrumb').prependTo('.row #content');*/


		/* Js for Parallax */
		var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
		if (!isMobile) {
			if ($(".parallax").length) {
				$(".parallax").sitManParallax({
					invert: false
				});
			};
		} else {
			$(".parallax").sitManParallax({
				invert: true
			});
		}



      if ($(document).width() > 979) {
		  $('.common-home .main-slider.mainslider0').appendTo('.common-home .banner-top');
		  
		  }

		if ($(document).width() <= 979) {
			$('.header-content .dropdown.search').appendTo('.header-bottom');
           
		}


	$("#cart > .dropdown-toggle").click(function () {

		$(this).toggleClass("active");
		$(".cart-menu").slideToggle("slow");
		$(".myaccount-menu").slideUp(500);
		$(".menu_toggle").slideUp("slow");
		return false;
	});


	$(".myaccount > .dropdown-toggle").click(function () {

		$(".myaccount-menu").slideToggle("slow");
		$(this).toggleClass("active");
		$(".cart-menu").slideUp("slow");
		$(".menu_toggle").slideUp("slow");
		$("#wish-list .wish-list-details").slideUp("slow");
		return false;
	});

	

	$(".header-search.dropdown-toggle").click(function(){
			$(this).toggleClass('active');
			$("#search").fadeToggle(300);
			$("#searchText").focus();
			$(".cart-menu").slideUp("slow");
			$(".myaccount-menu").slideUp("slow");
			$(".menu_toggle").slideUp("slow");
			$(".language-menu").slideUp("slow");
		    $(".currency-menu").slideUp("slow");
        	return false;
    });
	
 
	$(".filterbox .list-group-items a").click(function () {
		$(this).toggleClass('collapsed').next('.list-group-item').slideToggle();
	});

	$('.write-review, .review-count').on('click', function () {
		$('html, body').animate({
			scrollTop: $('#tabs_info').offset().top
		}, 'slow');
	});

 
	
	if ($(window).width() > 979) {
		$("#pxzoom1,#pxzoom2,#pxzoom3").elevateZoom({

			gallery: 'additional-carousel',
			//inner zoom                 

			//zoomType : "inner", 
			//cursor: "crosshair" 

			//tint

			//tint:true, 
			//tintColour:'#F90', 
			//tintOpacity:0.5

			//lens zoom

			zoomType: "lens",
			lensShape: "round",
			lensSize: 200,


			//Mousewheel zoom

			//scrollZoom : true


		});
		var z_index = 0;

		$(document).on('click', '.thumbnail', function () {
			$('.thumbnails').magnificPopup('open', z_index);
			return false;
		});

		$('.additional-carousel a').click(function () {
			var smallImage = $(this).attr('data-image');
			var largeImage = $(this).attr('data-zoom-image');
			var ez = $('#tmzoom').data('elevateZoom');
			$('.thumbnail').attr('href', largeImage);
			ez.swaptheimage(smallImage, largeImage);
			z_index = $(this).index('.additional-carousel a');
			return false;
		});

	} else {
		$(document).on('click', '.thumbnail', function () {
			$('.thumbnails').magnificPopup('open', 0);
			return false;
		});
	}
	$(document).ready(function () {
		$('.thumbnails').magnificPopup({
			delegate: 'a.elevatezoom-gallery',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-with-zoom',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function (item) {
					return item.el.attr('title');
				}
			}
		});
	});

});

/* JS FOR FILTER */


function mobileToggleMenu(){
	//alert($(window).width());
	if ($(window).width() < 980)
	{
		$("#footer .mobile_togglemenu").remove();
		$("#footer .column h5").append( "<a class='mobile_togglemenu'>&nbsp;</a>" );
		$("#footer .column h5").addClass('toggle');
		$("#footer .mobile_togglemenu").click(function(){
			$(this).parent().toggleClass('active').parent().find('ul').toggle('slow');
		});

	}else{
		$("#footer .column h5").parent().find('ul').removeAttr('style');
		$("#footer .column h5").removeClass('active');
		$("#footer .column h5").removeClass('toggle');
		$("#footer .mobile_togglemenu").remove();
	}	
	
}
$(document).ready(function(){mobileToggleMenu();});
$(window).resize(function(){mobileToggleMenu();});

 

function servicemobileToggleMenu(){
	//alert($(window).width());
	if ($(window).width() < 980)
	{
		$("#pst_serviceblock .mobile_togglemenu").remove();
		$("#pst_serviceblock h5").append( "<a class='mobile_togglemenu'>&nbsp;</a>" );
		$("#pst_serviceblock h5").addClass('toggle');
		$("#pst_serviceblock .mobile_togglemenu").click(function(){
			$(this).parent().toggleClass('active').parent().find('ul').toggle('slow');
		});

	}else{
		$("#pst_serviceblock h5").parent().find('ul').removeAttr('style');
		$("#pst_serviceblock h5").removeClass('active');
		$("#pst_serviceblock h5").removeClass('toggle');
		$("#pst_serviceblock .mobile_togglemenu").remove();
	}	
}
$(document).ready(function(){servicemobileToggleMenu();});
$(window).resize(function(){servicemobileToggleMenu();});

 

function menuResponsive() {
	//alert($(window).width());
	if ($(window).width() < 980) {
		$('.nav.navbar-nav').css('display', 'none');
		$("#menu").addClass('responsive-menu');
		$("#menu").removeClass('main-menu');
		$('.nav-responsive').css('display', 'block');
		$("#menu .mobile_togglemenu").remove();
		$("#menu ul li.dropdown").append("<a class='mobile_togglemenu'> </a>");
		$("#menu ul li.dropdown").addClass('toggle');

		$("#menu .nav > li.dropdown .mobile_togglemenu").click(function () {
			$(this).parent().toggleClass('active');
			$(this).siblings("li .dropdown-menu").slideToggle('slow');
		});

	} else {
		$("#menu").addClass('main-menu');
		$("#menu").removeClass('responsive-menu');
		$("#menu ul li.dropdown").parent().find('li .dropdown-menu').removeAttr('style');
		$("#menu ul li.dropdown").removeClass('active');
		$("#menu ul li.dropdown").removeClass('toggle');
		$("#menu .mobile_togglemenu").remove();
		$('.nav-responsive').css('display', 'none');
		$('.nav.navbar-nav').css('display', 'block');
	}
}
$(document).ready(function () {
	menuResponsive();
});
$(window).resize(function () {
	menuResponsive();
});


$(document).ready(function () {
	$(".dropdown-toggle").click(function () {
		$("ul.dropdown-toggle").toggle('slow');
	});
});



function LangCurDropDown(selector, subsel) {
	var main_block = new HoverWatcher(selector);
	var sub_ul = new HoverWatcher(subsel);
	$(selector).click(function () {
		$(selector).addClass('active');
		$(subsel).slideToggle('slow');
		setTimeout(function () {
			if (!main_block.isHoveringOver() && !sub_ul.isHoveringOver())
				$(subsel).stop(true, true).slideUp(480);
			$(selector).removeClass('active');
		}, 3000);
	});

	$(subsel).hover(function () {
		setTimeout(function () {
			if (!main_block.isHoveringOver() && !sub_ul.isHoveringOver())
				$(subsel).stop(true, true).slideUp(480);
		}, 3000);
	});
}


$(document).ready(function () {

	/* 	LangCurDropDown('.myaccount','.myaccount-menu'); */
	/* LangCurDropDown('#currency','.currency-menu');
	LangCurDropDown('#language','.language-menu'); */
	LangCurDropDown('#cart', '.cart-menu');

});


function leftright() {
	if ($(window).width() < 980) {
		if ($('.category_filter .col-md-3, .category_filter .col-md-2, .category_filter .col-md-1').hasClass('text-right') == true) {
			$(".category_filter .col-md-3, .category_filter .col-md-2, .category_filter .col-md-1").addClass('text-left');
			$(".category_filter .col-md-3, .category_filter .col-md-2, .category_filter .col-md-1").removeClass('text-right');
		}
	}
}

$(document).ready(function () {
	leftright();
});
$(window).resize(function () {
	leftright();
});




//main more menu 

$(document).ready(function(){
jQuery(function($){

var max_elem = 5;
   if ($(window).width() <= 1599) {
            max_elem = 4;
    }
	if ($(window).width() <= 1299) {
            max_elem = 3;
        }
if($(window).width() <=979){ max_elem = 15;}

$('#menu .navbar-nav li').first().addClass('home_first');
var items = $('#menu .navbar-nav  li.top_level');
var surplus = items.slice(max_elem, items.length);
surplus.wrapAll('<li class="top_level hiden-menu dropdown"><div class="dropdown-menu megamenu"><div class="dropdown-inner">');
$('.hiden-menu').prepend('<a href="#" class="level-top">More</a>');

});

});





//LEFT-RIGHT COLUMN RESPONSIVE TOOGLE

function mobileToggleColumn() {
	if ($(window).width() < 980) {
		$('#column-left,#column-right').insertAfter('#content');
		$("#column-left .title-wrapper .mobile_togglemenu,#column-right .title-wrapper .mobile_togglemenu").remove();
		$("#column-left .title-wrapper,#column-right .title-wrapper").append("<a class='mobile_togglemenu'> </a>");
		$("#column-left .title-wrapper,#column-right .title-wrapper").addClass('toggle');
		$("#column-left .title-wrapper .mobile_togglemenu,#column-right .box-heading .mobile_togglemenu").click(function () {
			$(this).parent().toggleClass('active').parent().find('.box-content,.sidebarFilter,.list-group').slideToggle('slow');
		});
	} else {
		$('#column-left').insertBefore('#content');
		$('#column-right').insertAfter('#content');
		$('.common-home #column-left,.common-home #column-right').insertBefore('#content-top');
		$("#column-left .title-wrapper,#column-right .title-wrapper").parent().find('.box-content,.sidebarFilter,.list-group').removeAttr('style');
		$("#column-left .title-wrapper,#column-right .title-wrapper").removeClass('active');
		$("#column-left .title-wrapper,#column-right .title-wrapper").removeClass('toggle');
		$("#column-left .title-wrapper .mobile_togglemenu,#column-right .title-wrapper .mobile_togglemenu").remove();
	}
}
$(document).ready(function () {
	mobileToggleColumn();
});
$(window).resize(function () {
	mobileToggleColumn();
});


function productCarouselAutoSet() {
	$("#content .product-carousel, .banners-slider-carousel .product-carousel,#content1 .product-carousel").each(function () {
		var objectID = $(this).attr('id');
		var myObject = objectID.replace('-carousel', '');
		if (myObject.indexOf("-") >= 0)
			myObject = myObject.substring(0, myObject.indexOf("-"));
		if (widthClassOptions[myObject])
			var myDefClass = widthClassOptions[myObject];
		else
			var myDefClass = 'grid_default_width';
		var slider = $("#content #" + objectID + ",   .banners-slider-carousel #" + objectID + ", #content1 #" + objectID);
	
		slider.sliderCarousel({
			defWidthClss: myDefClass,
			subElement: '.slider-item',
			subClass: 'product-block',
			firstClass: 'first_item_tm',
			lastClass: 'last_item_tm',
			slideSpeed: 1000,
			paginationSpeed: 800,
			autoPlay: false,
			stopOnHover: false,
			goToFirst: true,
			goToFirstSpeed: 1000,
			goToFirstNav: true,
			pagination: true,
			paginationNumbers: false,
			responsive: true,
			responsiveRefreshRate: 200,
			baseClass: "slider-carousel",
			theme: "slider-theme",
			autoHeight: true
		});

		var nextButton = $(this).parent().find('.next');
		var prevButton = $(this).parent().find('.prev');
		nextButton.click(function () {
			slider.trigger('slider.next');
		})
		prevButton.click(function () {
			slider.trigger('slider.prev');
		})
	});
}
//$(window).load(function(){productCarouselAutoSet();});
$(document).ready(function () {
	productCarouselAutoSet();
});


function productListAutoSet() {
	$("#content .productbox-grid").each(function () {
		var objectID = $(this).attr('id');
		if (objectID.length > 0) {
			if (widthClassOptions[objectID.replace('-grid', '')])
				var myDefClass = widthClassOptions[objectID.replace('-grid', '')];
		} else {
			var myDefClass = 'grid_default_width';
		}
		$(this).smartColumnsRows({
			defWidthClss: myDefClass,
			subElement: '.product-items',
			subClass: 'product-block'
		});
	});
}
$(window).load(function () {
	productListAutoSet();
});
$(window).resize(function () {
	productListAutoSet();
});


function HoverWatcher(selector) {
	this.hovering = false;
	var self = this;

	this.isHoveringOver = function () {
		return self.hovering;
	}

	$(selector).hover(function () {
		self.hovering = true;
	}, function () {
		self.hovering = false;
	})
}


$(document).ready(function () {

	LangCurDropDown('#currency', '.currency_div');
	LangCurDropDown('#language', '.language_div');

	$('.nav-responsive').click(function () {
		$('.responsive-menu .nav.navbar-nav').slideToggle();
		$('.nav-responsive div').toggleClass('active');

	});

	$(".treeview-list").treeview({
		animated: "slow",
		collapsed: true,
		unique: true
	});
	$('.treeview-list a.active').parent().removeClass('expandable');
	$('.treeview-list a.active').parent().addClass('collapsable');
	$('.treeview-list .collapsable ul').css('display', 'block');
});


$(document).ready(function () {
	$(".tm_headerlinks_inner").click(function () {
		$(".header_links").toggle('slow');
	});

});

/*For Grid and List View Buttons*/
function gridlistactive() {
	$('.btn-list-grid button').on('click', function () {
		if ($(this).hasClass('grid')) {
			$('.btn-list-grid button').addClass('active');
			$('.btn-list-grid button.list').removeClass('active');
		} else if ($(this).hasClass('list')) {
			$('.btn-list-grid button').addClass('active');
			$('.btn-list-grid button.grid').removeClass('active');
		}
	});
}
$(document).ready(function () {
	gridlistactive()
});
$(window).resize(function () {
	gridlistactive()
});


/*For Back to Top button*/
$(document).ready(function () {
	$("body").append("<a class='top_button' title='Back To Top' href=''>TOP</a>");

	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 70) {
				$('.top_button').fadeIn();
			} else {
				$('.top_button').fadeOut();
			}

		});
		// scroll body to 0px on click
		$('.top_button').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
});




/* For Blog Image */ 
function blogCrop(){
if ($(window).width() > 979) {
$('.extension-theme_blog-home .image').each(function() {	   
var that = $(this);
var url = that.find('img').attr('src');
that.css({'background-image':'url("' + url + '")'});
});
}
}
jQuery(document).ready(function() {blogCrop();});
jQuery(window).resize(function() {blogCrop();});


function blogSlider(){
 var psblog = jQuery("#blog-carousel");
    psblog.owlCarousel({
        items: 1, 
        itemsDesktop: [1299, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [544, 1],
        itemsMobile: [319, 1],
		transitionStyle : "fadeUp",
        pagination: false,
		navigation: true,
		  
		afterAction: function(el){
		//remove class active
		this
		.$owlItems
		.removeClass('active')

		//add class active
		this
		.$owlItems //owl internal $ object containing items
		.eq(this.currentItem + 0)
		.addClass('active') 
		}
		
    });
}
jQuery(document).ready(function() {blogSlider();});
jQuery(window).resize(function() {blogSlider();});

<!-- height dependency js--> 


function heightDependency() {
 
var divHeight = jQuery('.blog-left').height(); 

jQuery('.blog-desc').css('height', divHeight+'px');

   
}
jQuery(window).on("load", function() {
	heightDependency();
});
jQuery(window).resize(function() {
    "use strict";
    heightDependency()	
});

<!-- height dependency js--> 



/*testimonial js */

function testimonialSlider() {
	var psttestimonial = jQuery("#psttestimonial-carousel");
	psttestimonial.owlCarousel({
		items: 1, //10 items above 1000px browser width
		itemsDesktop: [1299, 1],
		itemsDesktopSmall: [979, 1],
		itemsTablet: [767,1],
		itemsMobile: [479, 1],
		smartSpeed: 2000,
		autoPlay: false,
		pagination: false,
		navigation: true,
		slideSpeed: 1500,
		rewindSpeed: 1000
	});
}
jQuery(document).ready(function () {
	testimonialSlider();
});
jQuery(window).resize(function () {
	testimonialSlider();
});


 


// ---------------- Fixed header responsive ----------------------

function responsivecolumn() {

		$(window).bind('scroll', function () {
			if ($(window).scrollTop() > 0) {
				$('.header-content').addClass('fixed');
			} else {
				$('.header-content').removeClass('fixed');
			}
		});

}
$(document).ready(function () {
	responsivecolumn();
});
$(window).resize(function () {
	responsivecolumn();
});  


/*function leftslider(){    
 
 if ($(window).width() >=980)  {
 $('#column-left .product-carousel,#column-right .product-carousel').not('.slick-initialized').slick({
    dots: false,
	arrows: true,
	infinite: false,
    slidesPerRow: 1,
    rows: 3,
  
});
 }
 
if ($(window).width() < 980)  {
  var lrcolumn = jQuery("#column-left .product-carousel,#column-right .product-carousel");
	lrcolumn.owlCarousel({
						 slideBy: 2,
	});

 }
}

jQuery(window).load(function() {
		leftslider()
	});
	jQuery(window).resize(function() {
		leftslider()
	});
*/


// Loading image before flex slider load
$(window).load(function() {
    $(".loadingdiv").removeClass("spinner");
});

// Flex slider load
$(window).load(function() {
    if ($('.flexslider').length > 0) {
        $('.flexslider').flexslider({
            slideshowSpeed: $('.flexslider').data('interval'),
            pauseOnHover: $('.flexslider').data('pause'),
            animation: "fade"
        });
    }
	
	 if ($(document).width() >= 768) {
	
		$('.main-slider').flexslider({
			directionNav: false,
			controlNav: false
		})
		
		$('.button-prev').on('click', function(){
			$('.main-slider').flexslider('prev')
			return false;
		})
		
		$('.button-next').on('click', function(){
			$('.main-slider').flexslider('next')
			return false;
		})
	
	 }
			
});
	



