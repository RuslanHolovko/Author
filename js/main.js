  //SCROLL-HEADER
  var header = new Headhesive('.header');
  var options = {
    offset: 200
  }

  //$(".nav-link").click(function(){
    //$(this).toggleClass('click-nav-link');
  //});


  //ADAPTIVE-MENU
     $(".mobile-inner-header-icon").click(function(){
      $(this).toggleClass("mobile-inner-header-icon-click mobile-inner-header-icon-out");
      $(".mobile-inner-nav").slideToggle(250);

    });


     $(".mobile-inner-nav a").each(function( index ) {
      $( this ).css({'animation-delay': (index/10)+'s'});
    });


     $(window).resize(function(){
      if ($(window).width()>992){
        $('.mobile-inner-nav').removeAttr('style');
      }
    });

 //SLICK-SLIDER

 $('.sl-slick').slick({
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  fade: false,
  cssEase: 'linear'
});

 //HOVER_EFFECTS

 $(".buy-basic").hover(function(){
  $(this).toggleClass("backg");
  $(".basic").toggleClass("backg");
});

 $(".buy-pro").hover(function(){
  $(this).toggleClass("backg");
  $(".pro").toggleClass("backg");
});

 $(".buy-premium").hover(function(){
  $(this).toggleClass("backg");
  $(".premium").toggleClass("backg");
});
