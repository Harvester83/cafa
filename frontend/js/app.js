import $ from 'jquery';
import 'bootstrap';
import 'owl.carousel';
import 'jquery-validation';
import 'magnific-popup';
import 'intl-tel-input';
import 'summernote';

$(document).ready(function () {

    const $slider = $('.slider');
    $slider.owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 3000,
        autoHeight: false,
        items: 1,
        dots: false,
        nav: false,
        dotsContainer: '.owl-dots'
        //onInitialized: callback
    });


    // function callback(e) {
    //     let items = e.item.count;
    //     let elements = '';
    //
    //     for (let i = 1; i <= items; i++) {
    //         elements += `<span class="test_dot"><span class="m-auto">${i}</span></span>`
    //     }
    //
    //     const test = document.querySelector('.test');
    //     test.innerHTML = elements;
    // }

    const blockSlider = $('.block-slider');
    blockSlider.owlCarousel({
        items: 1,
        center: false,
        loop: true,
        autoplayHoverPause: true,
        autoplay: false,
        smartSpeed: 1000,
        autoplayTimeout: 3000,
        autoWidth: false,
        nav: false,
        dots: false,
        navText: [
            '<svg class="arrow-icon"><use xlink:href="sprite/symbol/sprite.svg#arrow"></use></svg>',
            '<svg class="arrow-icon arrow-icon_rotate_180"><use xlink:href="sprite/symbol/sprite.svg#arrow"></use></svg>',
        ],
        responsive: {
            0: {
                items: 1,
                margin: 0,
                loop: false,
            },

            576: {
                items: 2,
                margin: 10,
            },

            992: {
                items: 3,
                margin: 10,
            },

            1200: {
                items: 3,
                margin: 10,
            },

            1250: {
                items: 3,
                margin: 30,
            }
        }
    });

    $('.customNextBtn').click(function () {
        blockSlider.trigger('next.owl.carousel');
    });

    $('.customPrevBtn').click(function () {
        blockSlider.trigger('prev.owl.carousel');
    });

    $('#login-form').validate({
        rules: {
            loginPassword: {
                required: true
            },
            loginName: {
                required: true
            },
        },
        messages: {
            loginPassword: {
                required: "This field is required."
            },
            loginName: {
                required: "This field is required."
            },
        }
    });

    $('#contact-form').validate({
        rules: {
            password: {
                required: true
            },
            login: {
                required: true
            },
        },
        messages: {
            password: {
                required: "This field is required."
            },
            login: {
                required: "This field is required."
            },
        }
    });

    $('#register-form').validate({
        rules: {
            registerPassword: "required",
            registerConfirmPassword: {
                equalTo: "#registerPassword"
            }
        }
    });

    $('.media-photo-magnific').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.media-video-magnific').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        gallery: {enabled: true},
    });


    $('#nav-icon').click(function () {
        $(this).toggleClass('open');
    });


    $('.block_js').on('click', '.block', function () {
        $(this).toggleClass('block_off');
    });


    $('.list-title-wrap').on('click', function () {
        $('.list_slider').slideToggle();
    });

    $(".js-anchor-link").on('click', function (event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {
            window.location.hash = hash;
        });
    });

    $('.nav-li').on('click', function () {
        $(this).find('.nav__menu-lists').slideToggle();
    });

    $(window).scroll(function () {
        var $height = $(window).scrollTop();
        if ($height > 150) {
            $('.arrow-up__index, .arrow-up__index-icon').addClass('d-block_up-arrow');
        } else {
            $('.arrow-up__index, .arrow-up__index-icon').removeClass('d-block_up-arrow');
        }
    });

    $('.summernote').summernote({
        height: 250,
        placeholder: 'Your question...',
        toolbar: [
            ['font', ['fontname', 'fontsize',]],
             ['style', ['bold', 'italic', 'underline',]],
             ['list', ['ul', 'ol', 'paragraph']],
             ['insert', ['picture', 'video']],
        ]
    });
});
