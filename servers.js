document.addEventListener("DOMContentLoaded", () => {
    const statusText = document.getElementById("status-text");

    // Simulate fetching server status (replace with actual logic)
    setTimeout(() => {
        const isServerOnline = Math.random() < 0.8; // 80% chance of being online
        statusText.textContent = isServerOnline ? "Server is Offline" : "Server is Offline";
    }, 2000); // Simulate a 2-second delay for demonstration
});
