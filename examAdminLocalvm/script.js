function registerUser() {

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let user = {
        name: name,
        email: email
    };

    // Get old users
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Push new user
    users.push(user);

    // Save again
    localStorage.setItem("users", JSON.stringify(users));

    // AJAX POST

    let xhr = new XMLHttpRequest();

    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {

        alert("User Registered Successfully");

    };

    xhr.send(JSON.stringify(user));
}