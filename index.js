document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const toggleButton = document.getElementById("dark-mode-toggle");

    // Check user preference for dark mode
    const prefersDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Set initial mode based on user preference
    if (prefersDarkMode) {
        body.classList.add("dark-mode");
    }

    // Toggle mode when the button is clicked
    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
    });


// Spin amination to image in hero_section
// document.addEventListener('DOMContentLoaded', function () {
    // Get the image_div element by its ID
    var imageDiv = document.getElementById('image_div');
  
    // Add a click event listener to the image_div
    imageDiv.addEventListener('click', function () {
      // Your custom function here
      imageDiv.classList.toggle("rotate");
    });

});

