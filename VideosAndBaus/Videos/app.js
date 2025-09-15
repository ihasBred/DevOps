document.addEventListener("DOMContentLoaded", () => {
  const videoPlayer = document.querySelector(".video video");
  const playlistLinks = document.querySelectorAll(".list a");

  playlistLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const newVideoSrc = link.getAttribute("data-video");

      if (newVideoSrc) {
        videoPlayer.src = newVideoSrc;
        videoPlayer.play();
      }

      playlistLinks.forEach(item => item.classList.remove("active"));

      link.classList.add("active");
    });
  });
});
