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

    // scroll menu
    var sections = $('.section'),
        nav = $('.navbar-fixed-top,footer'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function() {
        var cur_pos = $(this).scrollTop();

        sections.each(function() {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function() {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 2
        }, 600);

        return false;
    });


    // Menu opacity
    if ($(window).scrollTop() > 80) {
        $(".navbar-fixed-top").addClass("bg-nav");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
    }
    $(window).scroll(function() {
        if ($(window).scrollTop() > 80) {
            $(".navbar-fixed-top").addClass("bg-nav");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
        }
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

    
    $('.portfolio_filter1 a').click(function() {
        $('.portfolio_filter1 .active').removeClass('active');
        $(this).addClass('active');

        return false;
    });

    //  isotope
    $('#projects').waitForImages(function() {
        var $container = $('.portfolio_container');
        $container.isotope({
            filter: '*',
        });

        $('.portfolio_filter a').click(function() {
            var selector = $(this).attr('data-filter');
            console.log(selector); 
            if (selector == '.all') {
                $('html, body').animate({
                    scrollTop: $('#allprojects').offset().top - nav_height + 2
                }, 600);
                return false;
            }

            $('.portfolio_filter .active').removeClass('active');
            $(this).addClass('active');

            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    animationEngine: "jquery"
                }
            });
            return false;
        });
        

    });

    //animatedModal
    $("#demo01,#demo02,#demo03,#demo04,#demo05,#demo06,#demo07,#demo08,#demo09").animatedModal();

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