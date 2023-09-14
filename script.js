document.getElementById("register").addEventListener("submit", (event) => {
    event.preventDefault();

    // Get the values entered by the user in the registration form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

//Store the values in local storage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // Redirect to the login page after the registration
    window.location.href = "Login_Page/index.html";
});
