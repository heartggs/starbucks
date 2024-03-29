const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// _.throttle 일정시간에 한 번씩만 함수가 호출될 수 있게 제한을 건 것 //_.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY > 500);
  if(window.scrollY) {
    //배지 숨기기
    //badgeEl.style.display = 'none';
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity:0,
      display:'none'
    });
    //버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    //배지 보이기
    //badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity:1,
      display:'block'
    });
    //버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));

toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  //gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1)* .7, //0.7, 1.4, 2.1, 2.7
    opacity: 1
  });
});


//new Swiper(선택자, 옵선)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true, // 반복 재생 여부
  // autoplay: {
  //   delay:5000 //5초
  // }
  pagination : {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자,
    clickable: true,
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});


const pomotionEL = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    //숨김처리!
    pomotionEL.classList.add('hide');
  } else {
    //보임처리!
    pomotionEL.classList.remove('hide');
  }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatinObject (selector, delay, size) {
  gsap.to(selector, //선택자
    random(1.5, 2.5), //애니메이션 동작 시간
  {
    y: size,
    repeat: -1 ,//무한반복
    yoyo : true, //한번 재생된 애니메이션을 다시 뒤로 재생하는것.
    ease: Power1.easeInOut, //gsap easing사용
    delay:random(0, delay) //해당초만큼 쉬었다가 시작
  });
}
floatinObject('.floating1', 1, 15);
floatinObject('.floating2', .5, 15);
floatinObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic
  .Scene({
    triggerElement: spyEl, //보여짐 여부를 감시라 요소를 지정
    triggerHook: .8
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});