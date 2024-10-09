$(document).ready(function() {

new WOW().init();

});
$(document).ready(function() {
  let elements = document.getElementsByClassName('ct_phone');

  let inter;

  for (let elem of elements) {

    let number = elem.innerHTML;
    
    inter = number;
    
  };

  $('.ct_phone').attr("href", "tel:" + inter);
  
});

$(document).ready(function() {

    var know = $('.min-slider-block-cont-know');  
    if (know.length) {  
      var MinswiperKnow = new Swiper('.min-slider-block-cont-know', {
        spaceBetween: 18,
        slidesPerView: 4,
        loop: true,
        observer: true,
        observeParents: true,
        speed: 2000,
        pagination: {
          el: '.min-slider-know-pagination',
          type: 'fraction',
          clickable: true,
        },
        navigation: {
          nextEl: '.Minslider-button-next',
          prevEl: '.Minslider-button-prev',
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        breakpoints: {
            767: {
              slidesPerView: 2,
              observer: true,
              observeParents: true,
            },
            415: {
              spaceBetween: 15,
              slidesPerView: 2,
              observer: true,
              observeParents: true,
            },
          },
        })
    };

    var pageCenter_Slider = $('.pageCenter-main-slider');  
    if (pageCenter_Slider.length) { 
        var pageCenter_swiper = new Swiper('.pageCenter-main-slider', {
          slidesPerView: 1,
          centeredSlides: true,
          effect: 'fade',
          spaceBetween: 0,
          pagination: {
            el: '.pageCenter-main-slider-pagination',
            clickable: true,
          },
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: '.pageCenter-main-slider-next',
            prevEl: '.pageCenter-main-slider-prev',
          },
        })
    };

    var mainTopSlider_Slider = $('.main-top-slider-container');  
    if (mainTopSlider_Slider.length) {
        var swiper = new Swiper('.main-top-slider-container', {
            spaceBetween: 30,
            effect: 'fade',
            observer: true,
            speed: 2000,
            observeParents: true,
            pagination: {
                el: '.slider-pagination',
                type: 'fraction',
                clickable: true,
            },
            navigation: {
                nextEl: '.slider-button-next',
                prevEl: '.slider-button-prev',
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        });

        swiper.on('slideChangeTransitionStart', function () {
            if ($("#slide-1").hasClass("swiper-slide-active")) {
                $('.slider-pagination-round, .slider-main-info-item, .slider-nav-content-name').removeClass('active');
                $("#slide-1-round").addClass('active');
                $("#slide-1-title").addClass('active');
                $('#name-1').addClass('active')
            }
            if ($("#slide-2").hasClass("swiper-slide-active")) {
                $('.slider-pagination-round, .slider-main-info-item, .slider-nav-content-name').removeClass('active');
                $("#slide-2-round").addClass('active');
                $("#slide-2-title").addClass('active');
                $('#name-2').addClass('active')
            }
            if ($("#slide-3").hasClass("swiper-slide-active")) {
                $('.slider-pagination-round, .slider-main-info-item, .slider-nav-content-name').removeClass('active');
                $("#slide-3-round").addClass('active');
                $("#slide-3-title").addClass('active');
                $('#name-3').addClass('active')
            }
            if ($("#slide-4").hasClass("swiper-slide-active")) {
                $('.slider-pagination-round, .slider-main-info-item, .slider-nav-content-name').removeClass('active');
                $("#slide-4-round").addClass('active');
                $("#slide-4-title").addClass('active');
                $('#name-4').addClass('active')
            }
            if ($("#slide-5").hasClass("swiper-slide-active")) {
                $('.slider-pagination-round, .slider-main-info-item, .slider-nav-content-name').removeClass('active');
                $("#slide-5-round").addClass('active');
                $("#slide-5-title").addClass('active');
                $('#name-5').addClass('active')
            }
            if ($("#slide-6").hasClass("swiper-slide-active")) {
                $('.slider-pagination-round, .slider-main-info-item').removeClass('active');
                $("#slide-6-round").addClass('active');
                $("#slide-6-title").addClass('active');

            }
        });
    };
    var stati_Slider = $('.stati-menu-slider');  
    if (stati_Slider.length) {
        var statiswiper = new Swiper('.stati-menu-slider', {
            spaceBetween: 10,
            slidesPerView: 'auto',
            loop: false,
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: '.stati-menu-button-next',
                prevEl: '.stati-menu-button-prev',
                clickable: true,
             },
            breakpoints: {
              767: {
                observer: true,
                observeParents: true,
              },
            },
        });
    };
    var intervu_Slider = $('.intervu-slider');  
    if (intervu_Slider.length) {
        var Mapswiper = new Swiper('.intervu-slider', {
            spaceBetween: 30,
            slidesPerView: 5,
            loop: 'true',
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: '.filter-slider-button-next',
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {
                767: {
                    slidesPerView: 1.5,
                    observer: true,
                    observeParents: true,
                },
                415: {
                    spaceBetween: 15,
                    slidesPerView: 1.6,
                    observer: true,
                    observeParents: true,
                },
            },
        });
    };
    var filter_Slider = $('.filter-slider');
    if (filter_Slider.length) {
        var Filterswiper = new Swiper('.filter-slider', {
          spaceBetween: 30,
          slidesPerView: 5,
          loop: false,
          observer: true,
          observeParents: true,
          speed: 2000,
          navigation: {
            nextEl: '.filter-slider-button-next',
          },
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          breakpoints: {
              767: {
                slidesPerView: "auto",
                observer: true,
                observeParents: true,
                spaceBetween: 20,
              },
              415: {
                slidesPerView: "auto",
                observer: true,
                observeParents: true,
                spaceBetween: 15,
              },
            },
          })
    };
    var cont_news_Slider = $('.min-slider-block-cont-news');
    if (cont_news_Slider.length) {
        var Minswiper = new Swiper('.min-slider-block-cont-news', {
            spaceBetween: 30,
            slidesPerView: 4,
            loop: true,
            observer: true,
            observeParents: true,
            speed: 2000,
            pagination: {
                el: '.Minslider-pagination-news',
                type: 'fraction',
                clickable: true,
            },
            navigation: {
                nextEl: '.Minslider-button-next',
                prevEl: '.Minslider-button-prev',
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {
                767: {
                    slidesPerView: 2,
                    observer: true,
                    observeParents: true,
                },
                415: {
                    spaceBetween: 15,
                    slidesPerView: 2,
                    observer: true,
                    observeParents: true,
                },
            },
        })
    };
    var cont_two_Slider = $('.min-slider-block-cont-two');
    if (cont_two_Slider.length) {
        var MinswiperTwo = new Swiper('.min-slider-block-cont-two', {
            spaceBetween: 30,
            slidesPerView: 4,
            loop: true,
            observer: true,
            observeParents: true,
            speed: 2000,
            pagination: {
                el: '.Minslider-pagination-histor',
                type: 'fraction',
                clickable: true,
            },
            navigation: {
                nextEl: '.Minslider-button-next',
                prevEl: '.Minslider-button-prev',
            },
            breakpoints: {
                767: {
                    slidesPerView: 2,
                    observer: true,
                    observeParents: true,
                },
                415: {
                    spaceBetween: 15,
                    slidesPerView: 2,
                    observer: true,
                    observeParents: true,
                },
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },

        })
    };
    var pageDety_Slider = $('.pageDety-slider');
    if (pageDety_Slider.length) {
        var Detyswiper = new Swiper('.pageDety-slider', {
            spaceBetween: 30,
            slidesPerView: 5,
            loop: 'true',
            observer: true,
            observeParents: true,
            speed: 2000,
            navigation: {
                nextEl: '.pageDety-slider-button-next',
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {
                767: {
                    slidesPerView: 2,
                    observer: true,
                    observeParents: true,
                },
                415: {
                    spaceBetween: 15,
                    observer: true,
                    observeParents: true,
                },
            },
        })
    };
    var min_bg = $('.min-bg-slider');
    if (min_bg.length) {
        var Minswiper = new Swiper('.min-bg-slider', {
            spaceBetween: 30,
            slidesPerView: 1,
            loop: 'true',
            observer: true,
            speed: 2000,
            observeParents: true,
            pagination: {
                el: '.min-bg-slider-pagination',
                type: 'fraction',
            },
            navigation: {
                nextEl: '.min-bg-slider-button-next',
                prevEl: '.min-bg-slider-button-prev',
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
        })
    };
    var blockScroll_left = $('.BlockScroll-left-slider-block');
    if (blockScroll_left.length) {
        var MinBlockScrollswiper = new Swiper('.BlockScroll-left-slider-block', {
          spaceBetween: 35,
          slidesPerView: '3',
          loop: false,
          observer: true,
          observeParents: true,
          speed: 2000,
          navigation: {
            nextEl: '.BlockScroll-left-slider-button-next',
            prevEl: '.BlockScroll-left-slider-button-prev',
            clickable: true,
          },
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          breakpoints: {
            767: {
              observer: true,
              observeParents: true,
              spaceBetween: 15,
              slidesPerView: 'auto',
            },
          },
          });
    };
    var clinic_slider = $('.clinic-slider-cont');
    if (clinic_slider.length) {
        var ClinicSwiper = new Swiper('.clinic-slider-cont', {
          spaceBetween: 15,
          slidesPerView: "auto",
          loop: false,
          observer: true,
          observeParents: true,
          navigation: {
            nextEl: '.clinic-slider-button-next',
            prevEl: '.clinic-slider-button-prev',
            clickable: true,
          },
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          breakpoints: {
              767: {
                spaceBetween: 20,
              },
              500: {
                spaceBetween: 15,
              },
              415: {
                spaceBetween: 10,
              },
            },
          });
    };
    var clinicMin_slider = $('.min-slider-clinics');
    if (clinicMin_slider.length) {
        var MinClinSwiper = new Swiper('.min-slider-clinics', {
          spaceBetween: 18,
          slidesPerView: "auto",
          loop: true,
          observer: true,
          observeParents: true,
          speed: 1000,
          pagination: {
            el: '.Minslider-pagination-clinics',
            type: 'fraction',
            clickable: true,
          },
          navigation: {
            nextEl: '.Minslider-button-next',
            prevEl: '.Minslider-button-prev',
          },
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          breakpoints: {
              767: {
                slidesPerView: 2,
                observer: true,
                observeParents: true,
              },
              415: {
                spaceBetween: 15,
                slidesPerView: 2,
                observer: true,
                observeParents: true,
              },
            },
          })
    };
    var personal_slider = $('.BlockScroll-left-slider-block-personal-slider');
    if (personal_slider.length) {
        var MinBlockScrollswiper = new Swiper('.BlockScroll-left-slider-block-personal-slider', {
            spaceBetween: 20,
            slidesPerView: "auto",
            loop: false,
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: '.BlockScroll-left-slider-button-next',
                prevEl: '.BlockScroll-left-slider-button-prev',
                clickable: true,
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            breakpoints: {
                767: {
                    spaceBetween: 20,
                },
                500: {
                    spaceBetween: 15,
                },
                415: {
                    spaceBetween: 10,
                },
            },
        });
    };
    var personal_slider2 = $('.personal-slider');
    if (personal_slider2.length) {
      var MinBgswiper = new Swiper('.personal-slider', {
        spaceBetween: 30,
        slidesPerView: 1,
        loop: 'true',
        observer: true,
        observeParents: true,
        speed: 1000,
        pagination: {
          el: '.personal-slider-pagination-bull',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.personal-slider-button-next',
          prevEl: '.personal-slider-button-prev',
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        breakpoints: {
            767: {
                autoplay: {
                  delay: 2000,
                  disableOnInteraction: false,
                },
            },
        },
        });
    };
    var project_slider = $('.project-slider-block-one');
    if (project_slider.length) {
        var Projswiper = new Swiper('.project-slider-block-one', {
            spaceBetween: 30,
            slidesPerView: "auto",
            loop: true,
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: '.BlockScroll-left-slider-button-next',
                prevEl: '.BlockScroll-left-slider-button-prev',
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            breakpoints: {
                767: {
                    spaceBetween: 35,
                },
                500: {
                    spaceBetween: 25,
                },
                415: {
                    spaceBetween: 15,
                },
            },
        });
    };
    var project_slider2 = $('.project-slider-block-two');
    if (project_slider2.length) {
        var Projswiper = new Swiper('.project-slider-block-two', {
            spaceBetween: 30,
            slidesPerView: "auto",
            loop: true,
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: '.BlockScroll-left-slider-button-next',
                prevEl: '.BlockScroll-left-slider-button-prev',
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            breakpoints: {
                767: {
                    slidesPerView: 1.6,
                    spaceBetween: 35,
                },
                500: {
                    spaceBetween: 25,
                    slidesPerView: 1.6,
                },
                415: {
                    spaceBetween: 15,
                    slidesPerView: 1.6,
                },
            },
        });
    };    
    var minswiperKnow = $('.min-slider-block-cont-ceo');
    if (minswiperKnow.length) {
        var MinswiperKnow = new Swiper('.min-slider-block-cont-ceo', {
          spaceBetween: 18,
          slidesPerView: 4,
          loop: true,
          observer: true,
          observeParents: true,
          pagination: {
            el: '.min-slider-know-pagination',
            type: 'fraction',
            clickable: true,
          },
          navigation: {
            nextEl: '.Minslider-button-next',
            prevEl: '.Minslider-button-prev',
          },
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          breakpoints: {
              767: {
                slidesPerView: 2,
                observer: true,
                observeParents: true,
              },
              415: {
                spaceBetween: 15,
                slidesPerView: 2,
                observer: true,
                observeParents: true,
              },
            },
          });
    };
    var minswiperProg_sl = $('.programma-slider');
    if (minswiperProg_sl.length) {
        var MinswiperProg = new Swiper('.programma-slider', {
            spaceBetween: 15,
            slidesPerView: 1.1,
            loop: 'true',
            observer: true,
            observeParents: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        });
    };
    var minswiperBoic_sl = $('.boicy-baner-slider');
    if (minswiperBoic_sl.length) {
        var MinswiperBoic = new Swiper('.boicy-baner-slider', {
            spaceBetween: 20,
            slidesPerView: 1.6,
            loop: 'true',
            observer: true,
            observeParents: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        });
    };
    var minswiperTren_sl = $('.trening-slider-block');
    if (minswiperTren_sl.length) { 
        var MinswiperTren = new Swiper('.trening-slider-block', {
            spaceBetween: 20,
            slidesPerView: 1.5,
            loop: 'true',
            observer: true,
            observeParents: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        });
    };
}); 


/*$(document).ready(function () {
    $("#region").selectmenu();
    $("#price").selectmenu();
    $("#quantity").selectmenu();
    $("#term").selectmenu();
    $("#rem").selectmenu();
    $("#religion").selectmenu();
});*/


/*моб фильтер*/
$(document).ready(function(){
  $('.filter-mob-img').click(function () {
      $('.filter-bottom').toggleClass('active');
      $('.filter-bottom-close').click(function () {
          $('.filter-bottom').removeClass('active');
      })
  })


    $(".PageCenter-blue").circliful({
      foregroundBorderWidth: 9,
      backgroundBorderWidth: 9,
      percent: 80,
      halfCircle: 1,
    });
})

$(document).ready(function(){
  $(".PageCenter-red").circliful({
    foregroundBorderWidth: 9,
    backgroundBorderWidth: 9,
    percent: 80,
    halfCircle: 1,
  });
})
$(document).ready(function(){
  $(".PageCenter-black").circliful({
    foregroundBorderWidth: 9,
    backgroundBorderWidth: 9,
    percent: 80,
    halfCircle: 1,
  });
})




$(document).ready(function () {
    var sections = $('.revl')
        , nav = $('.nav_center')
        , nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this)
            , id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 500);

        return false;
    });
});

/*Раздел базы знаний*/



$(document).ready(function() {
    $('.RazdelBK-menu ul li a').click(function(){
      $('.RazdelBK-menu ul li a').removeClass('active')
      $(this).toggleClass('active')
      $('.RazdelBK-cont-main').removeClass('active')
      var data = $(this).data('id');
      $('.RazdelBK-cont-main[data-id='+data+']').toggleClass('active');
    });

    var nav = $('.RazdelBK');  
    if (nav.length) {  
      var MenuFix = $('.RazdelBK-menu').offset().top;
      MenuFixBlock = $('.RazdelBK-menu');
      $(document).on('scroll', function () {
                var scrollDoc = $(document).scrollTop();
                if (scrollDoc > MenuFix) {
                    MenuFixBlock.addClass('active');
                } else {
                    MenuFixBlock.removeClass('active');
                }
      });
    };
});  


/*база знаний*/
$(document).ready(function() {
  $(function () {
      var w = $(window).width();
      var h = $(window).height();
      if (w >= 767) { 
        var nav = $('.base');  
        if (nav.length) {
          var postionKnow = $('.base').offset().top,
              heightKnow = $('.base').height(),
              infoKnow = $('.footer').height();
          $(document).on('scroll', function (){
            var scrollKnow = $(document).scrollTop();
            if(scrollKnow  > postionKnow && scrollKnow < heightKnow ) {
               $('.base-right-block').addClass('active')
               }else {
                  $('.base-right-block').removeClass('active')
               }

          });
          $(document).ready(function() {
          var sectionsKnow = $('.base-left-block')
            , navKnow = $('.base-nav')
            , nav_heightKnow = navKnow.outerHeight();

          $(window).on('scroll', function () {
            var cur_posKnow = $(this).scrollTop();
            
            sectionsKnow.each(function() {
              var topKnow = $(this).offset().top - nav_heightKnow,
                  bottomKnow = topKnow + $(this).outerHeight();
              
              if (cur_posKnow >= topKnow && cur_posKnow <= bottomKnow) {
                navKnow.find('a').removeClass('active');
                sectionsKnow.removeClass('active');
                
                $(this).addClass('active');
                navKnow.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
              }
            });
          });

          navKnow.find('a').on('click', function () {
            var $el = $(this)
              , id = $el.attr('href');
            
            $('html, body').animate({
              scrollTop: $(id).offset().top - nav_heightKnow + 1
            }, 500);
            
            return false;
          });
          });

        }   
      }
  });
});


$(document).ready(function () {
    var sectionsKnow = $('.BaKn')
        , navKnow = $('.nav_know')
        , nav_heightKnow = navKnow.outerHeight();

    $(window).on('scroll', function () {
        var cur_posKnow = $(this).scrollTop();

        sectionsKnow.each(function () {
            var topKnow = $(this).offset().top - nav_heightKnow,
                bottomKnow = topKnow + $(this).outerHeight();

            if (cur_posKnow >= topKnow && cur_posKnow <= bottomKnow) {
                navKnow.find('a').removeClass('active');
                sectionsKnow.removeClass('active');

                $(this).addClass('active');
                navKnow.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    navKnow.find('a').on('click', function () {
        var $el = $(this)
            , id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_heightKnow
        }, 500);

        return false;
    });
});

$(document).ready(function() {
var nav = $('.BlockScroll');  
if (nav.length) {  
    var postion = $('.BlockScroll').offset().top,
        height = $('.BlockScroll').height(),
        info = $('.pageCenter-baner').height();
        infoTwo = $('.footer').height();
    $(document).on('scroll', function (){
      var scroll = $(document).scrollTop();
      if(scroll  > postion && scroll < (postion + height - info - infoTwo) ) {
         $('.BlockScroll-right-block').addClass('active')
         }else {
            $('.BlockScroll-right-block').removeClass('active')
         }
    });


    $(document).ready(function() {
    var sections = $('.revl')
      , nav = $('.nav_center')
      , nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
      var cur_pos = $(this).scrollTop();
      
      sections.each(function() {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();
        
        if (cur_pos >= top && cur_pos <= bottom) {
          nav.find('a').removeClass('active');
          sections.removeClass('active');
          
          $(this).addClass('active');
          nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
        }
      });
    });

    nav.find('a').on('click', function () {
      var $el = $(this)
        , id = $el.attr('href');
      
      $('html, body').animate({
        scrollTop: $(id).offset().top - nav_height
      }, 500);
      
      return false;
    });
    });
};
});


$(document).ready(function () {
    $('.liveAfterScroll').click(function () {
        $('.liveAfterScroll').removeClass('active')
        $(this).toggleClass('active')
    });
});



/*детям*/
$(document).ready(function () {
    $('.dety-cont .item .title').click(function () {
        $(this).toggleClass('active')
        var data = $(this).data('id');
        $('.dety-block[data-id=' + data + ']').toggleClass('active');
    });
});

/*программы*/

$(document).ready(function () {
    $(".programma-rei-icon").circliful({
        animationStep: 5,
        foregroundBorderWidth: 12,
        backgroundBorderWidth: 15,
        percent: 79,
        foregroundColor: '#577ae4',
        backgroundColor: "none",
        textColor: '#666',
    });
});

/*меню*/


$(document).ready(function(){
  $('.menu_mob').click(function () {
      $(this).toggleClass('active');
      $("body").toggleClass('noscroll ')
      $('.menu-block').toggleClass('active');
      $('.menu_tell a').toggleClass('doc-hide');
      $('.logo_mob').toggleClass('doc-hide');
      $('.region').toggleClass('active');
      $('.narcom-nav').toggleClass('Inactive');  
      $('.menu-block-mob .menu_tell').toggleClass('Inactive');
  });
});

/*стр. центра*/

$(document).ready(function () {
    var nav_isk = $('.isk');
    if (nav_isk.length) {
        $('.isk').click(function () {
            $('.BlockScroll-left-doc .doc-left').toggleClass('block-hid');
            $('.BlockScroll-left-doc .title-doc').toggleClass('block-hid');
            $('.BlockScroll-left-doc .doc-right .doc-right-one').toggleClass('block-hid');
            $('.BlockScroll-left-doc .doc-right .item-block .close').show();
            $('.BlockScroll-left-doc .doc-right .item-block .item-block-isk-cont .hideBlock').show();
            $('.BlockScroll-left-doc .doc-right .min-slider-block-numb-link').hide();
        });
        $('.BlockScroll-left-doc .doc-right .item-block .close').click(function () {
            $('.BlockScroll-left-doc .doc-left').removeClass('block-hid');
            $('.BlockScroll-left-doc .title-doc').removeClass('block-hid');
            $('.BlockScroll-left-doc .doc-right .doc-right-one').removeClass('block-hid');
            $('.BlockScroll-left-doc .doc-right .item-block .close').hide();
            $('.BlockScroll-left-doc .doc-right .item-block .item-block-isk-cont .hideBlock').hide();
            $('.BlockScroll-left-doc .doc-right .min-slider-block-numb-link').show();
        });
    };
});

$(document).ready(function () {
    $('.PageCenter-otziv-text').click(function () {
        $('#otzivy .title').hide()
        $('.PageCenter-otziv-text').hide()
        $('.BlockScroll-left-slider-otziv .title').hide();
        var data = $(this).data('id');
        $('.BlockScroll-left-slider-block-img[data-id=' + data + ']').toggleClass('active');
    });
    $('.BlockScroll-left-slider-block-hide-close').click(function () {
        $('.BlockScroll-left-slider-block-img').removeClass('active');
        $('.PageCenter-otziv-text').show()
        $('#otzivy .title').show()
        $('.BlockScroll-left-slider-otziv .title').show();
    })
});

$(document).ready(function () {
    $('.personal-btn').click(function () {
        var data = $(this).data('id');
        $('.BlockScroll-left-slider-block-personal[data-id=' + data + ']').toggleClass('active');
    });
    $(".BlockScroll-left-slider-block-hide-close").click(function () {
        $('.BlockScroll-left-slider-block-personal').removeClass('active');
    })
});

/*показать стрелки на слайдере страница Центра*/


/*реабилитационные центры */

$(document).ready(function () {
    $('.RebCenter-rei-page-button').click(function () {
        $(this).hide()
        $('.RebCenter-rei-block-showMob').fadeIn('slow');
    });
});

if ($(window).width() < 767) {
    $(document).ready(function () {
        $('.filter-bottom-item').click(function () {
            $(this).addClass('active');
            $('.filter-bottom-item-windowClose').show()
        });
        $('.filter-bottom-item-windowClose').click(function () {
            $('.filter-bottom-item').removeClass('active')
            $('.filter-bottom-item-windowClose').hide()
        })
    });

}

$(document).ready(function() {
  $('.filter-map-button').click(function(){
    $(this).hide();
    $('.filter-map').addClass('active');
    $('.filter-map-block-bg').hide();
  });
  $('.filter-map-close').click(function(){
    $('.filter-map-button').show();
    $('.filter-map-block-bg').show();
    $('.filter-map').removeClass('active');
  })
});

$(document).ready(function() {
var navReb = $('.RebCenter-filter');  
if (navReb.length) {  
  var postionRebCenter = $('.RebCenter-filter').offset().top,
      heightRebCenter = $('.RebCenter-filter').height();
      infoRebCenter = $('.baner').height();
  $(document).on('scroll', function (){
    var scrollRebCenter = $(document).scrollTop();
    if(scrollRebCenter  > postionRebCenter && scrollRebCenter < (postionRebCenter + heightRebCenter - infoRebCenter) ) {
       $('.RebCenter-filter .filter-map-button').addClass('active')
       }else {
          $('.RebCenter-filter .filter-map-button').removeClass('active')
       }
  });
}
});

$(document).ready(function () {
    $('.RebCenter-slider-title-link-button').click(function () {
        $('.RebCenter-slider-title-link-button').removeClass('active');
        $(this).toggleClass('active');
    });
});


/*отзывы*/


$(document).ready(function () {
    $('.programma-otzivy .BlockScroll-left-slider-block-img').click(function () {
        $(this).toggleClass('active');
        $(' .BlockScroll-left-slider-block-img').toggleClass('inActive');
    })
});

/*формы*/

$(document).ready(function () {
    $('.form-button-inter').click(function () {
        $('.form-reg').fadeOut('slow');
        $('.form-forgot').fadeOut('slow');
        $('.form-inter').fadeIn('slow');
        $('.form-block').fadeIn('slow');
        $('html, header').width($('html, header').width());
        $('html').css('overflow', 'hidden');
    })
    $('.form-close').click(function () {
        $('.form-inter').fadeOut('slow');
        $('.form-block').css('display', 'none');
        $('.form-block').css('display', 'none');
        $('html').removeAttr('style');
    })
});

$(document).ready(function () {
    $('.form-button-reg').click(function () {
        $('.form-forgot').fadeOut('slow');
        $('.form-inter').fadeOut('slow');
        $('.form-reg').fadeIn('slow');
        $('.form-block').fadeIn('slow');
        $('html, header').width($('html, header').width());
        $('html').css('overflow', 'hidden');
    })
    $('.form-close').click(function () {
        $('.form-reg').fadeOut('slow');
        $('.form-block').css('display', 'none');
        $('.form-forgot').fadeOut('slow');
        $('html').removeAttr('style');
    })
    $('.form-button-forgot').click(function () {
        $('.form-forgot').fadeIn('slow');
        $('.form-inter').fadeOut('slow');
    })
});

$(document).ready(function () {
    $('.form-button-place').click(function () {
        $('.form-place').fadeIn('slow');
        $('.form-block').fadeIn('slow');
        $('html, header').width($('html, header').width());
        $('html').css('overflow', 'hidden');
    })
    $('.form-close').click(function () {
        $('.form-place').fadeOut('slow');
        $('.form-block').css('display', 'none');
        $('html').removeAttr('style');
    })
});

$(document).ready(function() {
  $('.form-button-konsult').click(function(){
    $('.form-konsult').fadeIn('slow');
    $('.form-block').fadeIn('slow');
    $('html, header').width($('html, header').width());
    $('html').css('overflow', 'hidden');
  })
  $('.form-close').click(function(){
    $('.form-konsult').fadeOut('slow');
    $('.form-block').css('display', 'none');
    $('html').removeAttr('style');
  })
});

$(document).ready(function() {
  $('.form-button-center-info').click(function(){
    $('.form-center-info').fadeIn('slow');
    $('.form-block').fadeIn('slow');
    $('html, header').width($('html, header').width());
    $('html').css('overflow', 'hidden');
  })
  $('.form-close').click(function(){
    $('.form-center-info').fadeOut('slow');
    $('.form-block').css('display', 'none');
    $('html').removeAttr('style');
  })
});

$(document).ready(function () {
    $("#kategoria").selectmenu();
});

$(document).ready(function () {
    $('.form-button-pecic').click(function () {
        $('.form-pecic').fadeIn('slow');
        $('.form-block').fadeIn('slow');
        $('html, header').width($('html, header').width());
        $('html').css('overflow', 'hidden');
    })
    $('.form-close').click(function () {
        $('.form-pecic').fadeOut('slow');
        $('.form-block').css('display', 'none');
        $('html').removeAttr('style');
    })
});

$(document).ready(function () {
    $('.form-button-tell').click(function () {
        $('.form-tell').fadeIn('slow');
        $('.form-block').fadeIn('slow');
        $('html, header').width($('html, header').width());
        $('html').css('overflow', 'hidden');
    })
    $('.form-close').click(function () {
        $('.form-tell').fadeOut('slow');
        $('.form-block').css('display', 'none');
        $('html').removeAttr('style');
    })
});

$(document).ready(function () {
    $('.form-button-otziv').click(function () {
        $('.form-otziv').fadeIn('slow');
        $('.form-block').fadeIn('slow');
        $('html, header').width($('html, header').width());
        $('html').css('overflow', 'hidden');
    })
    $('.form-close').click(function () {
        $('.form-otziv').fadeOut('slow');
        $('.form-block').css('display', 'none');
        $('html').removeAttr('style');
    })
});

$(document).ready(function () {
    $('.form-button-borec').click(function () {
        $('.form-borec').fadeIn('slow');
        $('.form-block').fadeIn('slow');
        $('html, header').width($('html, header').width());
        $('html').css('overflow', 'hidden');
    })
    $('.form-close').click(function () {
        $('.form-borec').fadeOut('slow');
        $('.form-block').css('display', 'none');
        $('html').removeAttr('style');
    })
});

$(document).ready(function () {
    $('.form-button-anonim').click(function () {
        $('.form-anonim').fadeIn('slow');
        $('.form-block').fadeIn('slow');
        $('html, header').width($('html, header').width());
        $('html').css('overflow', 'hidden');
    })
    $('.form-close').click(function () {
        $('.form-anonim').fadeOut('slow');
        $('.form-block').css('display', 'none');
        $('html').removeAttr('style');
    })
});

$(document).ready(function () {
    $('.form-button-error').click(function () {
        $('.form-error').fadeIn('slow');
        $('.form-block').fadeIn('slow');
        $('html, header').width($('html, header').width());
        $('html').css('overflow', 'hidden');
    })
    $('.form-close').click(function () {
        $('.form-error').fadeOut('slow');
        $('.form-block').css('display', 'none');
        $('html').removeAttr('style');
    })
});

$(document).ready(function () {
    $('.form-button-narkolog').click(function () {
        $('.form-narkolog').fadeIn('slow');
        $('.form-block').fadeIn('slow');
        $('html, header').width($('html, header').width());
        $('html').css('overflow', 'hidden');
    })
    $('.form-close').click(function () {
        $('.form-narkolog').fadeOut('slow');
        $('.form-block').css('display', 'none');
        $('html').removeAttr('style');
    })
});

$(document).ready(function() {
  $('.form-button-reiting').click(function(){
    $('.form-reiting').fadeIn('slow');
    $('.form-block').fadeIn('slow');
    $('html, header').width($('html, header').width());
    $('html').css('overflow', 'hidden');
  })
  $('.form-close').click(function(){
    $('.form-reiting').fadeOut('slow');
    $('.form-block').css('display', 'none');
    $('html').removeAttr('style');
  })
});



/*СЕО*/
$(document).ready(function() {
var nav = $('.ceo-scroll');  
if (nav.length) {
  var postionKnow = $('.baseKnow-scroll').offset().top,
      heightKnow = $('.baseKnow-scroll').height(),
      infoKnow = $('.footer').height();
  $(document).on('scroll', function (){
    var scrollKnow = $(document).scrollTop();
    if(scrollKnow  > postionKnow && scrollKnow < (postionKnow + heightKnow - infoKnow - infoKnow - infoKnow) ) {
       $('.BlockScroll-right-block').addClass('active')
       }else {
          $('.BlockScroll-right-block').removeClass('active')
       }

  });
  $(document).ready(function() {
  var sectionsKnow = $('.BaKn')
    , navKnow = $('.nav_know')
    , nav_heightKnow = navKnow.outerHeight();

  $(window).on('scroll', function () {
    var cur_posKnow = $(this).scrollTop();
    
    sectionsKnow.each(function() {
      var topKnow = $(this).offset().top - nav_heightKnow,
          bottomKnow = topKnow + $(this).outerHeight();
      
      if (cur_posKnow >= topKnow && cur_posKnow <= bottomKnow) {
        navKnow.find('a').removeClass('active');
        sectionsKnow.removeClass('active');
        
        $(this).addClass('active');
        navKnow.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
      }
    });
  });

  navKnow.find('a').on('click', function () {
    var $el = $(this)
      , id = $el.attr('href');
    
    $('html, body').animate({
      scrollTop: $(id).offset().top - nav_heightKnow + 1
    }, 500);
    
    return false;
  });
  });

}
});


/*результат поиска*/

$('.searchingResults-block-results-list .item').click(function(){
  $('.searchingResults-block-results-list .item').removeClass('active');
  $(this).addClass('active');
  var data = $(this).data('id');
  $('.searchingResults-block-results-cont').removeClass('active')
  $('.searchingResults-block-results-cont[data-id='+data+']').toggleClass('active');
});



$(document).ready(function () {
    $('.form-buttom-addstati').click(function () {
        $('.form-addstati').fadeIn('slow');
        $('.form-block').fadeIn('slow');
        $('html, header').width($('html, header').width());
        $('html').css('overflow', 'hidden');
    })
    $('.form-close').click(function () {
        $('.form-addstati').fadeOut('slow');
        $('.form-block').css('display', 'none');
        $('html').removeAttr('style');
    })


    $('.znanya_search').submit(function () {
        // alert(1);
        var data = $(this).serialize();
        console.log(data);
        $.ajax({
            type: 'post',
            url: '/ajax/znanya_search.php',
            data: data,
            dataType: 'html',
            success: function (e) {
                $('.base').empty();
                $('.base').append(e);
                $('.base-right-cont').hide();
                // console.log(e);
            }
        });
        return false;
    });
    $('.znanya_search:before').click(function () {
        $('.znanya_search').submit();
    });
    $('.znanya_search input').keyup(function () {
        $('.znanya_search').submit();
    });
    $('.search-block-bottom a').click(function () {
        $('.znanya_search input').val($(this).data('id'));
        $('.znanya_search').submit();
        return false;
    });
    $('.znanya_search').submit(function () {
        // alert(1);
        var data = $(this).serialize();
        console.log(data);
        $.ajax({
            type: 'post',
            url: '/ajax/znanya_search.php',
            data: data,
            dataType: 'html',
            success: function (e) {
                $('.RazdelBK-main').empty();
                $('.RazdelBK-main').append(e);
            }
        });
        return false;
    });
    $('.znanya_search:before').click(function () {
        $('.znanya_search').submit();
    });
    $('.znanya_search input').keyup(function () {
        $('.znanya_search').submit();
    });
    $('.search-block-bottom a').click(function () {
        $('.znanya_search input').val($(this).data('id'));
        $('.znanya_search').submit();
        return false;
    });
    $(function () {
        $('.sendotzivy').submit(function () {
            var that = $(this);
            var data = that.serialize();
            console.log(data);
            $.ajax({
                type: 'post',
                url: '/ajax/sendotziv.php',
                data: data,
                dataType: 'json',
                success: function (json) {
                    console.log('Y');
                    console.log(json);
                    $('.sendotzivy').html('');
                    $('.sendotzivy').append('<label>Ваше сообщение отправлено! После проверки модератором ваш отзыв появится на сайте</label>');

                },

                error: function (json) {
                    console.log('N');
                    console.log(json);

                }

            });
            return false;

        });

    });

    $(".stati-info-tell").mask('7 (999) 999-99-99');

    let telInputs = document.querySelectorAll('input[name="CALLME"]');

    telInputs.forEach( (element) => {
      element.addEventListener('click', function() {
        if (element.value == '_ (___) ___--') {
          setTimeout(() => {
            element.selectionStart = element.selectionEnd = 0;
          });
        }
      });
    })

});









$(function () {
    $('.narkoForm').submit(function () {
        var that = $(this);
        var data = that.serialize();
        console.log(data);
        $.ajax({
            type: 'post',
            url: '/ajax/konsult_narkolog.php',
            data: data,
            dataType: 'json',
            success: function (json) {
                console.log('Y');
                console.log(json);
                $('.narkoForm').html('');
                $('.narkoForm').append('<label>Ваше сообщение отправлено!</label>');

            },

            error: function (json) {
                console.log('N');
                console.log(json);

            }

        });
        return false;

    });

});


$(function () {
    $('.anonimForm').submit(function () {
        var that = $(this);
        var data = that.serialize();
        console.log(data);
        $.ajax({
            type: 'post',
            url: '/ajax/anonim_form.php',
            data: data,
            dataType: 'json',
            success: function (json) {
                console.log('Y');
                console.log(json);
                $('.anonimForm').html('');
                $('.anonimForm').append('<label>Ваше сообщение отправлено!</label>');

            },

            error: function (json) {
                console.log('N');
                console.log(json);

            }

        });
        return false;

    });

});

$(function () {
    $('.sendarticle').submit(function () {
        var that = $(this);
        var data = that.serialize();
        console.log(data);
        $.ajax({
            type: 'post',
            url: '/ajax/sendarticle.php',
            data: data,
            dataType: 'json',
            success: function (json) {
                console.log('Y');
                console.log(json);
                $('.sendarticle').html('');
                $('.sendarticle').append('<label>Ваше сообщение отправлено! После проверки модератором ваш отзыв появится на сайте</label>');

            },

            error: function (json) {
                console.log('N');
                console.log(json);

            }

        });
        return false;

    });

});


$(function () {
    $('.senderrormassage').submit(function () {
        var that = $(this);
        var data = that.serialize();
        console.log(data);
        $.ajax({
            type: 'post',
            url: '/ajax/senderror.php',
            data: data,
            dataType: 'json',
            success: function (json) {
                console.log('Y');
                console.log(json);
                $('.senderrormassage').html('');
                $('.senderrormassage').append('<label>Ваше сообщение отправлено!</label>');

            },

            error: function (json) {
                console.log('N');
                console.log(json);

            }

        });
        return false;

    });

});


$(function () {
    $("input[name=REXAB]").click(function () {
        var that = $("#best_rexab");
        var data = that.serialize();
        console.log(data);
        $.ajax({
            type: 'post',
            url: '/ajax/checkbestrexab.php',
            data: data,
            dataType: 'html',
            success: function (result) {
                $('#rexabest').empty();
                console.log('Y');
                console.log(result);
                $('#rexabest').append(result)

            },

            error: function (result) {
                console.log('N');
                console.log(result);

            }

        });
        return false;

    });

});


/*Dropwdowns of MainBannerFilter, MapFilter*/

$('.filter-handler').click(function () {
    // $('.filter-dd').slideUp(300);
    $(this).next('.filter-dd').slideToggle(300);
    $(this).toggleClass('active');
});
$('.filter-dd a').click(function () {
    let val = $(this).text();
    $(this).closest('.filter-item').find('.filter-dd a').removeClass('active');
    $(this).addClass('active');

    $(this).closest('.filter-item').find('.filter-handler').text(val);
    val = $(this).data('id');
    $(this).closest('.filter-item').find('input').val(val);
    console.log($(this).closest('.filter-item').find('input').val());
    $(this).closest('.filter-item').find('input').change();

});

// я так понимаю для активации формы, времменно комментирую
// $('.filter-form .filter-dd a').click(function () {
//     $('.filter-form').submit();
// });
$('body').on('click', function (e) {
    if ($(e.target).closest('.filter-handler').length === 0) {
        $('.filter-dd').slideUp(300);
    }
});

/*mobile filter open*/

$(document).ready(function () {
    $('.option-mobile-btn').click(function () {
        event.preventDefault();
        // $('body').addClass('show-modal');
        $('.filter-form__mobile').slideToggle(300);
    });
    $('.filter-map__option-btn').click(function () {
        event.preventDefault();
        // $('body').addClass('show-modal');
        $('.filter-form__mobile').slideToggle(300);
    });
    $('.close-option').click(function () {
        // $('body').removeClass('show-modal');
        $(this).closest('.filter-mob-content-close').slideToggle(300);
        $('.filter-bottom').removeClass('active');
        $('.filter-form__mobile').hide();
    });
    $('.filter-mobile__dd-heading-ok').click(function () {
        event.preventDefault();
        $(this).closest('.filter-mob-content-close').slideToggle(300);
    });



  /* добавляем класс инпуту если введено значение (убрать бордер)*/
  $('.filter-from-to-field').on('input keyup', function (e) {
      $('.filter-from-to-field').each(function (i, input) {
          if (input.value.length) {
              $(this).addClass('active');
          } else {
              $(this).removeClass('active');
          }
      });
  });

  var nav = $('.filter_centry');  
  if (nav.length) {  

      function filterCentr(page) {
          if (page) {
              var data = $('.filter_centry').serialize() + '&NUMBER=' + page;
          } else {
              var data = $('.filter_centry').serialize();
          }
          $.ajax({
              type: 'post',//метод post или get
              url: '/ajax/filter-centry.php',//путь к обработчику
              data: data,//данные
              dataType: 'json',//тип возращаемого значения html или json. Если нужно вернуть верстку то html, если просто массив с данными или сообщение то json
              success: function (e) {//если все прошло без ошибок
                  console.log(e);//e - это то что мы получаем от обработчика
                  console.log(true);
                  centr = '';

                  $('.RebCenter-rei-block').empty();
                  var i = 0;
                  if (!page) {
                      myMapRest.geoObjects.removeAll();

                  }


                  e.OBJECT.forEach(function (center) {
                      if (i < 52) {
                          var reyting = (center.PROPERTY_TSENTR_RATE_VALUE < 30) ? 'PageCenter-red' :
                              (center.PROPERTY_TSENTR_RATE_VALUE < 50) ? 'PageCenter-yellow' :
                                  (center.PROPERTY_TSENTR_RATE_VALUE < 80) ? 'PageCenter-blue' :
                                      'PageCenter-green';

                          centr += '<div class="item"><a href="' + center.DETAIL_PAGE_URL + '">\n' +
                              '                <div class="filter-slider-item-text">\n';

                              
                          if (center.PROPERTY_TSENTR_PRICE_VALUE) {

                          centr += '           <div class="img">\n' + 

                              '                    <img src="' + center.DETAIL_PICTURE + '" alt="">\n' +

                              '                </div>\n';
                          }else{

                              centr += '           <div class="img">\n' + 

                                  '                    <img src="/upload/iblock/error.png" alt="">\n' +

                                  '                </div>\n';

                          }    

                          centr += '                        <div class="name">' + center.NAME + '</div>\n';

                          if (center.PROPERTY_TSENTR_PRICE_VALUE) {
                              
                              centr += '                    <div class="topic">' + center.PROPERTY_TSENTR_PRICE_VALUE + ' руб/месяц</div>\n';
                          }

                          if (center.PROPERTY_TSENTR_ADRESS_VALUE) {
                              centr += '                    <div class="age">' + center.PROPERTY_TSENTR_ADRESS_VALUE + '</div>\n';
                          }



                          centr += '                </div>\n' +
                              '            </a></div>';
                      }

                      i++;

                  });


                  if (!page) {
                      myCollection = new ymaps.Clusterer({
                          clusterOpenBalloonOnClick: true,
                          clusterBalloonPanelMaxMapArea: 0,
                          clusterBalloonMaxHeight: 200,
                          clusterBalloonContentLayout: customBalloonContentLayout
                      });

                      e.OBJECT.forEach(function (center) {
                          let map = '<div class="filter-map-block-item">' +
                              '<a href="' + center.DETAIL_PAGE_URL + '"><div class="filter-map-block-item-cont">' +
                              '<div class="filter-map-block-item-cont-img">' +
                              '<img src="' + center.PICTURE_MAP + '" alt="">' +
                              '</div>' +
                              '<div class="filter-map-block-item-cont-text">' +
                              '<ul><li>Название:<span>' + center.NAME + '</span></li>';

                          if (center.PROPERTY_TSENTR_ADRESS_VALUE) {
                              map += '<li>Адрес:<span>' + center.PROPERTY_TSENTR_ADRESS_VALUE + '</span></li>';
                          }

                          if (center.PROPERTY_TSENTR_PRICE_VALUE) {
                              map += '<li>Цена:<span>' + center.PROPERTY_TSENTR_PRICE_VALUE + ' руб/месяц</span></li>';
                          }

                          map += '</ul></div></div> </a>' +
                              '</div>';
                          myPlacemark = new ymaps.Placemark([center.PROPERTY_TSENTR_KARTA_VALUE[0], center.PROPERTY_TSENTR_KARTA_VALUE[1]], {
                                  // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
                                  // balloonContentHeader: "Балун метки",
                                  balloonContentBody: map,
                                  // balloonContentFooter: "Подвал",
                                  hintContent: center.NAME
                              }
                          );

                          myCollection.add(myPlacemark);
                          myMapRest.panTo([55.733835, 37.588227], {
                              flying: true

                          });
                      });
                      myMapRest.geoObjects.add(myCollection);
                  }


                  $('.RebCenter-rei-block').append(centr);



                  $(".RebCenter-rei .PageCenter-blue").circliful({
                      animationStep: 5,
                      foregroundBorderWidth: 12,
                      backgroundBorderWidth: 15,
                      foregroundColor: '#6160df',
                      backgroundColor: "#474747",
                      backgroundBorderWidth: 2,
                      textColor: '#666',
                  });

                  $(".RebCenter-rei .PageCenter-yellow").circliful({
                      animationStep: 5,
                      foregroundBorderWidth: 12,
                      backgroundBorderWidth: 15,
                      foregroundColor: '#e9cd4e',
                      backgroundColor: "#474747",
                      backgroundBorderWidth: 2,
                      textColor: '#666',
                  });

                  $(".RebCenter-rei .PageCenter-red").circliful({
                      animationStep: 5,
                      foregroundBorderWidth: 12,
                      backgroundBorderWidth: 15,
                      foregroundColor: '#fa5c86',
                      backgroundColor: "#474747",
                      backgroundBorderWidth: 2,
                      textColor: '#666',
                  });


                  $(".RebCenter-rei .PageCenter-green").circliful({
                      animationStep: 5,
                      foregroundBorderWidth: 12,
                      backgroundBorderWidth: 15,
                      foregroundColor: '#6ee275',
                      backgroundColor: "#474747",
                      backgroundBorderWidth: 2,
                      textColor: '#666',
                  });
                  if (!page) {
                      if (e.PAGES == 1) {
                          $('.RebCenter-rei-page ul').empty();
                      }
                      if (e.PAGESCOUNT > 52) {
                          if (e.PAGES == 1) {
                              e.PAGES = e.PAGESCOUNT / 52;
                          }

                          $('.RebCenter-rei-page ul').empty();
                          let i = 0;
                          while (i < e.PAGES) {
                              $('.RebCenter-rei-page ul').append('<li><a href="javascript:void()" data-id="' + (i + 1) + '" class="' + (i == 0 ? 'active' : '') + '">' + (i + 1) + '</a></li>\n')
                              i++;
                          }
                      }
                  } else {
                      $('.RebCenter-rei-page ul a').removeClass('active');
                      $('.RebCenter-rei-page ul a[data-id=' + e.PAGE + ']').addClass('active');
                  }
              },

              error: function (e) {//если были ошибки при отправки или в обработчике
                  console.log(e);//e - это то что мы получаем от обработчика
                  console.log(false);
              }
          });

      };

      $('.filter_centry input').change(function () {
          filterCentr();
          return false;
      });

      $('body').on('click', '.filter .RebCenter-rei-page a', function () {
          filterCentr($(this).text());
          return false;
      });

  };


  $('.RebCenter-filter .filter-bottom .cont form .filter .item').click(function(){
    $('.RebCenter-filter .filter-bottom .cont form .filter .item').removeClass('active')
    $(this).toggleClass('active')
  });

  $('.filter .item .item-cont').click(function () {
      let val = $(this).text();
      val = $(this).data('id');
      $(this).closest('.RebCenter-filter .filter-bottom .cont form .filter').find('input').val(val);
      console.log($(this).closest('.RebCenter-filter .filter-bottom .cont form .filter').find('input').val());
      $(this).closest('.RebCenter-filter .filter-bottom .cont form .filter').find('input').change();

  });

  var nav = $('.filter_klinik');  
  if (nav.length) {  

      function filterKlinic(page) {
          if (page) {
              var data = $('.filter_klinik').serialize() + '&NUMBER=' + page;
          } else {
              var data = $('.filter_klinik').serialize();
          }
          $.ajax({
              type: 'post',//метод post или get
              url: '/ajax/filter-klinic.php',//путь к обработчику
              data: data,//данные
              dataType: 'json',//тип возращаемого значения html или json. Если нужно вернуть верстку то html, если просто массив с данными или сообщение то json
              success: function (e) {//если все прошло без ошибок
                  console.log(e);//e - это то что мы получаем от обработчика
                  console.log(true);
                  centr = '';

                  $('.RebCenter-rei-block').empty();
                  var i = 0;
                  if (!page) {
                      myMapRest.geoObjects.removeAll();

                  }


                  e.OBJECT.forEach(function (center) {
                      if (i < 52) {
                          var reyting = (center.PROPERTY_TSENTR_RATE_VALUE < 30) ? 'PageCenter-red' :
                              (center.PROPERTY_TSENTR_RATE_VALUE < 50) ? 'PageCenter-yellow' :
                                  (center.PROPERTY_TSENTR_RATE_VALUE < 80) ? 'PageCenter-blue' :
                                      'PageCenter-green';

                          centr += '<div class="item"><a href="' + center.DETAIL_PAGE_URL + '">\n' +
                              '                <div class="filter-slider-item-text">\n';

                              
                          if (center.PROPERTY_KLINIKA_PRICE_VALUE) {

                          centr += '           <div class="img">\n' + 

                              '                    <img src="' + center.DETAIL_PICTURE + '" alt="">\n' +

                              '                </div>\n';
                          }else{

                              centr += '           <div class="img">\n' + 

                                  '                    <img src="/upload/iblock/error.png" alt="">\n' +

                                  '                </div>\n';

                          }    

                          centr += '                        <div class="name">' + center.NAME + '</div>\n';

                          if (center.PROPERTY_KLINIK_PRICE_VALUE) {
                              
                              centr += '                    <div class="topic">' + center.PROPERTY_KLINIK_PRICE_VALUE + ' руб/день</div>\n';
                          }

                          if (center.PROPERTY_KLINIK_ADRESS_VALUE) {
                              centr += '                    <div class="age">' + center.PROPERTY_KLINIK_ADRESS_VALUE + '</div>\n';
                          }



                          centr += '                </div>\n' +
                              '            </a></div>';
                      }

                      i++;

                  });


                  if (!page) {
                      myCollection = new ymaps.Clusterer({
                          clusterOpenBalloonOnClick: true,
                          clusterBalloonPanelMaxMapArea: 0,
                          clusterBalloonMaxHeight: 200,
                          clusterBalloonContentLayout: customBalloonContentLayout
                      });

                      e.OBJECT.forEach(function (center) {
                          let map = '<div class="filter-map-block-item">' +
                              '<a href="' + center.DETAIL_PAGE_URL + '"><div class="filter-map-block-item-cont">' +
                              '<div class="filter-map-block-item-cont-img">' +
                              '<img src="' + center.PICTURE_MAP + '" alt="">' +
                              '</div>' +
                              '<div class="filter-map-block-item-cont-text">' +
                              '<ul><li>Название:<span>' + center.NAME + '</span></li>';

                          if (center.PROPERTY_KLINIK_ADRESS_VALUE) {
                              map += '<li>Адрес:<span>' + center.PROPERTY_KLINIK_ADRESS_VALUE + '</span></li>';
                          }

                          if (center.PROPERTY_KLINIKA_PRICE_VALUE) {
                              map += '<li>Цена:<span>' + center.PROPERTY_KLINIKA_PRICE_VALUE + ' руб/месяц</span></li>';
                          }

                          map += '</ul></div></div> </a>' +
                              '</div>';
                          myPlacemark = new ymaps.Placemark([center.PROPERTY_KLINIK_MAP_VALUE[0], center.PROPERTY_KLINIK_MAP_VALUE[1]], {
                                  // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
                                  // balloonContentHeader: "Балун метки",
                                  balloonContentBody: map,
                                  // balloonContentFooter: "Подвал",
                                  hintContent: center.NAME
                              }
                          );

                          myCollection.add(myPlacemark);
                          myMapRest.panTo([55.733835, 37.588227], {
                              flying: true

                          });
                      });
                      myMapRest.geoObjects.add(myCollection);
                  }


                  $('.RebCenter-rei-block').append(centr);



                  $(".RebCenter-rei .PageCenter-blue").circliful({
                      animationStep: 5,
                      foregroundBorderWidth: 12,
                      backgroundBorderWidth: 15,
                      foregroundColor: '#6160df',
                      backgroundColor: "#474747",
                      backgroundBorderWidth: 2,
                      textColor: '#666',
                  });

                  $(".RebCenter-rei .PageCenter-yellow").circliful({
                      animationStep: 5,
                      foregroundBorderWidth: 12,
                      backgroundBorderWidth: 15,
                      foregroundColor: '#e9cd4e',
                      backgroundColor: "#474747",
                      backgroundBorderWidth: 2,
                      textColor: '#666',
                  });

                  $(".RebCenter-rei .PageCenter-red").circliful({
                      animationStep: 5,
                      foregroundBorderWidth: 12,
                      backgroundBorderWidth: 15,
                      foregroundColor: '#fa5c86',
                      backgroundColor: "#474747",
                      backgroundBorderWidth: 2,
                      textColor: '#666',
                  });


                  $(".RebCenter-rei .PageCenter-green").circliful({
                      animationStep: 5,
                      foregroundBorderWidth: 12,
                      backgroundBorderWidth: 15,
                      foregroundColor: '#6ee275',
                      backgroundColor: "#474747",
                      backgroundBorderWidth: 2,
                      textColor: '#666',
                  });
                  if (!page) {
                      if (e.PAGES == 1) {
                          $('.RebCenter-rei-page ul').empty();
                      }
                      if (e.PAGESCOUNT > 52) {
                          if (e.PAGES == 1) {
                              e.PAGES = e.PAGESCOUNT / 52;
                          }

                          $('.RebCenter-rei-page ul').empty();
                          let i = 0;
                          while (i < e.PAGES) {
                              $('.RebCenter-rei-page ul').append('<li><a href="javascript:void()" data-id="' + (i + 1) + '" class="' + (i == 0 ? 'active' : '') + '">' + (i + 1) + '</a></li>\n')
                              i++;
                          }
                      }
                  } else {
                      $('.RebCenter-rei-page ul a').removeClass('active');
                      $('.RebCenter-rei-page ul a[data-id=' + e.PAGE + ']').addClass('active');
                  }
              },

              error: function (e) {//если были ошибки при отправки или в обработчике
                  console.log(e);//e - это то что мы получаем от обработчика
                  console.log(false);
              }
          });

      };

      $('.filter_klinik input').change(function () {
          filterKlinic();
          return false;
      });

      $('body').on('click', '.filter .RebCenter-rei-page a', function () {
          filterKlinic($(this).text());
          return false;
      });

  };


  /*соответствие стандартам качества */
  $(function () {
      var w = $(window).width();
      var h = $(window).height();
      if (w <= 5000 && w >= 768) {
          $(document).ready(function () {
              $('.kach-list-block ul li').mouseover(function () {

                  var data = $(this).data('id');
                  var timer = setTimeout(function () {
                      $('.kach-list-block-item[data-id=' + data + ']').addClass('active');
                  }, 1000);
              });
              $('.kach-list-block ul li').mouseleave(function () {
                  var data = $(this).data('id');
                  var timerTwo = setTimeout(function () {
                      $('.kach-list-block-item[data-id=' + data + ']').removeClass('active');
                  }, 1000);
              });
          });
      }
  });


  $(function () {
      var w = $(window).width();
      var h = $(window).height();
      if (w <= 767 && w >= 320) {
          $(document).ready(function () {
              $('.kach-list-block ul li').click(function () {
                  var data = $(this).data('id');
                  $('.kach-list-block-item[data-id=' + data + ']').show();
              });
              $('.kach-list-block-item').click(function () {
                  $(this).fadeOut();
              });
          });

          var statiswiper = new Swiper('.base-left-slider', {
              slidesPerView: 'auto',
              loop: true,
              observer: true,
              observeParents: true,
          });
      }
  });

});

$(document).ready(function () {
    if ($('#scrollTop').length > 0) {
        var blockShowScroll = $('#scrollTop').offset().top;
        blockClick = $('.button-scroll-top');
        $(document).on('scroll', function () {
            var scrollDoc = $(document).scrollTop();
            if (scrollDoc > blockShowScroll) { // если позиция скролла страницы больше, то ставим фикс
                blockClick.addClass('active');
            } else {
                blockClick.removeClass('active');
            }
        });
        $(".button-scroll-top-block").click(function () {
            $('html, body').animate({scrollTop: 0}, 'slow');
        });
    }


  /*структура*/

  $('.struktura-block-left-title .list ul li a').click(function(){
    $('.struktura-block-left-title .list ul li a').removeClass('active')
    $(this).toggleClass('active')
    $('.struktura-block-left-cont').removeClass('active')
    var data = $(this).data('id');
    $('.struktura-block-left-cont[data-id='+data+']').toggleClass('active');
  });

  //после загрузки веб-страницы


  $(function () {
      $('.orderCALLTEL').submit(function () {
          var that = $(this);
          var data = that.serialize();
          console.log(data);
          $.ajax({
              type: 'post',
              url: '/ajax/ordercall.php',
              data: data,
              dataType: 'json',
              success: function (json) {
                  console.log('Y');
                  console.log(json);
                  $('.orderCALLTEL').html('');
                  $('.orderCALLTEL').append('<label>Ваше обращение отправлено и будет рассмотрено в ближайшее время</label>');

              },

              error: function (json) {
                  console.log('N');
                  console.log(json);

              }

          });
          return false;

      });

  });


  $(function () {
      $('.newRexabForm').submit(function () {
          var that = $(this);
          var data = that.serialize();
          console.log(data);
          $.ajax({
              type: 'post',
              url: '/ajax/newRexab.php',
              data: data,
              dataType: 'json',
              success: function (json) {
                  console.log('Y');
                  console.log(json);
                  $('.newRexabForm').html('');
                  $('.newRexabForm').append('<label>Ваше обращение отправлено и будет рассмотрено в ближайшее время</label>');

              },

              error: function (json) {
                  console.log('N');
                  console.log(json);

              }

          });
          return false;

      });

  });

  $('.region-info-list-block-left ul li').click(function(){
    $('.region-info-list-block-left ul li').removeClass('active')
    $(this).toggleClass('active')
    $('.region-info-list-block-right ul').removeClass('active')
    var data = $(this).data('id');
    $('.region-info-list-block-right ul[data-id='+data+']').toggleClass('active');
  });

});

$(document).ready(function(){
  function popupStati(){
    $(".stati-popup").addClass("active");
  }
  setTimeout(popupStati, 3000)
});

$(document).ready(function(){
  $(".stati-popup-block .close").click(function(){
    $(".stati-popup").removeClass('active')
  })
});


/*$(document).ready(function(){
  $(function(){
    $(".tell-block input").mask("+7(999) 999-9999");
  });
});*/

$(document).ready(function() {
  var progressbar = $('#progressbar'),
    podpicy = $('.progress-title').text(),
    podpicyMax = progressbar.attr('max', podpicy),
    max = progressbar.attr('max'),
    
    value = progressbar.val();

    var loading = function() {

        if(value <= max-10000 || value == max) {
          value += 10000
        }

        if(value <= max-1000 || value == max) {
          value += 1000
        }

        if(value <= max-100 || value == max) {
          value += 100
        }

        if(value <= max-10 || value == max) {
          value += 1
        }

        value = value + 1;
        addValue = progressbar.val(value);

        $('.progress-title').html(value + '');
        if (value == max) {
            clearInterval(animate);
        }
    };

    var animate = setInterval(function() {
        loading();
    }, 1);
});

$(document).ready(function() {
  $('.copybutton').click(function(){
    if (!$('#copythis1 span').data('status')) {
      $('#copythis1 span').html('Готово');
      $('#copythis1 span').data('status', true);
    }
    else {
      $('#copythis1 span').html('Скопировать ссылку');
      $('#copythis1 span').data('status', false);
    }
  });
});
$(document).ready(function() {
  new Clipboard('.copybutton', {
    text: function(trigger) {
      return trigger.previousElementSibling.getAttribute('href');
    }
  });
});

$(document).ready(function(){
  $('.clinics-search-block .close').click(function(){
    $('.clinics-form').fadeOut('slow');
    $('.overlay').fadeOut('slow');
    $('html').removeAttr('style');
  })
});

$(document).ready(function() {
  var navReb = $('.clinics-map');  
  if (navReb.length) {  
    var postionRebCenter = $('.clinics-map').offset().top,
        heightRebCenter = $('.clinics-map').height();
        infoRebCenter = $('.RebCenter-info').height();
    $(document).on('scroll', function (){
      var scrollRebCenter = $(document).scrollTop();
      if(scrollRebCenter  > postionRebCenter && scrollRebCenter < (postionRebCenter + heightRebCenter - infoRebCenter) ) {
         $('.clinics-map .clinics-map-button').addClass('active')
         }else {
            $('.clinics-map .clinics-map-button').removeClass('active')
         }
    });
  }
});

$(document).ready(function(){
  var clinic_btn = $('.clinics-map-button');  
  if (clinic_btn.length) {  
    $(".clinics-map-button").click(function () {
      $('.clinics-map-block').fadeIn();
      $('html, header').width($('html, header').width());
      $('html').css('overflow', 'hidden');
    });
  };
  var clinic_btn_cl = $('.clinics-map-block-close');  
  if (clinic_btn_cl.length) {
    $(".clinics-map-block-close").click(function () {
      $('.clinics-map-block').fadeOut();
      $('html').removeAttr('style')
    });
  };
  var clinic_block = $('.clinics-search-block');  
  if (clinic_block.length) {
    $('.clinics-search-block .close').click(function(){
      $('.clinics-form').fadeOut('slow');
      $('.overlay').fadeOut('slow');
      $('html').removeAttr('style');
    });
  };
  $('.clinics-search-block .search-button .item').click(function(){
    $('.clinics-search-block .search-button .item').removeClass('active')
    $(this).toggleClass('active')
    var data = $(this).data('id');
    $('.clinics-search-block .search-list ul').removeClass('active')
    $('.clinics-search-block .search-list ul[data-id='+data+']').toggleClass('active');
  });

  $('.list-search').click(function(){
    $('.overlay').fadeIn('active')
    $('.search-menu-popup-desc').addClass('active')
  });

  $('.search-menu-popup-desc .button-close').click(function(){
    $('.overlay').fadeOut('active')
    $('.search-menu-popup-desc').removeClass('active')
  });

  $('.popup-search .close').click(function(){
    $('.popup-search').removeClass('active')
  });

});


$(document).mouseup(function (e) {
    var container = $(".search-menu-popup-desc-block");
    if (container.has(e.target).length === 0){
        $('.search-menu-popup-desc').removeClass('active')
        $('.overlay').fadeOut()
    };
    $('.menu-block-mob-bottom .item-link').click(function(e){
        $('.menu-block-mob-bottom .item-link').removeClass('active');
        $(this).addClass('active');    
    });
    $('.menu-block-mob-bottom .item-list').click(function(){
        $(this).toggleClass('active')
        var data = $(this).data('id');
        $('.item-popup[data-id='+data+']').toggleClass('active');
    });

  $(function () {
      var w = $(window).width();
      var h = $(window).height();
      if (w <= 767 && w >= 300) {
        $(document).ready(function() {
        var nav = $('.menu-block-mob-bottom');  
        if (nav.length) {  
          var MenuFix = $('.menu-block-mob-bottom').offset().top;
          MenuFixBlock = $('.menu-block-mob-bottom');
          MenuFixBlock2 = $('.RazdelBK-menu');
          MenuFixBlock3 = $('.boicy-black');
          $(document).on('scroll', function () {
                    var scrollDoc = $(document).scrollTop();
                    if (scrollDoc > MenuFix) {
                        MenuFixBlock.addClass('active');
                        MenuFixBlock2.addClass('active');
                        MenuFixBlock3.addClass('active');
                        $('.narcom-nav').addClass('active');
                        $('.main-page-baner-cont .main-button').addClass('active');
                        $('.RebCenter-baner-cont .button-mob').addClass('active');
                    } else {
                        MenuFixBlock.removeClass('active');
                        MenuFixBlock2.removeClass('active');
                        MenuFixBlock3.removeClass('active');
                        $('.narcom-nav').removeClass('active');
                        $('.main-page-baner-cont .main-button').removeClass('active');
                        $('.RebCenter-baner-cont .button-mob').removeClass('active');
                    }
          });
        };
        });  
      }
  }); 

  $('.menu-block ul li a').click(function(){
    var data = $(this).data('id');
    $(this).find($('.list[data-id='+data+']').toggleClass('active'));
  });

  $('.stati .boicy-info .stati-text-publication .item-block .text .author-button').click(function(){
    var data = $(this).data('id');
    $(this).toggleClass('active');
    $(this).find($('.author-info[data-id='+data+']').toggleClass('active'));
  });

});

$(document).ready(function() {
  $(function() {
    $('.lazy').Lazy({
      // your configuration goes here
      scrollDirection: 'vertical',
      effect: 'fadeIn',
      effectTime: 500,
      visibleOnly: true,
      onError: function(element) {
          console.log('error loading ' + element.data('src'));
      }
    });
    var lazy = $('.lazy').Lazy({ chainable: false });

    var attributeName = lazy.config('attribute');  // get
    lazy.config('effect', 'show'); 
  });
  $(function() {
    $('.lazy-center').Lazy({});
  });
});

$(document).ready(function(){
  $('.clinics-map-filter').click(function(){
    $('.clinics-form').fadeIn('slow');
    $('.overlay').fadeIn('slow');
    $('html, header').width($('html, header').width());
    $('html').css('overflow', 'hidden');
    $(document).mouseup(function (e) {
        var container = $(".clinics-search-block");
        if (container.has(e.target).length === 0){
            $('.clinics-form').hide();
            $('.overlay').fadeOut();
            $('html').removeAttr('style');
        }
    });
  })
});

$(document).ready(function(){
  $('.region_link').click(function(){

    $('.region_link-block').fadeIn('slow');
    $('.overlay').fadeIn('slow');
    $('html, header').width($('html, header').width());
    $('html').css('overflow', 'hidden');
    $(document).mouseup(function (e) {
        var container = $(".clinics-search-block");
        if (container.has(e.target).length === 0){
            $('.region_link-block').hide();
            $('.overlay').fadeOut();
            $('html').removeAttr('style');
        }
    });

  })
});

$(document).ready(function(){
  $('.clinics-search-block .close').click(function(){
    $('.region_link-block').fadeOut('slow');
    $('.overlay').fadeOut('slow');
    $('html').removeAttr('style');
  })


  $('.reviews .bottom .item').click(function(){
    $('.reviews-show-popup').addClass('active');
    var data = $(this).data('id');
    $('.reviews-show-popup-cont .item[data-id='+data+']').addClass('active');
    $('html, header').width($('html, header').width());
    $('html').css('overflow', 'hidden');
    $('.reviews-show-popup-close').click(function(){
      $('.reviews-show-popup, .reviews-show-popup-cont .item').removeClass('active');
      $('html').removeAttr('style');
    });
  });


  $('.pageCenter-popup-i').hide();
  $('.pageCenter-popup-rating').hide();
  $('.pageCenter-popup-tell').hide();
   
  $(function () {
      var w = $(window).width();
      var h = $(window).height();
      if (w <= 767 && w >= 320) { 


        $('.contacts-cont .main .right .button a').click(function(){
          $('.pageCenter-button-info-popup, .pageCenter-popup-tell').addClass('active');
          $('html, header').width($('html, header').width());
          $('html').css('overflow', 'hidden');

          $('.pageCenter-popup-close').click(function(){
            $('.pageCenter-button-info-popup, .pageCenter-popup-tell').removeClass('active');
            $('html').removeAttr('style');
          })
        });

        $('.pageCenter-main-block-left-tell-block .button .tell-mob').click(function(){
          $('.pageCenter-button-info-popup, .pageCenter-popup-tell').addClass('active');
          $('html, header').width($('html, header').width());
          $('html').css('overflow', 'hidden');

          $('.pageCenter-popup-close').click(function(){
            $('.pageCenter-button-info-popup, .pageCenter-popup-tell').removeClass('active');
            $('html').removeAttr('style');
          })
        });

        $('.pageCenter-button-info').click(function(){
          $('.pageCenter-button-info-popup, .pageCenter-popup-i').addClass('active');
          $('html, header').width($('html, header').width());
          $('html').css('overflow', 'hidden');

          $('.pageCenter-popup-close').click(function(){
            $('.pageCenter-button-info-popup, .pageCenter-popup-i').removeClass('active');
            $('html').removeAttr('style');
          })
        });

        $('.pageCenter-rating-cont .button').click(function(){
          $('.pageCenter-button-info-popup, .pageCenter-popup-rating').addClass('active');
          $('html, header').width($('html, header').width());
          $('html').css('overflow', 'hidden');

          $('.pageCenter-popup-close').click(function(){
            $('.pageCenter-button-info-popup, .pageCenter-popup-rating').removeClass('active');
            $('html').removeAttr('style');
          })
        });

        $(window).scroll(function() {
          var height = $(window).scrollTop();
          if(height > 1000){
            $('.pageCenter-button-info').addClass('active');
          } else{
            $('.pageCenter-button-info').removeClass('active');
          }
        });

        $(window).scroll(function() {
          var height = $(window).scrollTop();
          if(height > 500){
            $('.base-page-sections-search').addClass('active');
          } else{
            $('.base-page-sections-search').removeClass('active');
          }
        });

      }
  });

});

$(document).ready(function() {
  var statiswiper = new Swiper('.about-slider-main', {
      spaceBetween: 35,
      slidesPerView: '4',
      loop: false,
      observer: true,
      observeParents: true,
      speed: 2000,
      navigation: {
          nextEl: '.history-slider-button-next',
          prevEl: '.history-slider-button-prev',
          clickable: true,
       },
      breakpoints: {
        767: {
          observer: true,
          observeParents: true,
          spaceBetween: 15,
          slidesPerView: 'auto',
        },
      },
    });

});

$(document).ready(function() {
  var statiswiper = new Swiper('.history-slider', {
      spaceBetween: 35,
      slidesPerView: '3',
      loop: false,
      observer: true,
      observeParents: true,
      speed: 2000,
      navigation: {
          nextEl: '.history-slider-button-next',
          prevEl: '.history-slider-button-prev',
          clickable: true,
       },
      breakpoints: {
        767: {
          observer: true,
          observeParents: true,
          spaceBetween: 10,
          slidesPerView: 2,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
      },
    });

});

$(document).ready(function() {
  var statiswiper = new Swiper('.history-slider-main', {
      spaceBetween: 35,
      slidesPerView: '4',
      loop: false,
      observer: true,
      observeParents: true,
      speed: 2000,
      navigation: {
          nextEl: '.history-slider-button-next',
          prevEl: '.history-slider-button-prev',
          clickable: true,
       },
      breakpoints: {
        767: {
          observer: true,
          observeParents: true,
          spaceBetween: 15,
          slidesPerView: 'auto',
        },
      },
    });

});

$(document).ready(function() {
  var statiswiper = new Swiper('.reviews-slider', {
      spaceBetween: 30,
      slidesPerView: 'auto',
      loop: false,
      observer: true,
      observeParents: true,
      speed: 2000,
      breakpoints: {
        767: {
          observer: true,
          observeParents: true,
          spaceBetween: 15,
        },
      },
    });

});

$(document).ready(function() {
  var swiper = new Swiper('.license-slider', {
    slidesPerView: 1,
    centeredSlides: true,
    effect: 'fade',
    spaceBetween: 0,
    pagination: {
      el: '.license-slider-pag',
      clickable: true,
    },
  });
});

$(document).ready(function() {
  var statiswiper = new Swiper('.room-slider', {
      spaceBetween: 0,
      slidesPerView: 1,
      effect: 'fade',
      speed: 2000,
      loop: false,
      autoplay: true,
      observer: true,
      observeParents: true,
      navigation: {
          nextEl: '.room-slider-button-next',
          prevEl: '.room-slider-button-prev',
          clickable: true,
       },
      breakpoints: {
        767: {
          observer: true,
          observeParents: true,
        },
      },
    });

});


$(document).ready(function() {
  $(function () {
      var w = $(window).width();
      if (w <= 767) {
        $('.metod-cont .item .right').hide();
        $('.metod-cont .item .left .button').click(function(){
          if($(this).hasClass('active')){
            $('.metod-cont .item .left .button').removeClass('active')
            var data = $(this).data('id');
            $('.metod-cont .item .right').hide();
          }else{
            $(this).toggleClass('active')
            var data = $(this).data('id');
            $('.metod-cont .item .right[data-id='+data+']').show();
          }

        });
      }
  }); 

  $('.uslugy .button-show').click(function(){
    $('.uslugy').addClass('active');
    $(this).css('display', 'none')
  });

  $('.block-info .button-show').click(function(){
    $(this).css('display', 'none');
    var data = $(this).data('id');
    $('.block-info[data-id='+data+']').addClass('active');
  });

  $('.main-page-low-price-cont .button-show').click(function(){
    $('.main-page-low-price-cont ').addClass('active');
    $(this).css('display', 'none')
  });
  $('.main-page-stage-cont .left .button-show').click(function(){
    $('.main-page-stage-cont .left').addClass('active');
    $(this).css('display', 'none')
  });

  $('.block-info-show').hide();
  $('.block-info-show .item').hide();
  $('.block-info-cont .item .button').click(function(){
    var data = $(this).data('id');
    $('.block-info').css('z-index', '1000');
    $('.block-info-show').fadeIn();
    $('.block-info-show .item[data-id='+data+']').fadeIn();
    $('.block-info-show .item .close').click(function(){
      $('.block-info-show').fadeOut();
      $('.block-info-show .item').fadeOut();
      $('.block-info').css('z-index', '1');
    });
  });

  $('.block-info-show .item .button').click(function(){
    var data = $(this).data('id');
    $('.block-info-show .item').hide();
    $('.block-info-show .item[data-id='+data+']').fadeIn();
    $('.block-info-show .item .close').click(function(){
      $('.block-info-show').fadeOut();
      $('.block-info-show .item').fadeOut();
    });
  });

  $('.menu-show').hide();
  $(".stati-left nav ul li a").click(function(){
    $(this).toggleClass('active')
    var $content = $(this).next();
    $content.slideToggle(400);
    $('.menu-show').not($content).slideUp();

  });

  $('.menu-show').hide();
  $(".RebCenter-information-cont .left nav ul li a").click(function(){
    $(this).toggleClass('active')
    var $content = $(this).next();
    $content.slideToggle(400);
    $('.menu-show').not($content).slideUp();

  });

  $('.menu-show').hide();
  $(".narcom-content-block .left nav ul li a").click(function(){
    var $content = $(this).next();
    $content.slideToggle(400);
    $('.menu-show').not($content).slideUp();

  });

  $(".main-page-information-cont .left nav ul li a").click(function(){
    var $content = $(this).next();
    $content.slideToggle(400);
    $('.menu-show').not($content).slideUp();

  });


  $(".stati-mob-menu").click(function(){
    $('.stati-menu').addClass('active');
    $('html, header').width($('html, header').width());
    $('html').css('overflow', 'hidden');
    $('.stati-menu-title-mob .close').click(function(){
      $('.stati-menu').removeClass('active');
      $('html').removeAttr('style');
    })
  });

  $(".narcom-nav .title").click(function(){
    $('.left-menu').addClass('active');
    $('html, header').width($('html, header').width());
    $('html').css('overflow', 'hidden');
    $('.left-menu .close').click(function(){
      $('.left-menu').removeClass('active');
      $('html').removeAttr('style');
    })
  });




  /*$(document).ready(function(){
    $(function(){
      $(".stati-info-tell").mask("+7(999) 999-9999");
    });
  });*/

  $(function () {
      var w = $(window).width();
      var h = $(window).height();
      if (w <= 767 && w >= 320) {

          var statiswiper = new Swiper('.recommend-cont', {
              spaceBetween: 15,
              slidesPerView: 'auto',
              loop: false,
              observer: true,
              observeParents: true,
              speed: 2000,
          });

          var statiswiper = new Swiper('.baners-block', {
              spaceBetween: 0,
              slidesPerView: 1,
              loop: false,
              observer: true,
              observeParents: true,
              speed: 2000,
              pagination: {
                el: '.baners-block-pag',
                clickable: true,
              },
              navigation: {
                nextEl: '.pageCenter-main-slider-next',
                prevEl: '.pageCenter-main-slider-prev',
              },
          });

          var statiswiper = new Swiper('.base-nav', {
              spaceBetween: 15,
              slidesPerView: 'auto',
              loop: false,
              observer: true,
              observeParents: true,
              speed: 2000,
          });

      }
  });

});


$(document).ready(function(){
    $('.form-calc').submit(function() {
        var data = $(this).serialize();
        console.log(data);
        $.ajax({
            type: 'post',
            url: '/ajax/calc.php',
            data: data,
            dataType: 'html',
            success: function (e) {
                console.log('Y');
                console.log(e);
                $('.price-num-inter').empty();
                $('.price-num-inter').append(e);
            },

            error: function (e) {
                console.log('N');

            }
        });
        return false;
    });


$(function () {
    $('.add-rev-stati').submit(function () {
        var that = $(this);
        var data = that.serialize();
        console.log(data);
        $.ajax({
            type: 'post',
            url: '/ajax/add-rev-stati.php',
            data: data,
            dataType: 'json',
            success: function (json) {
                console.log('Y');
                console.log(json);
                $('.add-rev-stati').html('');
                $('.add-rev-stati').append('<p>Ваш отзыв отправлен</p>');

            },

            error: function (json) {
                console.log('N');
                console.log(json);

            }

        });
        return false;

    });

});

$(function () {
    var w = $(window).width();
    if (w >= 767) {

      $(document).mouseup(function (e) {
          var container = $(".down-menu");
          if (container.has(e.target).length === 0){
              $('.menu-info-nav ul li').removeClass('active');
              $('.menu-info-link').removeClass('active')
              $('.active_fix').toggleClass('active');
              $('.menu-info').hide();
              $('.overlay-menu').hide();
          }
      });  

      
      $('.down-menu a').click(function(){

        $('.down-menu').removeClass('active');
        $(this).addClass('active');
        $(".menu-info").css("display","none");
        $(this).parent('.down-menu').find(".menu-info").css("display","flex");
        $(".overlay-menu").fadeIn();    
        $('.menu-info-link').removeClass('active');
        $('.menu-info-nav ul li').removeClass('active');
        $('.active_fix').addClass('active')

      });

      $('.menu-info-nav ul li').click(function(){
        $('.active_fix').removeClass('active')
        $('.menu-info-nav ul li').removeClass('active');
        $(this).toggleClass('active');
        var data = $(this).data('id');
        $('.menu-info-link').removeClass('active')
        $('.menu-info-link[data-id='+data+']').toggleClass('active');

      });
      
    }else{
      $('.down-menu a').click(function(){
        var $content = $(this).next();
        $content.slideToggle(400);
        $('.menu-info').not($content).slideUp();
      });
      $('.menu-info-nav ul li').click(function(){
        $('.menu-info-nav ul li').removeClass('active');
        $(this).toggleClass('active');
        var data = $(this).data('id');
        $('.menu-info-link').removeClass('active')
        $('.menu-info-link[data-id='+data+']').toggleClass('active');
      });
    };
}); 

$(function () {
    var w = $(window).width();
    if (w < 767) {
      $(".menu-block-mob-bottom a").click(function(){

        $('body').toggleClass("hidden");

        var data = $(this).data('id');        
        $('.menu-info:not([data-id=' + data + '])').removeClass('active');
        $('.menu-info[data-id='+data+']').toggleClass('active'); 

      });

      $(".item-link").click(function(){
        $(".item-link").removeClass("active")
        $(this).toggleClass("active");
      });

      $(".menu-info-nav-title").click(function(){
        $(this).toggleClass("active")
        var data = $(this).data('id');
        $('.menu-info-link[data-id='+data+']').toggleClass('active');
      });

      $(".base-page-sections-search").click(function(){
        $('html, header').width($('html, header').width());
        $('html').css('overflow', 'hidden');
        $('.base-page-sections-popup').addClass('active')
        $('.base-page-sections-popup .top .close').click(function(){
          $('.base-page-sections-popup').removeClass('active');
          $('html').removeAttr('style');
        })
      });

    }
}); 

$.extend($.lazyLoadXT, {
  edgeY:  200,
  srcAttr: 'data-src'
}); 




$('.btn-req').click(function(e){
  e.preventDefault();
  $('.popup-tell-desc').addClass('active');
  $('.popup-tell-desc-block').addClass('active');
  $('html, header').width($('html, header').width());
  $('html').css('overflow', 'hidden');

  $('.popup-tell-desc .close').click(function(){
    $('.popup-tell-desc').removeClass('active');
    $('.popup-tell-desc-block').removeClass('active');
    $('html').removeAttr('style');
  })
});

});

$(document).ready(function() {
  var mainSliderOne = new Swiper('.main-page-slider-one', {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: 'true',
    observer: true,
    observeParents: true,
    speed: 1000,
    loop: true,
    });
  var mainSliderTwo = new Swiper('.main-page-slider-two', {
    spaceBetween: 0,
    slidesPerView: 1,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: true,
    loopedSlides: 1,
    pagination: {
      el: '.main-page-slider-two-bull',
      type: 'fraction',
    },
    pagination: {
      el: '.main-page-slider-two-pag',
      clickable: true,
    },
    navigation: {
      nextEl: '.main-page-slider-two-next',
      prevEl: '.main-page-slider-two-prev',
    },
  });
  mainSliderTwo.controller.control = mainSliderOne;
  mainSliderOne.controller.control = mainSliderTwo;



var statiswiper = new Swiper('.news-menu-slider', {
    spaceBetween: 10,
    slidesPerView: 'auto',
    loop: false,
    observer: true,
    observeParents: true,
    freeMode: true,
    breakpoints: {
      767: {
        observer: true,
        observeParents: true,
      },
    },
});
});
$(document).ready(function() {
  $('.btn-spec_main').click(function(){
    $('.form-konsult_spec').fadeIn('slow');
    $('.form-block').fadeIn('slow');
    $('html, header').width($('html, header').width());
    $('html').css('overflow', 'hidden');
  })
  $('.form-close').click(function(){
    $('.form-konsult_spec').fadeOut('slow');
    $('html').removeAttr('style');
  })


$(function () {
    $('.form-konsult-spec').submit(function () {

        var that = $(this);
        var data = that.serialize();
        $.ajax({
            type: 'post',
            url: '/ajax/form-konsult-spec.php',
            data: data,
            dataType: 'json',
            success: function (json) {
                console.log('Y');
                console.log(json);
                $('.form-konsult-spec').html('');
                $('.form-konsult-spec').append('<label style="margin-top: 5rem">Сообщение успешно отправлено</label>');

            },

            error: function (json) {
                console.log('N');
                console.log(json);

            }

        });
        return false;


    });

});
});

$(document).ready(function() {
  var statiswiper = new Swiper('.about-slider-lic', {
      spaceBetween: 35,
      slidesPerView: '4',
      loop: false,
      observer: true,
      observeParents: true,
      speed: 2000,
      navigation: {
          nextEl: '.about-slider-lic-button-next',
          prevEl: '.about-slider-lic-button-prev',
          clickable: true,
       },
      breakpoints: {
        767: {
          observer: true,
          observeParents: true,
          spaceBetween: 15,
          slidesPerView: 'auto',
        },
      },
    });


  $(function () {
      $('.form-vakansii').submit(function () {

          var that = $(this);
          var data = that.serialize();
          $.ajax({
              type: 'post',
              url: '/ajax/form-vakansii.php',
              data: data,
              dataType: 'json',
              success: function (json) {
                  console.log('Y');
                  console.log(json);
                  $('.form-vakansii').html('');
                  $('.form-vakansii').append('Ваше сообщение отправлено!');

              },

              error: function (json) {
                  console.log('N');
                  console.log(json);

              }

          });
          return false;


      });

  });

  $('.vakansii-cv-main .cont .button').click(function(){
    $(this).hide();
    var data = $(this).data('id');
    $('.vakansii-cv-main .cont .right[data-id='+data+']').toggleClass('active');
  });

  $('.about-cont-text .right .button').click(function(){
    $(this).hide();
    var data = $(this).data('id');
    $('.about-cont-text .right .text[data-id='+data+']').toggleClass('active');
  });

});
$(document).ready(function() {
  var MinBlockScrollswiper = new Swiper('.group-AA-detail-gallary-cont', {
    spaceBetween: 35,
    slidesPerView: '4',
    loop: false,
    observer: true,
    observeParents: true,
    speed: 2000,
    navigation: {
      nextEl: '.group-AA-detail-gallary-cont-button-next',
      prevEl: '.group-AA-detail-gallary-cont-button-prev',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      767: {
        observer: true,
        observeParents: true,
        spaceBetween: 15,
        slidesPerView: 'auto',
      },
    },
    });



  $(function () {
      var w = $(window).width();
      var h = $(window).height();
      if (w <= 767 && w >= 320) { 

        var statiswiper = new Swiper('.group-AA-detail-baners-cont', {
            slidesPerView: 1,
            loop: false,
            observer: true,
            observeParents: true,
            pagination: {
              el: '.group-AA-detail-baners-pag',
              clickable: true,
            },
            navigation: {
              nextEl: '.group-AA-detail-baners-button-next',
              prevEl: '.group-AA-detail-baners-button-prev',
            },
        });

      }
  });

  var nav = $('.group-AA-filter');  
  if (nav.length) {  

      function GroupAA(page) {
          if (page) {
              var data = $('.group-AA-filter').serialize() + '&NUMBER=' + page;
          } else {
              var data = $('.group-AA-filter').serialize();
          }
          $.ajax({
              type: 'post',//метод post или get
              url: '/ajax/filter-group-AA.php',//путь к обработчику
              data: data,//данные
              dataType: 'json',//тип возращаемого значения html или json. Если нужно вернуть верстку то html, если просто массив с данными или сообщение то json
              success: function (e) {//если все прошло без ошибок
                  console.log(e);//e - это то что мы получаем от обработчика
                  console.log(true);
                  centr = '';

                  $('.RebCenter-rei-block').empty();
                  var i = 0;
                  if (!page) {
                      myMapRest.geoObjects.removeAll();

                  }


                  e.OBJECT.forEach(function (center) {
                      if (i < 52) {
                          var reyting = (center.PROPERTY_GROUP_RATE_VALUE < 30) ? 'PageCenter-red' :
                              (center.PROPERTY_GROUP_RATE_VALUE < 50) ? 'PageCenter-yellow' :
                                  (center.PROPERTY_GROUP_RATE_VALUE < 80) ? 'PageCenter-blue' :
                                      'PageCenter-green';

                          centr += '<div class="item"><a href="' + center.DETAIL_PAGE_URL + '">\n' +
                              '                <div class="filter-slider-item-text">\n';

                              
                          if (center.DETAIL_PICTURE) {

                          centr += '           <div class="img">\n' + 

                              '                    <img src="' + center.DETAIL_PICTURE + '" alt="">\n' +

                              '                </div>\n';
                          }else{

                              centr += '           <div class="img">\n' + 

                                  '                    <img src="/upload/iblock/error.png" alt="">\n' +

                                  '                </div>\n';

                          }    

                          centr += '                        <div class="name">' + center.NAME + '</div>\n';

                          if (center.PROPERTY_GROUP_TIME_VALUE) {
                              
                              centr += '                    <div class="topic">' + center.PROPERTY_GROUP_TIME_VALUE + '</div>\n';
                          }

                          if (center.PROPERTY_GROUP_ADRESS_VALUE) {
                              centr += '                    <div class="age">' + center.PROPERTY_GROUP_ADRESS_VALUE + '</div>\n';
                          }



                          centr += '                </div>\n' +
                              '            </a></div>';
                      }

                      i++;

                  });


                  if (!page) {
                      myCollection = new ymaps.Clusterer({
                          clusterOpenBalloonOnClick: true,
                          clusterBalloonPanelMaxMapArea: 0,
                          clusterBalloonMaxHeight: 200,
                          clusterBalloonContentLayout: customBalloonContentLayout
                      });

                      e.OBJECT.forEach(function (center) {
                          let map = '<div class="filter-map-block-item">' +
                              '<a href="' + center.DETAIL_PAGE_URL + '"><div class="filter-map-block-item-cont">' +
                              '<div class="filter-map-block-item-cont-img">' +
                              '<img src="' + center.PICTURE_MAP + '" alt="">' +
                              '</div>' +
                              '<div class="filter-map-block-item-cont-text">' +
                              '<ul><li>Название:<span>' + center.NAME + '</span></li>';

                          if (center.PROPERTY_GROUP_ADRESS_VALUE) {
                              map += '<li>Адрес:<span>' + center.PROPERTY_GROUP_ADRESS_VALUE + '</span></li>';
                          }

                          if (center.PROPERTY_GROUP_TIME_VALUE) {
                              map += '<li>Цена:<span>' + center.PROPERTY_GROUP_TIME_VALUE + '</span></li>';
                          }

                          map += '</ul></div></div> </a>' +
                              '</div>';
                          myPlacemark = new ymaps.Placemark([center.PROPERTY_GROUP_MAP_VALUE[0], center.PROPERTY_GROUP_MAP_VALUE[1]], {
                                  // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
                                  // balloonContentHeader: "Балун метки",
                                  balloonContentBody: map,
                                  // balloonContentFooter: "Подвал",
                                  hintContent: center.NAME
                              }
                          );

                          myCollection.add(myPlacemark);
                          myMapRest.panTo([55.733835, 37.588227], {
                              flying: true

                          });
                      });
                      myMapRest.geoObjects.add(myCollection);
                  }


                  $('.RebCenter-rei-block').append(centr);

                  if (!page) {
                      if (e.PAGES == 1) {
                          $('.RebCenter-rei-page ul').empty();
                      }
                      if (e.PAGESCOUNT > 52) {
                          if (e.PAGES == 1) {
                              e.PAGES = e.PAGESCOUNT / 52;
                          }

                          $('.RebCenter-rei-page ul').empty();
                          let i = 0;
                          while (i < e.PAGES) {
                              $('.RebCenter-rei-page ul').append('<li><a href="javascript:void()" data-id="' + (i + 1) + '" class="' + (i == 0 ? 'active' : '') + '">' + (i + 1) + '</a></li>\n')
                              i++;
                          }
                      }
                  } else {
                      $('.RebCenter-rei-page ul a').removeClass('active');
                      $('.RebCenter-rei-page ul a[data-id=' + e.PAGE + ']').addClass('active');
                  }
              },

              error: function (e) {//если были ошибки при отправки или в обработчике
                  console.log(e);//e - это то что мы получаем от обработчика
                  console.log(false);
              }
          });

      };

      $('.group-AA-filter input').change(function () {
          GroupAA();
          return false;
      });

      $('body').on('click', '.filter .RebCenter-rei-page a', function () {
          GroupAA($(this).text());
          return false;
      });

  };

  var nav = $('.group-AN-filter');  
  if (nav.length) {  

      function GroupAA(page) {
          if (page) {
              var data = $('.group-AN-filter').serialize() + '&NUMBER=' + page;
          } else {
              var data = $('.group-AN-filter').serialize();
          }
          $.ajax({
              type: 'post',//метод post или get
              url: '/ajax/filter-group-AN.php',//путь к обработчику
              data: data,//данные
              dataType: 'json',//тип возращаемого значения html или json. Если нужно вернуть верстку то html, если просто массив с данными или сообщение то json
              success: function (e) {//если все прошло без ошибок
                  console.log(e);//e - это то что мы получаем от обработчика
                  console.log(true);
                  centr = '';

                  $('.RebCenter-rei-block').empty();
                  var i = 0;
                  if (!page) {
                      myMapRest.geoObjects.removeAll();

                  }


                  e.OBJECT.forEach(function (center) {
                      if (i < 52) {
                          var reyting = (center.PROPERTY_GROUP_RATE_VALUE < 30) ? 'PageCenter-red' :
                              (center.PROPERTY_GROUP_RATE_VALUE < 50) ? 'PageCenter-yellow' :
                                  (center.PROPERTY_GROUP_RATE_VALUE < 80) ? 'PageCenter-blue' :
                                      'PageCenter-green';

                          centr += '<div class="item"><a href="' + center.DETAIL_PAGE_URL + '">\n' +
                              '                <div class="filter-slider-item-text">\n';

                              
                          if (center.DETAIL_PICTURE) {

                          centr += '           <div class="img">\n' + 

                              '                    <img src="' + center.DETAIL_PICTURE + '" alt="">\n' +

                              '                </div>\n';
                          }else{

                              centr += '           <div class="img">\n' + 

                                  '                    <img src="/upload/iblock/error.png" alt="">\n' +

                                  '                </div>\n';

                          }    

                          centr += '                        <div class="name">' + center.NAME + '</div>\n';

                          if (center.PROPERTY_GROUP_AA_TIME_VALUE) {
                              
                              centr += '                    <div class="topic">' + center.PROPERTY_GROUP_AA_TIME_VALUE + '</div>\n';
                          }

                          if (center.PROPERTY_GROUP_AA_ADRESS_VALUE) {
                              centr += '                    <div class="age">' + center.PROPERTY_GROUP_AA_ADRESS_VALUE + '</div>\n';
                          }



                          centr += '                </div>\n' +
                              '            </a></div>';
                      }

                      i++;

                  });


                  if (!page) {
                      myCollection = new ymaps.Clusterer({
                          clusterOpenBalloonOnClick: true,
                          clusterBalloonPanelMaxMapArea: 0,
                          clusterBalloonMaxHeight: 200,
                          clusterBalloonContentLayout: customBalloonContentLayout
                      });

                      e.OBJECT.forEach(function (center) {
                          let map = '<div class="filter-map-block-item">' +
                              '<a href="' + center.DETAIL_PAGE_URL + '"><div class="filter-map-block-item-cont">' +
                              '<div class="filter-map-block-item-cont-img">' +
                              '<img src="' + center.PICTURE_MAP + '" alt="">' +
                              '</div>' +
                              '<div class="filter-map-block-item-cont-text">' +
                              '<ul><li>Название:<span>' + center.NAME + '</span></li>';

                          if (center.PROPERTY_GROUP_AA_ADRESS_VALUE) {
                              map += '<li>Адрес:<span>' + center.PROPERTY_GROUP_AA_ADRESS_VALUE + '</span></li>';
                          }

                          if (center.PROPERTY_GROUP_AA_TIME_VALUE) {
                              map += '<li>Цена:<span>' + center.PROPERTY_GROUP_AA_TIME_VALUE + '</span></li>';
                          }

                          map += '</ul></div></div> </a>' +
                              '</div>';
                          myPlacemark = new ymaps.Placemark([center.PROPERTY_GROUP_AA_MAP_VALUE[0], center.PROPERTY_GROUP_AA_MAP_VALUE[1]], {
                                  // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
                                  // balloonContentHeader: "Балун метки",
                                  balloonContentBody: map,
                                  // balloonContentFooter: "Подвал",
                                  hintContent: center.NAME
                              }
                          );

                          myCollection.add(myPlacemark);
                          myMapRest.panTo([55.733835, 37.588227], {
                              flying: true

                          });
                      });
                      myMapRest.geoObjects.add(myCollection);
                  }


                  $('.RebCenter-rei-block').append(centr);

                  if (!page) {
                      if (e.PAGES == 1) {
                          $('.RebCenter-rei-page ul').empty();
                      }
                      if (e.PAGESCOUNT > 52) {
                          if (e.PAGES == 1) {
                              e.PAGES = e.PAGESCOUNT / 52;
                          }

                          $('.RebCenter-rei-page ul').empty();
                          let i = 0;
                          while (i < e.PAGES) {
                              $('.RebCenter-rei-page ul').append('<li><a href="javascript:void()" data-id="' + (i + 1) + '" class="' + (i == 0 ? 'active' : '') + '">' + (i + 1) + '</a></li>\n')
                              i++;
                          }
                      }
                  } else {
                      $('.RebCenter-rei-page ul a').removeClass('active');
                      $('.RebCenter-rei-page ul a[data-id=' + e.PAGE + ']').addClass('active');
                  }
              },

              error: function (e) {//если были ошибки при отправки или в обработчике
                  console.log(e);//e - это то что мы получаем от обработчика
                  console.log(false);
              }
          });

      };

      $('.group-AN-filter input').change(function () {
          GroupAA();
          return false;
      });

      $('body').on('click', '.filter .RebCenter-rei-page a', function () {
          GroupAA($(this).text());
          return false;
      });

  };

  $('.btn_rei').click(function(){
    $('.pageCenter-button-info-popup, .pageCenter-popup-rating').addClass('active');
    $('html, header').width($('html, header').width());
    $('html').css('overflow', 'hidden');

    $('.pageCenter-popup-close').click(function(){
      $('.pageCenter-button-info-popup, .pageCenter-popup-rating').removeClass('active');
      $('html').removeAttr('style');
    })
  });

  $('.BlockScroll-left-reviews .cont .narcom-content-block .left .reviews .button span').click(function(){
    $(this).css('display' , 'none');
    $('.BlockScroll-left-reviews .cont .narcom-content-block .left .reviews .bottom .item').addClass('active')
  });






  $(function () {
      $('.callme').submit(function () {

          var that = $(this);
          var data = that.serialize();
          $.ajax({
              type: 'post',
              url: '/ajax/callme.php',  // https://stimul-bvi.ru/ajax/callme_test.php
              data: data,
              dataType: 'json',
              success: function (json) {
                  console.log('suc');
                  console.log(json);
                  if(json == 'Y'){
                      $('.tell-callme').html('');
                      $('.tell-callme').append('Ваше сообщение отправлено!');
                  }else{
                      $('.tell-callme').html('');
                      $('.tell-callme').append('Ваше сообщение не отправлено! Обновите страницу и попробуйте еще раз');
                  }

              },

              error: function (json) {
                  console.log('N');
                  console.log(json);
                  $('.tell-callme').html('');
                  $('.tell-callme').append('Ваше сообщение не отправлено!');

              }

          });
          return false;


      });

  });

  $(function () {
      $('.blago_form').submit(function () {

          var that = $(this);
          var data = that.serialize();
          $.ajax({
              type: 'post',
              url: '/ajax/blago_form.php',
              data: data,
              dataType: 'json',
              success: function (json) {
                  console.log('Y');
                  console.log(json);
                  $('.blago_form').html('');
                  $('.blago_form').append('<div class="blago_form_text">Спасибо за вопрос!</div>');

              },

              error: function (json) {
                  console.log('N');
                  console.log(json);

              }

          });
          return false;


      });

  });

});



$(document).ready(function() {
/*!!!!всегда в самом конце!!!!*/
var know = $('.lic_fancy');  
if (know.length) { 
    $("a.lic_fancy").fancybox(); 
};

var know = $('.licens-img');  
if (know.length) { 
    $("a.licens-img").fancybox();
};    


  var klinika = new Swiper('.klinika-slider-cont', {
    spaceBetween: 55,
    slidesPerView: '4',
    loop: false,
    observer: true,
    observeParents: true,
    speed: 2000,

    breakpoints: {
      767: {
        observer: true,
        observeParents: true,
        spaceBetween: 10,
        slidesPerView: 2,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    },

    });

});

$(document).ready(function() {
  var reviews = new Swiper('.uslugi-reviews-slider-cont', {
    spaceBetween: 55,
    slidesPerView: '4',
    loop: false,
    observer: true,
    observeParents: true,
    speed: 2000,

    breakpoints: {
      767: {
        observer: true,
        observeParents: true,
        spaceBetween: 30,
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    },

    });

});