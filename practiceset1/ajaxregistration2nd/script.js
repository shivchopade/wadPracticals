function registerUser() {

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let user = {
        name: name,
        email: email
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    // AJAX POST Request

    let xhr = new XMLHttpRequest();

    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(JSON.stringify(user));

    alert("User Registered");
}