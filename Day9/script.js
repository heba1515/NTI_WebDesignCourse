//=============== Regex ==================

// ^: start , +: one | more , *: none | more , {2,}: two | more
// [0-9] = \d
// [a-zA-z] = \w


// let name = "Heba Sabri";
// let nameRegex = /^[A-Z]\w{2,} [A-Z][\w]{2,}$/;
// console.log(nameRegex.test(name));


// let email = "hs1815@fayoum.edu.eg";
// let emailRegex = /^[a-z][\w\d]{2,}(@fayoum.edu.eg)$/;
// console.log(emailRegex.test(email));


// let phoneNumber = "01150581535";
// let phoneRegex = /^(01)[0-9]{9}$/;
// console.log(phoneRegex.test(phoneNumber));

// let form = document.querySelector('form');

// let fname = document.querySelector("#fname");
// let fnameRegex = /^[A-Z][a-zA-Z]{2,}$/;
// // console.log(fnameRegex.test(fname.value));

// let lname = document.querySelector("#lname");
// let lnameRegex = /^[A-Z][\w]{2,}$/;
// // console.log(lnameRegex.test(lname.value));


// let email = document.querySelector("#email");
// let emailRegex = /^[a-z][\w\d\-_.$]{2,}(@gmail.com)$/;
// // console.log(emailRegex.test(email.value));


// let phoneNumber = document.querySelector("#num");
// let phoneRegex = /^(01)[0-9]{9}$/;
// // console.log(phoneRegex.test(phoneNumber.value));

// let birthday = document.querySelector("#birth");
// let birthRegex = /^(\d){4}[\-][\d]{2}[\-][\d]{2}$/;
// // console.log(birthRegex.test(birthday.value));


// form.addEventListener("submit",(e)=>{
//     e.preventDefault();

//     let validFname = fnameRegex.test(fname.value);
//     let validLname = lnameRegex.test(lname.value);
//     let validEmail = emailRegex.test(email.value);
//     let validnum = phoneRegex.test(phoneNumber.value)
//     let validBirth = birthRegex.test(birthday.value);

//     // if(validFname && validLname && validEmail && validnum && validBirth){
//     //     alert("Comfirmed Successfully.");
//     // }else{
//     //     alert("Not Comfirmed, TRY AGAIN.");
//     // }
//     if(!validFname){
//         alert("Invalid first name.");
//     }
//     else if(!validLname){
//         alert("Invalid last name.");
//     }
//     else if(!validEmail){
//         alert("Invalid email.");
//     }
//     else if(!validnum){
//         alert("Invalid phone number.");
//     }
//     else if(!validBirth){
//         alert("Invalid birthday.");
//     }
//     else{
//         alert("Comfirmed Successfully.");
//     }
// })




// let books =[
//     {
//         name: "book1",
//         count: "3"
//     },
//     {
//         name: "book2",
//         count: "5"
//     },
//     {
//         name: "book3",
//         count: "15"
//     }
// ];

// // let output = 
// books.map((element,index)=>{
//     document.write(`<p>Book name : ${element.name} <br> Count : ${element.count}</p>`);
//     // return element;
// })
// // console.log(output);

// // let output = books.forEach((element,index)=>{
// //     document.write(`<p>Book name : ${element.name} <br> Count : ${element.count}</p>`)
// // })
// // console.log(output);



//============ reduce ================
// let arr = [10,20,30,40]

// let add = arr.reduce((initial,value)=>{
//     return initial+value;
// },0)
// console.log(add);

// let mul = arr.reduce((initial,value)=>{
//     return initial*value;
// },1)
// console.log(mul);


//============ filter ================
// let numbers = [0,1,2,3,4,5,6,7,8,9,10]
// let even = numbers.filter((num)=>{
//     retun(num%2)==0;
// })
// console.log(even);


let products =[
    {
        name:"shirt",
        price: 100,
        category: "clothing"
    },
    {
        name:"blouse",
        price: 200,
        category: "clothing"
    },
    {
        name:"mobile",
        price: 3000,
        category: "electronics"
    },
    {
        name:"laptop",
        price: 20000,
        category: "electronics"
    },
    {
        name:"coat",
        price: 500,
        category: "clothing"
    }
]

let total = products.reduce((initial,p)=>{
    return initial + p.price;
},0)

document.write(`Total price = ${total} <br>`);

let elements = products.filter((p)=>{
    return p.price > 1000;
})
// console.log(elements);
let element = elements.map((e,i)=>{
    document.write(`<p>Product name : ${e.name}</p>`);
    document.write(`<p>Product category : ${e.category}</p>`);
})



// (task) sweet alert liberary