let url = "https://66e7e6a5b17821a9d9da6f39.mockapi.io/login";

let name = document.getElementById("name")
let email = document.getElementById("exampleInputEmail");
let pass = document.getElementById("exampleInputPassword");
let submit = document.getElementById("submit");



// Sign in funcs

submit.addEventListener('click', (event) => {

    event.preventDefault();


    if ( !ValidateNAme(name) || !ValidateEmail(email) || !ValidatePassword(pass) ) {
        return; 
    }

    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          name : name.value,
            email: email.value,
            pass: pass.value,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
});

function ValidateNAme(name) {
  if (name.value.length >= 5) {
      return true;
  } else {
      alert("Name must be at least 5 characters long.");
      pass.focus();
      return false;
  }
}

function ValidateEmail(email) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.match(validRegex)) {
        return true;
    } else {
        alert("Invalid email address!");
        email.focus();
        return false;
    }
}

function ValidatePassword(pass) {
    if (pass.value.length >= 8) {
        return true;
    } else {
        alert("Password must be at least 8 characters long.");
        pass.focus();
        return false;
    }
}




// login check 
