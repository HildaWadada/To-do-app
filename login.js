console.log("Login script loaded");
const loginForm = document.getElementById("login-form");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value;

  // Simple check (replace with real authentication if needed)
  if (username === "" && password === "") {
    message.style.color = "green";
    message.textContent = "Login successful! Redirecting...";

    setTimeout(() => {
      window.location.href = "to-do.html"; 
    }, 1000);
  } else {
    message.style.color = "red";
    message.textContent = "Invalid username or password.";
  }
});





