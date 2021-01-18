$('.owl-carousel').owlCarousel({      
    margin:20,
    loop:true,
    autoWidth:true,
    items:6,
    dots: false,
    
})
var owl = $('.owl-carousel');
 owl.owlCarousel();
$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [200]);
})