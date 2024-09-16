let url = "https://66e7e6a5b17821a9d9da6f39.mockapi.io/login";

let loginSubmit = document.getElementById("submitlogin")
let loginEmail = document.getElementById("exampleInputEmail1")
let loginPass = document.getElementById("exampleInputPassword1")

let nameContainer = document.getElementById("name")

loginSubmit.addEventListener('click', (event) => {
    event.preventDefault(); 
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        let check = data.find(item => 
            item.email === loginEmail.value && item.pass === loginPass.value
        );

        if (check) {
            window.location.href = "name.html";
            nameContainer.textContent = "item.name";
        } else {
            alert("Login failed: Invalid email or password");
        }
    })
});

