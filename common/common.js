//fade-in 효과

const fadeEls = document.querySelectorAll('.fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7초 후에 계속 반복되는데 이를 index의 수만큼 반복
    opacity: 1
  });
});

//random 함수

function random(min, max) {
  // '.toFixed()'를 통해 반환된 문자 데이터를,
  //'parseFloat()'을 통해 소수점을 가지는 숫자 데이터를 반환
  return parseFloat( ( Math.random() * (max - min) + min).toFixed(2))
}

//floating 효과

function floatingObject(selector,delay,size){
  gsap.to(selector,random(1.5,2.5),{
    y:20,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0,delay)
  });
}
floatingObject('.floating1',.1,15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


//main home page youtube

// API 불러오기
const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// player를 생성하는 코드
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  // <div id="palyer"></div>
  new YT.Player('video_player', {
    videoId: '3aDwvHJPuaw', //최초 재생할 유튜브 영상 ID
    playerVars:{
      autoplay: true,
      loop: true, 
      playList: '3aDwvHJPuaw' //반복 재생할 유튜브 영상 ID 목록
    // },
    // events: {
    //   onReady: function(event){
    //     event.target.mute() //음소거    
    //   }
    }
  });
}