let player;
const videoUrl = "OwownumawKQ"; // YouTube video ID
const redirectUrl =
  "https://eternalascenttyler.github.io/FnafReturnOfTheSoulsOffice1/"; // Change to your destination

function startVideo() {
  const clickText = document.getElementById("clickText");
  clickText.style.display = "none"; // hide the "Click to start" text

  const playerDiv = document.getElementById("player");
  playerDiv.style.display = "block";

  player = new YT.Player("player", {
    videoId: videoUrl,
    playerVars: {
      autoplay: 1,
      controls: 0,
      modestbranding: 1,
      rel: 0,
      mute: 1, // initially muted for autoplay to work
    },
    events: {
      onReady: (event) => {
        event.target.playVideo();
        // Unmute immediately
        setTimeout(() => {
          event.target.unMute();
        }, 100); // short delay to ensure autoplay works
      },
      onStateChange: (event) => {
        if (event.data === YT.PlayerState.ENDED) {
          window.location.href = redirectUrl;
        }
      },
    },
  });
}

document.body.addEventListener("click", startVideo, { once: true });
