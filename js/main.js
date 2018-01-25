$(document).ready(function(){

  $(window).scroll(function(){
      if ($(window).scrollTop() >= 550) {
         $('.buttons').addClass('navbar-fixed-top')
          && $('.top_button').addClass('shrink');
      }
      else {
         $('.buttons').removeClass('navbar-fixed-top')
         && $('.top_button').removeClass('shrink');
      };
      if ($(window).scrollTop() >= 550) {
        $('.navbar').addClass('navbar-default');
      } else {
        $('.navbar').removeClass('navbar-default');   
      }
  });

  $('#nasa_button').click(function(){
    $('#nasa_nav').addClass('show').removeClass('hide') &&
    $('#esa_nav').addClass('hide').removeClass('show') &&
    $('#nasa').addClass('show').removeClass('hide') &&
    $('#esa').addClass('hide').removeClass('show');
  });

  $('#esa_button').click(function(){
    $('#esa_nav').addClass('show').removeClass('hide') &&
    $('#nasa_nav').addClass('hide').removeClass('show') &&
    $('#esa').addClass('show').removeClass('hide') && 
    $('#nasa').addClass('hide').removeClass('show');
  });
});