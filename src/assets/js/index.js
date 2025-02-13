import $ from "jquery"
// swiper
import Swiper from 'swiper';
import { Autoplay} from 'swiper/modules';



var $win = $(window);
var $body       = $('body')


opning();
function tick(time) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve()
            console.log('YES');
        }, time)
    })
}

async function opning() {
    $body.addClass('noscroll');
    $body.addClass('start');
    await tick(1000);
    $body.removeClass('noscroll');
    $('.header').addClass('start');
    $('.contents').addClass('start');
    
}



const swiper = new Swiper('.swiper', {
    modules: [Autoplay],
    slidesPerView: 1.6,
    spaceBetween: 5,
    loop: true,
    speed: 650,
    autoplay:{
        delay: 2500,
    },
  });


// LOOKをfedeoutさせる
const phWraps = document.querySelectorAll('.ph_wrap');
function handleScroll() {
    phWraps.forEach(wrap => {
        const rect = wrap.getBoundingClientRect(); 
       
        if (rect.top <= 0 && rect.bottom > 0) {
            wrap.querySelectorAll('.num').forEach(num => {
                num.classList.add('fadeout'); 
            });
        } else {
            wrap.querySelectorAll('.num').forEach(num => {
                num.classList.remove('fadeout'); 
            });
        }
    });
}

handleScroll();

// アンカーリンク
$(window).on('load', function () {
    $('.pcanchor_link a[href*="#"]').on('click', function () {
      var elmHash = $(this).attr('href');
      var pos = $(elmHash).offset().top - 20;
      $('html, body').animate({ scrollTop: pos }, 800);
      return false;
    });
  });


// アンカーリンク

$(window).on('load', function () {
    $('.anchor_link a[href*="#"]').on('click', function () {
        var elmHash = $(this).attr('href');
        var pos = $(elmHash).offset().top - 20; // 
        $('html, body').scrollTop(pos); 
        return false;
    });
});



$(window).on("scroll", function() {
    var fadeInElements = $(".fadein");
    var windowHeight = $(window).height();
    var scrollTop = $(this).scrollTop();
    
    fadeInElements.each(function() {
        var element = $(this);
        var offset = element.offset().top;
        if (scrollTop + windowHeight * 0.7 > offset && !element.hasClass("in")) {
            element.addClass("in"); 
        }
    });
});

  function styleOn() {
      $('.sec').each(function () {
          var element = $(this);
          var elementTop = element.offset().top;
          var windowTop = $(window).scrollTop();
          var windowHeight = $(window).height();
  
          // 要素の上部がウィンドウの60%位置に来たときにクラスを追加
          if (windowTop + windowHeight * 0.6 > elementTop) {
              element.addClass('on');
              element.addClass('active');
          } else {
              element.removeClass('on');
          }
      });
  }


//   SPindex

$('.hamburger_menu').on('click', function () {
    $body.toggleClass('noscroll');
    $(this).toggleClass('click');
    $('.sp-anchor_wrap').toggleClass('show');
});

$('.anchor_link a').on('click', function () {
    $body.removeClass('noscroll');
    $('.hamburger_menu').removeClass('click');
    $('.sp-anchor_wrap').removeClass('show');
});


  $(window).on('scroll', function () {
    handleScroll();
    styleOn();
});



