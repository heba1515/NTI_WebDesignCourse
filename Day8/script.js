// output = document.getElementById("p1");
// output = document.getElementsByTagName("p");
// output = document.getElementsByClassName("myp");

// output = document.querySelector("p").style.color= "blue"

// console.log(output)

// let output = document.getElementsByTagName("li");
// for (let i = 0; i < output.length; i++) {
//     output[i].style.color = "hotpink"
// }


// let feel = window.prompt("What's your mode?");
// let happyImg = "https://i.etsystatic.com/34133108/r/il/a64f48/3961355950/il_fullxfull.3961355950_k15t.jpg";
// let sadImg = "https://clipart-library.com/images/piq8B6pAT.jpg";
// document.querySelector("img").style.width="100px"
// document.querySelector("img").style.height="100px"

// switch (feel) {
//     case "happy":
//         document.querySelector("img").src = happyImg;
//         break;
//     case "sad":
//         document.querySelector("img").src = sadImg;
//         document.write("All will be okay :)")
//         break;
    
// }



let list = document.querySelector("ol");
// list.innerHTML+=`<li>item3</li>`;

// let newli = document.createElement("li");
// newli.innerHTML= `<img src=${sadImg}>`;
// list.appendChild(newli);


function addElement(){
    let listItem = document.createElement("li");
    listItem.textContent = "new item";
    list.appendChild(listItem);
}

// document.querySelector("button").addEventListener("click",addElement);

document.querySelector("button").addEventListener("click",()=>{
    let item = document.createElement("li");
    item.innerHTML=`
    new item
    <button onClick="${delet}">delete</button>
    `;
    list.appendChild(item);
});

function delet(){
    event.target.parentElement.remove()
}