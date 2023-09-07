const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const messageDiv = document.getElementById("message");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === "" || password === "") {
    messageDiv.innerText = "Please fill in all fields.";
    messageDiv.style.color = "red";
  } else if (username !== "your_username" || password !== "your_password") {
    messageDiv.innerText = "Invalid username or password.";
    messageDiv.style.color = "red";
  } else {
    messageDiv.innerText = alert("Login successful!");
    // messageDiv.style.color = "green";
  }
});

usernameInput.addEventListener("focus", clearMessage);
passwordInput.addEventListener("focus", clearMessage);

function clearMessage() {
  messageDiv.innerText = "";
}
