// LCK SUMMER 유튜브 영상
const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";

const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  // <div id="palyer"></div>
  new YT.Player('video_player', {
    videoId: 'VJ3X9GsCIc8', //최초 재생할 유튜브 영상 ID
    playerVars:{
      autoplay: true,
      loop: true,
      playList: 'VJ3X9GsCIc8' //반복 재생할 유튜브 영상 ID 목록
    }
    // events: {
    //   onReady: function(event){
    //     event.target.mute() //음소거    
    //   }
    // }
  });
}
