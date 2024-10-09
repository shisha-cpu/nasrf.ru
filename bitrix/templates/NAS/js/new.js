document.addEventListener("DOMContentLoaded", function () {
  jQuery(function ($) {
    $(".banner-feedback__phone-input").mask("+7 999-999-99-99");
  });

  if ($('#quality-rating').length > 0) {
    var circleBar = new ProgressBar.Path('#quality-rating', {
      //easing: 'easeInOut',
      //duration: 1400
    });
    circleBar.set(0.95);
    //circleBar.animate(.95);

    var circleBarValue = Math.round(circleBar.value() * 100);
    var circleBarNumber = $('#quality-rating-percent');

    circleBarNumber.html(circleBarValue);
  }

  if ($('#quality-rating70').length > 0) {
    var circleBar = new ProgressBar.Path('#quality-rating70', {
    });
    circleBar.set(0.70);

    var circleBarValue = Math.round(circleBar.value() * 100);
    var circleBarNumber = $('#quality-rating-percent');

    circleBarNumber.html(circleBarValue);
  }

  if ($('#quality-rating10').length > 0) {
    var circleBar = new ProgressBar.Path('#quality-rating10', {
    });
    circleBar.set(.10);

    var circleBarValue = Math.round(circleBar.value() * 100);
    var circleBarNumber = $('#quality-rating-percent');

    circleBarNumber.html(circleBarValue);

    // if (circleBarValue == 0) {
    //   console.log('рейтинг 0%');
    // } else if (circleBarValue < 40) {
    //   console.log('меньше 40%');
    // } else {
    //   console.log('больше 40%')
    // }
  }

  if ($('#quality-rating0').length > 0) {
    var circleBar = new ProgressBar.Path('#quality-rating0', {
    });
    circleBar.set(0.01);

    var circleBarValue = Math.round(circleBar.value() * 100);
    var circleBarNumber = $('#quality-rating-percent');

    circleBarNumber.html(circleBarValue);
  }

  $('.about-item__info').mouseenter(function () {
    $(this).find('.about-item__info-dropdown').addClass('active');
  });

  $('.about-item__info').mouseleave(function () {
    $('.about-item__info-dropdown').removeClass('active');
  });

  var licenseSlider = new Swiper('#license-slider', {
    //slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.license-slider__pagination',
      clickable: true,
    },
  });

  var specialistsSlider = new Swiper('#specialists-slider', {
    slidesPerView: 4,
    spaceBetween: 50,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 23
      },
    },
    navigation: {
      nextEl: '.specialists-button-next',
      prevEl: '.specialists-button-prev',
    },
    scrollbar: {
      el: '.specialists-scrollbar',
      //draggable: true,
    },
  });

  var methodsTableSlider = new Swiper('#methods-table__slider', {
    slidesPerView: 1.28,
    spaceBetween: 15,
    navigation: {
      nextEl: '.methods-table-button-next',
      prevEl: '.methods-table-button-prev',
    },
    scrollbar: {
      el: '.methods-table-scrollbar',
      draggable: true,
    },
  });

  if ($(window).width() >= 769) {
    if ($('#methods-table__slider').length > 0) {
      methodsTableSlider.destroy();
    }
  }

  var foodMenuSlider = new Swiper('#food-menu-slider', {
    slidesPerView: 4,
    spaceBetween: 50,
    breakpoints: {
      768: {
        slidesPerView: 1.25,
        spaceBetween: 19
      },
    },
    navigation: {
      nextEl: '.food-menu-button-next',
      prevEl: '.food-menu-button-prev',
    },
    scrollbar: {
      el: '.food-menu-scrollbar',
      draggable: true,
    },
  });

  var foodGallerySlider = new Swiper('#food-gallery-slider', {
    slidesPerView: 4,
    spaceBetween: 50,
    breakpoints: {
      768: {
        slidesPerView: 1.25,
        spaceBetween: 19
      },
    },
    navigation: {
      nextEl: '.food-gallery-button-next',
      prevEl: '.food-gallery-button-prev',
    },
    scrollbar: {
      el: '.food-gallery-scrollbar',
      draggable: true,
    },
  });

  var photoSlider = new Swiper('#photo-slider', {
    slidesPerView: 4,
    slidesPerColumn: 1,
    //slidesPergroup: 4,
    
    spaceBetween: 50,
    breakpoints: {
      768: {
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 30,
        // slidesPerColumnFill: 'row',
      },
    },
    navigation: {
      nextEl: '.photo-button-next',
      prevEl: '.photo-button-prev',
    },
  });

  // if ($(window).width() <= 768) {
  //   if ($('#photo-slider').length > 0) {
  //     photoSlider.destroy();
  //   }
  // }

  $('.reviews-item__slider').each(function (i) {
    var swiper = new Swiper($('.reviews-item__slider')[i], {
      //slidesPerView: 1,
      // breakpoints: {
      //   769: {
      //     slidesPerView: 2,
      //     slidesPerColumn: 2,
      //     //slidesPerColumnFill: 'row',
      //     slidesPerGroup: 2,
      //     spaceBetween: 34,
      //   },
      // },
      navigation: {
        nextEl: $('.reviews-item-button-next')[i],
        prevEl: $('.reviews-item-button-prev')[i],
      },
      scrollbar: {
        el: $('.reviews-item-scrollbar')[i],
        draggable: true,
      },
    });
  });

  $('.other-centers__slider').each(function (i) {
    var swiper = new Swiper($('.other-centers__slider')[i], {
      //slidesPerView: 1,
      pagination: {
        el: $('.other-centers-pagination')[i],
        type: 'fraction',
      },
      navigation: {
        nextEl: $('.other-centers-button-next')[i],
        prevEl: $('.other-centers-button-prev')[i],
      },
      scrollbar: {
        el: $('.other-centers-scrollbar')[i],
        draggable: true,
      },
    });
  });

  var photoSliderLine = new Swiper('#slider-one-line', {
    slidesPerView: 4,
    spaceBetween: 50,
    navigation: {
      nextEl: '.photo-button-next',
      prevEl: '.photo-button-prev',
    },
  
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 15,
      }
    },
  });

  var pageMapSlider = new Swiper('#page-map__slider', {
    slidesPerView: 4,
    spaceBetween: 21,
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 3
      },
    },
    navigation: {
      nextEl: '.page-map-button-next',
      prevEl: '.page-map-button-prev',
    },
  });

  if ($('#center-map').length > 0) {
    ymaps.ready(function () {
      var myMap = new ymaps.Map('center-map', {
          center: [55.759603, 37.652472],
          zoom: 15
        }, {
          searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([55.760515, 37.650873], {
          hintContent: 'Собственный значок метки',
          balloonContent: 'Это метка'
        }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: '../img/mark.svg',
          // Размеры метки.
          iconImageSize: [19, 19],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-9, 0]
        });

      myMap.geoObjects
        .add(myPlacemark),
        myMap.behaviors.disable('scrollZoom');
    });
  }

  $('.navigation-link').click(function (e) {
    e.preventDefault();
    $('.navigation-link').removeClass('active');
    $(this).addClass('active');
  });

  if ($('#navigation').length > 0) {
    function fixedNavigation() {
      if ($(window).width() >= 769) {
        let navigation = $('#navigation');
        let navigationTop = navigation.offset().top;
        $(window).scroll(function () {
          let scrolled = $(window).scrollTop();
          if (scrolled >= navigationTop) {
            navigation.addClass('fixed');
          } else {
            navigation.removeClass('fixed');
          }
        });
      }
    }
    fixedNavigation();

    var sectionAnchor = $('.section-anchor');
    var navigationMenu = $('#navigation');
    var navigationMenuHeight = navigationMenu.outerHeight();

    $(window).on('scroll', function () {
      var currentPosition = $(this).scrollTop();

      sectionAnchor.each(function () {
        var top = $(this).offset().top - navigationMenuHeight,
          bottom = top + $(this).outerHeight();

        if (currentPosition >= top && currentPosition <= bottom) {
          navigationMenu.find('.navigation-link').removeClass('active');
          // sectionAnchor.removeClass('active');

          // $(this).addClass('active');
          navigationMenu.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
        }
      });
    });
  }

  $('.navigation-link').click(function (e) {
    e.preventDefault();
    var navHeight = $('#navigation').outerHeight();
    var id = $(this).attr('href'),
      top = $(id).offset().top - navHeight;
    $('html').animate({
      scrollTop: top
    }, 1000);
  });

  $('.photo-filter__item').click(function () {
    $('.photo-filter__item').removeClass('active');
    $(this).addClass('active');
  });
  
  if ($(window).width() <= 768) {
    $('.select_checked').click(function () {
      $(this).next().slideToggle();
    });

    $('.photo-filter__item').click(function () {
      var value = $(this).attr('data-value');
      $(this).parent().parent().parent().find('.photo-filter__select').val(value);
      $(this).parent().parent().find('.select_checked').find('.select-text').text(value);
      $(this).parent().slideUp();
    });
  }

  $('.page-price__info-item-detail').click(function (e) {
    e.preventDefault();
    $('.page-price__info-item-detail').not(this).removeClass('active').closest('.page-price__info-item').next().slideUp();
    $(this).toggleClass('active').closest('.page-price__info-item').next().slideToggle();
  });


  $('.page-stage__item-btn').click(function (event) {
    $(this).toggleClass('active').nextAll().slideToggle(200);
  });

  $('.seo__bar-item-title').click(function (event) {
    $(this).toggleClass('active').next().slideToggle(300);
  });
  

  $('.page-map__item').click(function () {
    $('.page-map__item').removeClass('active');
    $(this).addClass('active');
  });

  


  

  $('.page-faq__question-item').click(function () {
    $('.page-faq__question-item').removeClass('active');
    $(this).toggleClass('active');
    var data = $(this).data('question');
    $('.page-faq__answer-item').removeClass('active');
    $('.page-faq__answer-item[data-question=' + data + ']').toggleClass('active');
  });


  $('a.reviews-item__video-play').fancybox();


  const body = document.querySelector('body')
  // modal
  
  class Modal {
      constructor(name) {
          this.name = name;
          this.modal = document.querySelector(`[data-modal="${name}"]`)
          this.triggers = document.querySelectorAll(`[data-class="${name}"]`)
          this.body = document.querySelector(`body`)
          this.openHendler()
      }
      open() {
          this.modal.classList.remove('success', 'error')
          this.modal.classList.add('active')
          this.body.classList.add('hidden')
          this.modal.addEventListener('click', this.closeHendler)
      }
      close() {
          this.modal.classList.remove('active')
          this.body.classList.remove('hidden')
          this.modal.removeEventListener('click', this.closeHendler)
      }
      success() {
          this.modal.classList.remove('error')
          this.modal.classList.add('success')
      }
      error() {
          this.modal.classList.remove('success')
          this.modal.classList.add('error')
      }
      update() {
          this.modal = document.querySelector(`[data-modal="${this.name}"]`)
          this.triggers = document.querySelectorAll(`[data-class="${this.name}"]`)
          this.openHendler()
      }
      openHendler = (e) => {
          this.triggers.forEach(item => {
              item.addEventListener('click', (e) => {
                  e.preventDefault()
                  this.open()
              })
          })
      }
      closeHendler = (e) => {
          if (e.target.classList.contains('close-x')) {
              this.close()
          }
      }
  }
  
  let form = document.querySelector('[data-modal="form"]') ? new Modal('form') : null;
  let thanks = document.querySelector('[data-modal="thanks"]') ? new Modal('thanks') : null;
  let calc1 = document.querySelector('[data-modal="calc1"]') ? new Modal('calc1') : null;
  let calc2 = document.querySelector('[data-modal="calc2"]') ? new Modal('calc2') : null;
  let calc3 = document.querySelector('[data-modal="calc3"]') ? new Modal('calc3') : null;

  function alertMessageUslugy(btn, data, className) {
       $(btn).addClass(className);
       let text = $(btn).text();
       data = 'Отправлено';
       if (className == 'my-error') {
           data = 'Ошибка';
       } else {
           data = 'Отправлено';
       }
       $(btn).text(data);
       function sayByUslugy() {
           $(btn).removeClass(className);
           $(btn).text(text);
       }
       setTimeout(sayByUslugy, 5000);
   }

   /* Отправка формы (заявка) */
   function resetUslugy() {
       $('textarea').val('');
       $('input').val('');
   };

$(".page-doctors__item-btn").on("click", function(){
    let doctor = $(this).attr('data-item');
    document.getElementById('banner-section-doctor').value = doctor;

    let page = $('.page-banner__title').attr('data-item');
    document.getElementById('banner-section-page').value = page;
    form.open();
  });

 $(".page-price__info-item-link").on("click", function(){
    let usluga = $(this).attr('data-item');
    document.getElementById('banner-section-usluga').value = usluga;

    let page = $('.page-banner__title').attr('data-item');
    document.getElementById('banner-section-page').value = page;
    form.open();
  }); 

$(".call-baner__doktor").on("click", function(){
   let page = $('.page-banner__title').attr('data-item');
   document.getElementById('banner-section-page').value = page;

   let usluga = $(this).attr('data-item');
   document.getElementById('banner-section-usluga').value = usluga;
   form.open();
});

$(".page-faq__answer-item-link").on("click", function(){
   let page = $('.page-banner__title').attr('data-item');
   document.getElementById('banner-section-page').value = page;

  let usluga = $(this).attr('data-item');
  document.getElementById('banner-section-usluga').value = usluga;
   form.open();
});

  
        $('.modal__inner-wrap-form').submit(function () {
         var sendBtn = $(this).find('.modal__inner-wrap-content-input');
         var that = $(this);
         var data = that.serialize();
         $.ajax({
             type: 'post',
             url: '/ajax/new-uslugy/feedback-modal.php',
             data: data,
             dataType: 'json',
             success: function (e) {
                 console.log(true);
                 alertMessageUslugy(sendBtn, data, 'my-success');
                 form.close();
                 thanks.open();
                 resetUslugy();
                  
             },
             error: function (e) {
                 console.log(false);
                 //message.error(); 
             }
         });
         return false;
       
     });

$(".detox-section__link").on("click", function(){
    let usluga = $(this).attr('data-item');
    document.getElementById('banner-section-usluga').value = usluga;
    
    let page = $('.page-banner__title').attr('data-item');
    document.getElementById('banner-section-page').value = page;
    form.open();
  }); 

$(".banner-feedback__form-btn").on("click", function(){
    let page = $('.page-banner__title').attr('data-item');
    document.getElementById('banner-section-page-feed').value = page;
    document.getElementById('banner-section-page-feed2').value = page;
    document.getElementById('banner-section-page-feed3').value = page;
    document.getElementById('banner-section-page-feed4').value = page;
    document.getElementById('banner-section-page-feed5').value = page;
  }); 


    $('.banner-feedback__form').submit(function () {
         var sendBtn = $(this).find('.banner-feedback__phone-input');
         var that = $(this);
         var data = that.serialize();
         $.ajax({
             type: 'post',
             url: '/ajax/new-uslugy/feedback-modal.php',
             data: data,
             dataType: 'json',
             success: function (e) {
                 console.log(true);
                 alertMessageUslugy(sendBtn, data, 'my-success');
                 thanks.open();
                 resetUslugy();
                  
             },
             error: function (e) {
                 console.log(false);
                 //message.error(); 
             }
         });
         return false;
       
     });



$(".modal-btn__thanks").on("click", function(){
       thanks.close();
});

$(".page__banner--calcul").on("click", function(){
    let page = $('.page-banner__title').attr('data-item');
    document.getElementById('banner-section-page-calcul').value = page;
    calc1.open();
});

$(".modal__inner-wrap-calcul").on("click", function(){
   calc1.close();
   calc2.open(); 
});


$('.modal-calcul-uslugy').submit(function(){
        var that = $(this);
        var data = that.serialize();

    var sendBtn = $(this).find('.modal__inner-wrapper-tabs-radio-input');
        $.ajax({
            type: 'post',
            url: '/ajax/new-uslugy/calculator.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(data);
                console.log(true);
                 calc3.open();
                 calc2.close();
                 resetUslugy();
                $('input').val('');
                             
            },
            error:function(e){
              console.log(data);
              console.log(false);
              $('input').val('');
              
              }
        });
        
        return false;
        
    })


$(".modal__inner-wrap-calc3").on("click", function(){
       calc3.close();

});


});