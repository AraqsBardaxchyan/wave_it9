
 $(document).ready(function(){
  $('.sl').slick({
   arrows:true,
   autoplaySpeed: 1200,
   slickPlay:true,
   autoplay:true,
   dots:false,
   dotsClass:'slick-dots',
   nextArrow:'<button type="button" class="slick-next">></button>',
   prevArrow:'<button type="button" class="slick-prev"><</button>',
  });
})


 $(document).ready(function(){
  $('.sl2').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
   arrows:true,
   autoplaySpeed: 900,
   slickPlay:true,
   autoplay:true,
   dots:false,
   dotsClass:'slick-dots',
   nextArrow:'<button type="button" class="slick-next">></button>',
   prevArrow:'<button type="button" class="slick-prev"><</button>',
  });
})


const button = document.getElementById('hamburger-menu'),
dropdown = document.querySelector('.dropdown')
  span = button.getElementsByTagName('span')[0];

button.addEventListener('click',function() {
  span.classList.toggle('hamburger-menu-button-close');
  dropdown.classList.toggle('in')
})

$('#hamburger-menu').on('click', toggleOnClass);

function toggleOnClass(event) {
  const toggleElementId = '#' + $(this).data('toggle'),
  element = $(toggleElementId);

  element.toggleClass('on');

}
