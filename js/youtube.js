// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', //최초 재생할 유튜브 영상 id(링크 https://www.youtube.com/watch?v=An6LvWQuj_8)
    playerVars: {
      autoplay:true, //자동 재생 유무
      loop: true, //반복 재생 유무
      playlist: 'An6LvWQuj_8' //반복재생할 경우, 다시 재생할 영상의 아이디값을 써야함
    },
    events: {
      onReady: function (event) {
        event.target.mute() //음소거
      }
    }
  });
}