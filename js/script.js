
 $(document).ready(function(){
  $('.sl2').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
   arrows:false,
   autoplaySpeed: 900,
   slickPlay:false,
   autoplay:false,
   dots:false,
   dotsClass:'slick-dots',
   nextArrow:false,
   prevArrow:false,
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

    