$(document).ready(function(){

  var owl = $('.gallery__thumbs'),
  galleryItemIndex;
  owl.owlCarousel({
    center: true,
    items: 5,
    stagePadding: 50,
    autoHeight: true,
    loop: true,
  }).find('a').on('click', function(e){
    e.preventDefault();
    $(this).closest('.gallery').find('.gallery__main-img').attr('src', $(this).attr('href'));
    galleryItemIndex = $(this).closest('.owl-item').index();
    console.log(galleryItemIndex);
    owl.trigger('to.owl.carousel', galleryItemIndex);
  });

  $('.relax__tabs-item a').on('click', function(e){
    e.preventDefault();
    $(this)
      .closest('.relax')
      .find('.relax__tabs-item--active')
      .removeClass('relax__tabs-item--active');
    $(this)
      .closest('.relax__tabs-item')
      .addClass('relax__tabs-item--active');
    $(this)
      .closest('.relax')
      .find('.relax__content--active')
      .removeClass('relax__content--active')
      .hide();
    $( $(this.hash) ).fadeIn(300, function(){
      $(this).addClass('relax__content--active');
    });
  });

  $('#menu-trigger').on('click', function() {
		$('.main-nav__list').slideToggle();
	});

      // Relax - tabs - jquery
  $('.relax__tabs-item a').on('click', function(e){
    e.preventDefault();
    $(this)
      .closest('.relax')
      .find('.relax__tabs-item--active')
      .removeClass('relax__tabs-item--active');
    $(this)
      .closest('.relax__tabs-item')
      .addClass('relax__tabs-item--active');
    $(this)
      .closest('.relax')
      .find('.relax__content--active')
      .removeClass('relax__content--active')
      .hide();
    $( $(this.hash) ).fadeIn(400, function(){
      $(this).closest('.relax').addClass('relax__content--active');
    });
  });


    // Offers - tabs - jquery
  $('.offers__dots a').on('click', function(e){
    e.preventDefault();
    $(this)
      .closest('.offers')
      .find('.offers__dot--active')
      .removeClass('offers__dot--active');
     $(this)
      .closest('.offers__dot')
      .addClass('offers__dot--active');
    $(this)
      .closest('.offers')
      .find('.offers__slide--active')
      .removeClass('offers__slide--active')
      .hide();
    $( $(this.hash) ).fadeIn(300, function(){
      $(this).addClass('offers__slide--active');
    
    });
  });
 
});
