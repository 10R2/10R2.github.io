
// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 80) {
        $(".navbar-fixed-top").removeClass("top-nav-expanded");
    } else {
        $(".navbar-fixed-top").addClass("top-nav-expanded");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 2000, 'easeOutExpo');
        event.preventDefault();
    });
});

// niceScroll
$(function() {
    var options = {
        zindex: 999,
        cursorwidth: 7,
        cursorborder: "",
        cursorborderradius: "3px",
        cursorcolor: "#000",
        cursoropacitymax: .50,
        cursoropacitymin: .25
    };
    $("html").niceScroll(options);
	function initNice() {
		if ($(window).innerWidth() < 768) {
			$('html').niceScroll().remove();
		} else {
			$("html").niceScroll(options);
		}
	}
	$(window).load(initNice);
	$(window).resize(initNice);
});

// stellar
$(function() {
    if ($(window).innerWidth() < 768)
        return;
    $(window).stellar({
        responsive:true,
        scrollProperty: 'scroll',
        parallaxElements: false,
        horizontalScrolling: false,
        horizontalOffset: 0,
        verticalOffset: 0
    });
});

// magnificPopup
$(function() {
    $('.popup').magnificPopup({ 
        type: 'image',
        mainClass: 'magnific-zoom',
        fixedContentPos: false,
        closeOnContentClick: true,
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out', 
            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
});
