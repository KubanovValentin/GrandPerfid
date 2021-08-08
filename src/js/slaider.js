'use strict';
// слайдер 


window.addEventListener('DOMContentLoaded', () => {
    
    new Swiper('.image-slaider', {
        pagination: {
            el:'.swiper-pagination',
            type:'progressbar'
        },
        grabCursor: true,
    
        slideToClickedSlide: true,
    
        slidesPerView: 3
    });


});