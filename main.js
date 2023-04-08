$(document).ready(function() {
  $('.menu-toggle').click(function() {
    $('nav > ul').slideToggle(); // Selecciona solo la lista ul directa dentro de nav
  });
  
  $('nav ul li').click(function(e) {
    if ($(window).width() < 768) {
      if (!$(this).hasClass('active')) {
        e.preventDefault();
        $('nav ul li').removeClass('active');
        $(this).addClass('active');
        $('nav ul ul').slideUp();
        $(this).find('ul').slideToggle();
      } else {
        $(this).removeClass('active');
        $(this).find('ul').slideUp();
      }
    }
  });

  $(window).resize(function() {
    if ($(window).width() > 767) {
      $('nav ul').removeAttr('style');
    }
  });

});
