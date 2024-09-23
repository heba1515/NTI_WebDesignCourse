
// var currentDate = new Date();

// var date = currentDate.getDate()
// console.log(date);

// var days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]

// var day = currentDate.getDay();
// console.log(day);
// console.log(days[day]);

// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

// var month = currentDate.getMonth();
// console.log(month);
// console.log(months[month]);

// var year = currentDate.getFullYear()
// console.log(year);

// document.write('<h2 class="bg">any thing</h2>')
// document.write('<div class="bg"> </div>')

// // document.querySelector('h1').innerHTML="<p>replaced</p>"
// // document.querySelector('h1').innerHTML+="<p>concat</p>"
// // document.querySelector('h2').textContent = "<p>text</p>"

// var firstName = window.prompt("Enter your first name")
// var lastName = window.prompt("Enter your last name")
// var age = Number(window.prompt("Enter your age"))      // prompt always return a text.
// // document.querySelector('h1').innerHTML= firstName + " " + lastName;
// document.querySelector('h1').innerHTML= `Welcome ${firstName} ${lastName},`
// document.querySelector('h2').innerHTML= "Your age is " + age;



// function add(a1, a2){
//     return a1 + a2;

// }

// console.log(add(18,15));


// function greet(){
//     document.querySelector("h1").innerHTML="Welcome ";
// }

// function print(func, name){
//     func();
//     document.write(`<h2>${name}</h2>`)
// }

// print(greet,"heba");


// // Calback function: is a function with no need to named
// var add = function(a1,a2){
//     console.log(a1+a2)
// }

// add(3,5);


// // (arrow)inline function: 
// var arrow = ()=>{
//     console.log("This is Arrow Function.")
// }

// var a = (x)=>x
// console.log(a(3))


// let arr = ['a','b','c','d','e'];
// for(let i=arr.length-1 ; i>=0; i--){
//     console.log(arr[i]);
// }

// console.log("-------------")

// let m=arr.length-1;
// while(m>=0){
//     console.log(arr[m]);
//     m--;
// }

// console.log("-------------")

// mm=arr.length-1;
// do{
//     console.log(arr[mm]);
//     mm--;
// }while(mm>=0);

// let gender = window.prompt("Enter your gender");
// switch(gender){
//     case "male":
//         console.log("Gender is Male");
//         break;
//     case "female":
//         console.log("Gender is Female");
//         break;
//     default:
//         console.log("Not Found.");
//         break;
// }

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let currentdate = new Date();
let mon = currentdate.getMonth();
switch (mon) {
    case 0:
        document.write(`Month ${months[mon]} is in `);
        document.write("Winter")
        break;
    case 1:
        document.write(`Month ${months[mon]} is in `);
        document.write("Winter")
        break;
    case 2:
        document.write(`Month ${months[mon]} is in `);
        document.write("Spring")
        break;
    case 3:
        document.write(`Month ${months[mon]} is in `);
        document.write("Spring")
        break;
    case 4:
        document.write(`Month ${months[mon]} is in `);
        document.write("Spring")
        break;
    case 5:
        document.write(`Month ${months[mon]} is in `);
        document.write("Summer")
        break;
    case 6:
        document.write(`Month ${months[mon]} is in `);
        document.write("Summer")
        break;
    case 7:
        document.write(`Month ${months[mon]} is in `);
        document.write("Summer")
        break;
    case 8:
        document.write(`Month ${months[mon]} is in `);
        document.write("Autumn")
        break;
    case 9:
        document.write(`Month ${months[mon]} is in `);
        document.write("Autumn")
        break;
    case 10:
        document.write(`Month ${months[mon]} is in `);
        document.write("Autumn")
        break;
    case 11:
        document.write(`Month ${months[mon]} is in `);
        document.write("Winter")
        break;
    default:
        document.write("Not Found.");
        break;
}


/* (task) search about the diff between var Vs let Vs const */