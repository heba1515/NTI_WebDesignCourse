

let form = document.querySelector('form');

let fname = document.querySelector("#fname");
let fnameRegex = /^[A-Z][a-zA-Z]{2,}$/;

let lname = document.querySelector("#lname");
let lnameRegex = /^[A-Z][\w]{2,}$/;

let email = document.querySelector("#email");
let emailRegex = /^[a-z][\w\d\-_.$]{2,}(@gmail.com)$/;

let phoneNumber = document.querySelector("#num");
let phoneRegex = /^(01)[0-9]{9}$/;

let birthday = document.querySelector("#birth");
let birthRegex = /^(\d){4}[\-][\d]{2}[\-][\d]{2}$/;

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let validFname = fnameRegex.test(fname.value);
    let validLname = lnameRegex.test(lname.value);
    let validEmail = emailRegex.test(email.value);
    let validnum = phoneRegex.test(phoneNumber.value)
    let validBirth = birthRegex.test(birthday.value);

    if(!validFname){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid first name!",
        });
    }
    else if(!validLname){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid last name!",
        });
    }
    else if(!validEmail){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid email!",
        });
    }
    else if(!validnum){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid phone number!",
        });
    }
    else if(!validBirth){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid birthday!",
        });
    }
    else{
        Swal.fire({
            title: "Confirmed Successfully!",
            icon: "success"
        });
    }
})