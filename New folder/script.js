
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "911230325" && password === "00422#123") {
        window.location.href = "hidden.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
