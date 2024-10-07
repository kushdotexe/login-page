document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Simple validation logic
    if (username === "admin" && password === "password123") {
        message.textContent = "Login successful!";
        message.style.color = "green";
    } else {
        message.textContent = "Invalid credentials, please try again.";
        message.style.color = "red";
    }

    message.classList.remove("hidden");
});
