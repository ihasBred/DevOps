const link = document.getElementById("playLink");
const video = document.getElementById("videoPlayer");
const contentBox = document.getElementById("contentBox");

link.addEventListener("click", function(e) {
  e.preventDefault();
  contentBox.style.display = "none";
  video.style.display = "block";
  video.play();

  video.addEventListener("ended", function() {
    window.location.href = link.href;
  });
});