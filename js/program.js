var promotionalMessages = [
  "Join Hong Kong Industrial University's College of Science for world-class education and research opportunities in science and technology! 20 QUOTAS LEFT!",
  "Join the future of engineering with Hong Kong Industrial University's College of Engineering, offering innovative programs and world-class faculty to prepare you for success in the field! 40 QUOTAS LEFT!",
  "Join the future of interdisciplinary studies with Hong Kong Industrial University's College of Interdisciplinary Studies, offering innovative programs and world-class faculty to prepare you for success in various fields! 30 QUOTAS LEFT!"
];

function displayPromotionalMessages() {
  var messageIndex = 0;
  var messageContainer = document.getElementById("promo_text");

  setInterval(function () {
    messageContainer.textContent = promotionalMessages[messageIndex];
    messageIndex = (messageIndex + 1) % promotionalMessages.length;
  }, 3000);
}

window.addEventListener("load", displayPromotionalMessages);

var videoPlayer = document.getElementById('promo_vid');
var videos = {
  'mp4': ['https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video1.mp4', 'https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video2.mp4'],
  'mkv': ['https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video1.mkv', 'https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video2.mkv']
};
var currentVideoIndex = { 'mp4': 0, 'mkv': 0 };

videoPlayer.addEventListener('ended', switchVideo);

function switchVideo() {
  var currentVideoFormat = videoPlayer.currentSrc.split('.').pop().toLowerCase();
  var formatVideos = videos[currentVideoFormat];
  currentVideoIndex[currentVideoFormat] = (currentVideoIndex[currentVideoFormat] + 1) % formatVideos.length;
  videoPlayer.src = formatVideos[currentVideoIndex[currentVideoFormat]];
  videoPlayer.load();
  videoPlayer.play();
}