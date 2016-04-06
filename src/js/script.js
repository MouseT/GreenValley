$(document).ready(function(){

    // Gallery slick
   $('.gallery__list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.gallery__thumb-list',    
    cssEase: 'ease-in-out',
    speed: 400,
    accessibility: false
  });
  $('.gallery__thumb-list').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.gallery__list',
    dots: false,
    cssEase: 'ease-in-out',
    speed: 400,
    centerMode: true,
    accessibility: false,
    arrows: false,
    centerPadding: '100px',
    focusOnSelect: true
  });

      // Review slick
  // if ($(window).width() > 1200) {
  //   $('.multiple-items').slick({
  //       infinite: true,
  //       slidesToShow: 2,
  //       slidesToScroll: 2
  //   });
  // }


$('.responsive').slick({
  dots: false,
  infinite: true,
  arrows: true,
  speed: 400,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1       
      }
    }
  ]
});


  // Single-room slick

  $('.single-item').slick({
    arrows: true,      
  });

  // $('.slick-prev').addClass('arrow-left');
  // $('.slick-next').addClass('arrow-right');

  $(".fancybox").fancybox({
    padding: 0,
    closeBtn: true,
  });


    // Hamburger - jquery
  $('#menu_trigger').click(function(e){
    e.preventDefault();
    $('#additional-menu').slideToggle('slow');
  });
 

    // Relax - tabs - jquery
  $('.relax__tab a').on('click', function(e){
    e.preventDefault();
    $(this)
      .closest('.relax')
      .find('.relax__tab--active')
      .removeClass('relax__tab--active');
    $(this)
      .closest('.relax__tab')
      .addClass('relax__tab--active');
    $(this)
      .closest('.relax')
      .find('.relax__inner--active')
      .removeClass('relax__inner--active')
      .hide();
    $( $(this.hash) ).fadeIn(300, function(){
      $(this).addClass('relax__inner--active');
    });
  });


    // Offers - tabs - jquery
  $('.offer__tab a').on('click', function(e){
    e.preventDefault();
    $(this)
      .closest('.offer')
      .find('.offer__tab--active')
      .removeClass('offer__tab--active');
    $(this)
      .closest('.offer__tab')
      .addClass('offer__tab--active');
    $(this)
      .closest('.offer')
      .find('.offer__slide--active')
      .removeClass('offer__slide--active')
      .hide();
    $( $(this.hash) ).fadeIn(400, function(){
      $(this).addClass('offer__slide--active');
    });
  });


    // Form - house description - tabs - jquery
  $('.cottages__input').on('click', function() { 
    var idInput = $(this).attr('id'); 
    var idBlock = '#house-description--'+idInput;   
    $('.house-description').hide();   
    $(idBlock).show(); 
  });  


    // Form - card-info - enabled/disabled - jquery
  $('#now').on('click', function() {  
    $('.card-info__input').prop( "disabled", false ); 
  });  
  $(this)
  .closest('.pay__wrapper')
  $("input[name=pay]").not("#now").on('click', function() {    
    $('.card-info__input').prop( "disabled", true ); 
  }); 


    // Form - jquery-validate
    // $("#main-form").validate();






});
