document.getElementById("register").addEventListener("submit", (event) => {
    event.preventDefault();

    // Get the values entered by the user in the login form
    var enteredUsername = document.getElementById("username").value;
    var enteredPassword = document.getElementById("password").value;

    // Retrieve the stored username and password from local storage
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    // Check if the entered credentials match the stored ones
    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        // Redirect to the home page if the credentials match
        window.location.href = "../Home/index.html";
    } else {
        // Display an alert if login fails
        alert("Login Failed");
    }
});
