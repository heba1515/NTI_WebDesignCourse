
let form = document.querySelector("form");
let inputField = document.querySelector(".input");
let todos = document.querySelector(".tasks");


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(inputField.value);

    let task = document.createElement("p");
    task.textContent = inputField.value;

    let doneBTN = document.createElement("button");
    doneBTN.textContent="Done";
    doneBTN.classList.add("done");
    doneBTN.addEventListener("click",()=>{
        task.style.textDecoration="line-through";
    })

    let deleteBTN = document.createElement("button");
    deleteBTN.textContent="Delete";
    deleteBTN.classList.add("delete");
    deleteBTN.addEventListener("click",()=>{
        task.remove();
    })


    todos.appendChild(task);
    task.appendChild(doneBTN);
    task.appendChild(deleteBTN);

    inputField.value = "";
})



