const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  if (mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('slide-down', 'fade-in');
  } else {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('slide-down', 'fade-in');
  }
});


// Select the video and the button
const video = document.querySelector("#background-video");
const toggleButton = document.querySelector("#toggle-play");

// Add event listener for the button
toggleButton.addEventListener("click", () => {
  // Check if the video is playing
  if (!video.paused) {
    video.pause(); // Pause the video
    toggleButton.textContent = "Play Video"; // Update button text
  } else {
    video.play(); // Play the video
    toggleButton.textContent = "Pause Video"; // Update button text
  }
});