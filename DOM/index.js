console.log("connected")
const nam = document.getElementById('name');
const email = document.getElementById("email");
const password = document.getElementById("password")
const passwordRegEx = new RegExp(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/);


nam.addEventListener("change", function () {
    if (nam.value.length < 5) {
        alert("The name must be atleast 5 characters");
        nam.setAttribute("class", "form-control is-invalid");
        nam.focus();
    }
})

email.addEventListener("change", function(){
    if (!email.value.includes("@")) {
        alert("this field should have a valid email");
        email.setAttribute("class", "form-control is-invalid");
        email.focus();
    }
})

password.addEventListener("change", function() {

    if(!passwordRegEx.test(password.value)) {
        alert("password should contain atleast on special character");
        password.setAttribute("class", "form-control is-invalid");
        password.focus();
    }
    
    if (password.value.length < 8) {
        alert("password should be more than 8 character");
        password.setAttribute("class", "form-control is-invalid");
        password.focus();
    }

 
})