const videos = document.querySelectorAll('.song-item video');
const songs = document.querySelectorAll('.song-item');
const fullscreenPlayer = document.getElementById('fullscreen-player');
const mainVideo = document.getElementById('main-video');
const backBtn = document.getElementById('back-btn');
const carousel = document.querySelector('.carousel');


videos.forEach(v => {
  v.muted = true;
  v.loop = true;
  v.play().catch(() => {});
});


songs.forEach(item => {
  item.addEventListener('click', () => {
    const videoSrc = item.getAttribute('data-video');
    mainVideo.src = videoSrc;
    fullscreenPlayer.style.display = 'flex';
    mainVideo.play();
    carousel.style.animationPlayState = 'paused';
  });
});


backBtn.addEventListener('click', (e) => {
  e.preventDefault();
  fullscreenPlayer.style.display = 'none';
  mainVideo.pause();
  mainVideo.src = "";
  carousel.style.animationPlayState = 'running';
});
