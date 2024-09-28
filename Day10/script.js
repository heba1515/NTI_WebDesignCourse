// console.log("one")
// console.log("two")
// console.log("three")
// setTimeout(() => {
//   console.log("four")
// },0)

// console.log("five")

//===========Ajax============
// 1- create http request
// 2- define callback function
// 3- open
// 4- send
//________
//ready state : 0-4 ,, status: 200, 404





//======= single product: =========
// let productsSection = document.querySelector(".products");
// let xhr= new XMLHttpRequest();
// xhr.onload = ()=>{
//     if(xhr.readyState===4 ){
//         console.log("all is ok!")
//          if( xhr.status== 200){
//             let response = JSON.parse(xhr.responseText);
//             console.log(response);
//             productsSection.innerHTML= `
//                 <div class="card">
//             <img src="${response.thumbnail}" alt="">
//             <h3>${response.title}</h3>
//             <p>
//                 ${response.description}.
//             </p>
//             <p>price: <span class="price">${response.price}$</span></p>
//         </div>
//             `
//          } 
// }
// };
// xhr.open("GET","https://dummyjson.com/products/1", true);
// xhr.send();




//https://dummyjson.com/products/search?q=bag