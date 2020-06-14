
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


const openModalButton = document.querySelector('#open'),
        modal = document.querySelector('#modal'),
        modalContainer = document.querySelector('#modalContainer');
    let toogle = false;
    document.addEventListener('click', function (event) {
        if (event.target === openModalButton) {
            modal.classList.add('d-flex');
            modal.classList.remove('d-none');
            toogle = true;
        } else if (toogle && event.target !== modalContainer && event.target.parentNode !== modalContainer) {
            modal.classList.add('d-none');
            modal.classList.remove('d-flex');
            toogle = false;
        }

    })