'use strict';

window.addEventListener('DOMContentLoaded', function () {
  var menu = document.querySelector('.menu'),
      menuItem = document.querySelectorAll('.menu__item'),
      hamburger = document.querySelector('.hamburger');
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger__active');
    menu.classList.toggle('menu__active');
  });
  menuItem.forEach(function (item) {
    item.addEventListener('click', function () {
      hamburger.classList.toggle('hamburger__active');
      menu.classList.toggle('menu__active');
    });
  }); // -------------------------------------------------modal

  $('[data-modal=application]').on('click', function () {
    $('.overlay, #application').fadeIn('slow');
  }); // $('[href="#openModal"]').on('click', function() {
  //     $('.overlay, #openModal').fadeIn('slow');
  // });

  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('[data-modal=specialPermission]').on('click', function () {
    $('.overlay, #specialPermission').fadeIn('slow');
  });
  $('[data-modal=programPage]').on('click', function () {
    $('.overlay, #programPage').fadeIn('slow');
  });
  $('.modal__close').on('click', function () {
    $('.overlay, #application, #consultation, #specialPermission, #programPage, #thanks').fadeOut('slow');
  }); // $('[.modalLink]').on('click', function() {
  // });

  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Пожалуйста, введите свое имя",
          minlength: jQuery.validator.format("Введите {0} символа!")
        },
        phone: "Пожалуйста, введите свой номер телефона",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неправильно введен адрес почты"
        }
      }
    });
  } // validateForms('#consultation-form');


  validateForms('#consultation form');
  validateForms('#application form');
  validateForms('#specialPermission form');
  validateForms('#programPage form');
  validateForms('#form-contact form');
  $('input[name=phone]').mask("+7 (999) 999-99-99");
}); // document.addEventListener("DOMContentLoaded", function () {
//     var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
//     console.log(scrollbar);
//     document.querySelector('[href="#openModal"], [href="#openModal1"]').addEventListener('click', function () {
//         document.body.style.overflow = 'hidden';
//         document.querySelector('#openModal, #openModal1').style.marginLeft = scrollbar;
//         document.body.style.overflow = 'hidden';
//     });
//     document.querySelector('[href="#close"]').addEventListener('click', function () {
//         document.body.style.overflow = 'visible';
//         document.querySelector('#openModal, #openModal1').style.marginLeft = '0px';
//     });
//   });