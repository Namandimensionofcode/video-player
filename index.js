const video = document.getElementById('videoPlayer');
const videoContainer = document.querySelector('.video-container');
let isPlaying = false;

// Function to play video
function playVideo() {
  video.play();
  isPlaying = true;
}

// Function to pause video
function pauseVideo() {
  video.pause();
  isPlaying = false;
}

// Function to toggle play/pause
function togglePlayPause() {
  if (isPlaying) {
    pauseVideo();
  } else {
    playVideo();
  }
}

// Event listener for video click to toggle play/pause
videoContainer.addEventListener('click', () => {
  togglePlayPause();
});

// Event listener to pause video when video ends
video.addEventListener('ended', () => {
  isPlaying = false;
});
