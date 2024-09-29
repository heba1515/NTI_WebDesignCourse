//https://dummyjson.com/users
//https://fakestoreapi.com/products

// function getUsers(){
//     let request = new XMLHttpRequest();
//     return new Promise((resplve,reject)=>{
//         request.onload = ()=>{
//             if(request.status == 200 && request.readyState == 4){
//                 resplve(request.responseText);
//             }else{
//                 reject("Error.")
//             }
//         }
//         request.open("GET", "https://dummyjson.com/users", true)
//         request.send()
//     })
// };

// getUsers().then((response)=>{
//     let data = JSON.parse(response);
//     return data;
// }).then((data)=>{
//     let users = data.users;
//     return users;
// }).then((users)=>{
//     users.map((user)=>{
//         return document.write(`${user.firstName}<br>`);
//     });
// }).catch((reject)=>{
//     console.log(reject)
// }).finally(()=>{
//     console.log("Finished.");
// })



// async function getData(){
//     let response = await fetch("https://dummyjson.com/users");
//     console.log(response);
//     let data = await response.json();
//     console.log(data);
//     let products = data.products;
//     console.log(products);
// }

// getData();


//===================== fetch =====================

// fetch("https://fakestoreapi.com/products").then((res)=>{
//     return res.json();
// }).then((data)=>{
//     console.log(data);
// })



// let rand = Math.ceil(Math.random()*3);
// // console.log(rand)

// fetch(`https://dummyjson.com/quotes/${rand}`).then((res)=>{
//     return res.json();
// }).then((data)=>{
//     console.log(data);
//     document.write(`<p class="quote">" ${data.quote} "</p>`);
// })

// fetch("https://dummyjson.com/quotes").then((res)=>{
//     return res.json();
// }).then((data)=>{
//     let data2 = data.quotes;
//     console.log(data2[rand])
// })




//====================== class ====================

// class Person{
//     id;
//     name;
//     age;
//     constructor(i,n,a){
//         this.id = i;
//         this.name = n;
//         this.age = a;
//     }

//     greeting(){
//         console.log(`Welcome ${this.name}`);
//     }
// }


// class Employee extends Person{
//     companyName;
//     salary;
//     constructor(i,n,a,cn,s){
//         super(i,n,a);
//         this.companyName = cn;
//         this.salary = s;
//     }

//     display(){
//         console.log(`ID: ${this.id}, Name: ${this.name}, Company: ${this.companyName}, Salary: ${this.salary}`)
//     }
// }

// let e1 = new Employee(123,"Mohammed",24,"Engineering",30000);
// e1.greeting();
// e1.display();



//================ spread operator & ternary =============

// (condition)? true : false
// arr.concat(arr1,arr2) => arr = [...arr1, ...arr2]





//=============== jquery =================
$("h1").hide(1000);
$("h1").show(1000);

$("h2").fadeOut(1000);
$("h2").fadeIn(1000);

// addClass, removeClass, toggleClass, hasClass

if($("h1").hasClass("color-black")){
    $("h1").removeClass("color-black");
}$("h1").addClass("color-red");

$("h2").css("color","blue")
