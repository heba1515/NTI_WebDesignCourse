
let searchBTN = document.querySelector(".btn");
let input = document.querySelector(".num");

const tasks = [
    "Complete the todo-list task.",
    "Study JS DOM.",
    "Prepare to the interview.",
    "Make the lunch.",
    "Watch the TV."
];

document.getElementById('count').textContent = `Total tasks: ${tasks.length}`;


searchBTN.addEventListener("click",()=>{
    let taskIndex = input.value;

    if (taskIndex >= 1 && taskIndex <= tasks.length) {
        document.getElementById('result').textContent = `Task ${taskIndex}: ${tasks[taskIndex - 1]}`;
    } else {
        document.getElementById('result').textContent = "Not Found!";
    }
})


