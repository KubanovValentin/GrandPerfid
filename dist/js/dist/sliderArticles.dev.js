'use strict'; // слайдер 

window.addEventListener('DOMContentLoaded', function () {
  new Swiper('.image-slaider', {
    // стелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    // упрвление колесом мыши 
    // mousewheel: {
    // чуствительность мыши 
    // sensitvity: 1,
    // класс обьекта на котором мышь срабатывает 
    // eventTarget: '.image-slaider'
    // },
    // slideToClickedSlide: true,
    loop: true,
    grabCursor: true,
    speed: 1000,
    // эфект переключения слайдов,
    // переворот
    // effect:'flip',
    // дополнения к flip 
    // flipEffect: {
    //     // тень
    //     slideShadows: true,
    //     // показ только активного слайда 
    //     limitRotation: true
    // },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    }
  });
});