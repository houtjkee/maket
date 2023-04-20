const menuToggle = document.querySelector('.menu-toggle');
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
    $('.categories-auto, .categories-tech, .categories-mobile, .categories-pc, .categories-clothes, .categories-realty').mouseenter(function(){
        $(this).find('ul').show();
    });

    $('.categories-auto, .categories-tech, .categories-mobile, .categories-pc, .categories-clothes, .categories-realty').mouseleave(function(){
        $(this).find('ul').hide();
    });
});
