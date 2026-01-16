document.addEventListener("DOMContentLoaded", function () {

    let btn = document.querySelector("#colorBtn");

    btn.addEventListener("click", function () {
        const gradients = [
            "linear-gradient(135deg, #2242d4, #764ba2)",
            "linear-gradient(135deg, #096e4e, #185a9d)",
            "linear-gradient(135deg, #ab0d27, #db6194)",
            "linear-gradient(135deg, #0a3145, #3f96ed)",
            "linear-gradient(135deg, #194e00, #a8e063)",
            "linear-gradient(135deg, #2193b0, #6dd5ed)",
            "linear-gradient(135deg, #b0b0b0, #ffffff)"
        ];

        const random = gradients[Math.floor(Math.random() * gradients.length)];
        document.body.style.background = random;
    });



    let loadBtn = document.getElementById("loadBtn");
    let usersDiv = document.getElementById("users");

    loadBtn.addEventListener("click", function () {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                usersDiv.innerHTML = "";

                data.forEach(user => {
                    let div = document.createElement("div");
                    div.classList.add("user");

                    div.innerHTML = `
                        <h3>${user.name}</h3>
                        <p>Email: ${user.email}</p>
                        <p>City: ${user.address.city}</p>
                    `;

                    usersDiv.appendChild(div);
                });
            });
    });


    let form = document.getElementById("myForm");
    let error = document.getElementById("error");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();

        if (name === "" || email === "" || password === "") {
            console.log("all is good")
            error.style.color = "red";
            error.innerText = "All fields are required!";
            return;
        }

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            error.style.color = "red";
            error.innerText = "Please enter a valid email address!";
            return;
        }


        if (password.length < 6) {
            error.style.color = "red";
            error.innerText = "Password must be at least 6 characters!";
            return;
        }

        error.style.color = "green";
        error.innerText = "Form submitted successfully!";
    });

});

function openSidebar() {
    document.getElementById("sidebar").style.right = "0";
}

function closeSidebar() {
    document.getElementById("sidebar").style.right = "-250px";
}

document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", closeSidebar);
});
