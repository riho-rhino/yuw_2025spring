import $ from "jquery"
// swiper
import Swiper from 'swiper';
import { Autoplay} from 'swiper/modules';
// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


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
    
}



const swiper = new Swiper('.swiper', {
    modules: [Autoplay],
    slidesPerView: 1.6,
    spaceBetween: 5,
    loop: true,
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


gsap.utils.toArray(".fadein").forEach((element) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 70%",
        toggleClass: {
          targets: element,
          className: "in",
        },
        once: true,
      },
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
// $('.hamburger_menu .click').on('click', function () {
//     $body.removeClass('noscroll');
//     $(this).removeClass('click');
//     $('.sp-anchor_wrap').removeClass('show');
// });
$('.anchor_link a').on('click', function () {
    $body.removeClass('noscroll');
    $('.hamburger_menu').removeClass('click');
    $('.sp-anchor_wrap').removeClass('show');
});


  $(window).on('scroll', function () {
    handleScroll();
    styleOn();
});



