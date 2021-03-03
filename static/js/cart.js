
         $('.owl-carousel1').owlCarousel({
    margin:6,
    loop:false,
    autoWidth:true,
    nav: false,
    dots: false,
    items:4
    })

    var owl1 = $('.owl-carousel1');
    owl1.owlCarousel();
    $('.tab-next1').click(function() {
        owl1.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.tab-prev1').click(function() {
        owl1.trigger('prev.owl.carousel', [600]);
    })


    $('.owl-carousel2').owlCarousel({
      margin:6,
      loop:false,
      autoWidth:true,
      dots: false,
      nav: false,
      items:4
      })
  
      var owl2 = $('.owl-carousel2');
      owl2.owlCarousel();
      $('.tab-next2').click(function() {
          owl2.trigger('next.owl.carousel');
      })
      // Go to the previous item
      $('.tab-prev2').click(function() {
          owl2.trigger('prev.owl.carousel', [600]);
      })


      $('.owl-carousel3').owlCarousel({
        margin:6,
        loop:false,
        autoWidth:true,
        nav: false,
        dots: false,
        items:4
        })
    
        var owl3 = $('.owl-carousel3');
        owl3.owlCarousel();
        $('.tab-next3').click(function() {
            owl3.trigger('next.owl.carousel');
        })
        // Go to the previous item
        $('.tab-prev3').click(function() {
            owl3.trigger('prev.owl.carousel', [600]);
        })
  





      $('#carouselGroup').owlCarousel({
        margin:2,
        loop:false,
        autoWidth:true,
        items:4,
        dots: false,
        nav: false,
    })

    $('#like').owlCarousel({
        margin:2,
        loop:false,
        autoWidth:true,
        items:4,
        dots: false,
        nav: false,
    })
    $('#like2').owlCarousel({
        margin:2,
        loop:false,
        autoWidth:true,
        items:4,
        dots: false,
        nav: false,
    })
    $('#like3').owlCarousel({
        margin:2,
        loop:false,
        autoWidth:true,
        items:4,
        dots: false,
        nav: false,
    })


  