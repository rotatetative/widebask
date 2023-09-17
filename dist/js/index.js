jQuery(function($){

    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 100
        }, 1000);
        return false;
    });

    $('.hero__slider').owlCarousel({
        loop:true,
        margin:10,
        items: 1
    });

    $('.proposal__slider').owlCarousel({
        stagePadding: 300,
        loop:true,
        margin:40,
        nav:true,
        responsive:{
            0:{
                items:2,
                margin:20,
            },
            900:{
                items:2,
                margin:20,
            },
            1180:{
                items:3
            }
        }
    })

    var owl = $('.proposal__slider');
    owl.owlCarousel();

    $('.proposals__slider__container .next-slide').click(function() {
        owl.trigger('next.owl.carousel', [1000]);
    })
    $('.proposals__slider__container .prev-slide').click(function() {
        owl.trigger('prev.owl.carousel', [1000]);
    })

});