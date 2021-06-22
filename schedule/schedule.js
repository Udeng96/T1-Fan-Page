new Swiper('.calendar .swiper-container', {
  slidesPerView: 3, //한번에 보여주는 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  // loop: true, // 반복 제외
 
  navigation: {
    prevEl: '.calendar .swiper-prev',
    nextEl: '.calendar .swiper-next'
  }
});

const fadeEls = document.querySelectorAll('.fade-in');
fadeEls.forEach(function(fadeEl,index){
  gsap.to(fadeEl,1,{
    delay:(index+1)*.4, //0.7초 후에 계속 반복되는데 이를 index의 수만큼 반복
    opacity:1
  })
})