const menuToggle = document.querySelector('.menu__toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
});

$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        autoplay: true,
        fade: true,
        autoplaySpeed: 4000});
});

$(document).ready(function(){
    $('.categories__auto, .categories__tech, .categories__mobile, .categories__pc, .categories__clothes, .categories__realty').mouseenter(function(){
        $(this).find('ul').show();
    });

    $('.categories__auto, .categories__tech, .categories__mobile, .categories__pc, .categories__clothes, .categories__realty').mouseleave(function(){
        $(this).find('ul').hide();
    });
});



$(document).ready(function() {
    $('#ContactUs').click(function(event) {
      event.preventDefault();
      $('#MyModal').css("display", "flex").fadeIn(1000);
      $('#MyModal').addClass('modal'); 
    });
  
    $('.modal__close').click(function() {
      $('#MyModal').fadeOut(500);
    });
  });


