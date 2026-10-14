// JavaScript Document

$(window).load(function() {
    "use strict";
    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})

$(document).ready(function() {
    "use strict";

    // Original rabbit navigation: section highlighting, smooth scrolling, and header background.
    var navigation = $('header.navbar-fixed-top');
    var sectionLinks = navigation.find('a[href^="#"]');
    var navigationHeight = navigation.outerHeight() || 0;
    function updateNavigation() {
        var position = $(window).scrollTop();
        navigation.toggleClass('bg-nav', position > 80);
        var navHeight = navigationHeight;
        var activeSection = null;
        $('.section').each(function() {
            var top = $(this).offset().top - navHeight;
            if (position >= top && position < top + $(this).outerHeight()) activeSection = this.id;
        });
        sectionLinks.removeClass('active');
        if (activeSection) sectionLinks.filter('[href="#' + activeSection + '"]').addClass('active');
    }
    $(window).on('scroll', updateNavigation);
    $(window).on('resize', function() {
        navigationHeight = navigation.outerHeight() || 0;
        updateNavigation();
    });
    updateNavigation();
    sectionLinks.on('click', function(event) {
        var target = document.getElementById(this.hash.slice(1));
        if (!target) return;
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top - navigationHeight + 2
        }, 600);
    });

    // Parallax
    var parallax = function() {
        $(window).stellar();
    };

    $(function() {
        parallax();
    });

    // AOS
    AOS.init({
        duration: 1200,
        once: true,
        disable: 'mobile'
    });

    
    //  isotope
    $('#projects').waitForImages(function() {
        var $container = $('.portfolio_container');
        $container.isotope({
            filter: '*',
        });


    });

    //animatedModal
    var projectDialogs = $("#demo01,#demo02,#demo03,#demo04,#demo05,#demo06,#demo07,#demo08,#demo09");
    // This legacy plugin reads href during initialization. The visible controls
    // are buttons, and the compatibility attribute is removed immediately.
    projectDialogs.attr('href', '#animatedModal');
    projectDialogs.animatedModal();
    projectDialogs.removeAttr('href');

    // Contact Form 	

    // validate contact form
    $(function() {
        $('#contact-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true
                },
                phone: {
                    required: false
                },
                message: {
                    required: true
                }

            },
            messages: {
                name: {
                    required: "This field is required",
                    minlength: "your name must consist of at least 2 characters"
                },
                email: {
                    required: "This field is required"
                },
                message: {
                    required: "This field is required"
                }
            },
            submitHandler: async function(form) {
                let request = JSON.stringify({
                    'content': $(form).serialize(),
                });
                let serve = await fetch("https://pointing-system.1442334619.workers.dev/sendmail", {
                        method: 'POST',
                        body: request
                    })
                    //console.log(serve);
                if (serve.ok) {
                    //console.log(await serve.json());
                    $('#contact :input').attr('disabled', 'disabled');
                    $('#contact').fadeTo("slow", 1, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor', 'default');
                        $('#success').fadeIn();
                    });
                } else {
                    alert(await serve.json());
                    $('#contact').fadeTo("slow", 1, function() {
                        $('#error').fadeIn();
                    });
                }
            }
        });

    });
});
