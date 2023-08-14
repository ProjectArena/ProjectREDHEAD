window.onload = function() {
  // Hide the loading screen and show the content after the page loads
  document.getElementById("loadingScreen").style.display = "none";
  document.getElementById("content").style.display = "block";
  
  // Add a click event listener to the logo link
  document.getElementById("logoLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior
    
    // Show the loading screen again before redirecting
    document.getElementById("loadingScreen").style.display = "flex";
    
    // Redirect after a short delay
    setTimeout(function() {
      window.location.href = "index.html";
    }, 1000); // Change the delay time as needed
  });
};
