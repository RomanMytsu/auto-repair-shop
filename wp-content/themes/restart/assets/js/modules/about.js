document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.querySelector(".about-video__play-btn");
  const iframeContainer = document.querySelector(".about-video__iframe");

  if (!playButton || !iframeContainer) return;

  const iframe = iframeContainer.querySelector("iframe");
  if (!iframe) return;

  playButton.addEventListener("click", () => {
    iframe.src =
      "https://www.youtube.com/embed/CNkvwsml8Oc?si=zb0BA-Cz09nPelJ7&autoplay=1";
    iframeContainer.style.display = "block";
    playButton.style.display = "none";
  });
});
