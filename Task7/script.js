
function add(a1, a2) {
    return a1 + a2;
}

function sub(a1, a2) {
    return a1 - a2;
}

function div(a1, a2) {
    return a1 / a2;
}

function mul(a1, a2) {
    return a1 * a2;
}

function pow(a1, a2) {
    return a1 ** a2;
}

function mod(a1, a2) {
    return a1 % a2;
}


let input1 = Number(window.prompt("Enter the first number"));
let operation = window.prompt("Enter the operation");
let input2 = Number(window.prompt("Enter the second number"));

if(mod(input1,2) == 0 ){
    document.write("<h4>First number is even.</h4>")
}else{
    document.write("<h4>First number is odd.</h4>")
}

if(mod(input2,2) == 0 ){
    document.write("<h4>Second number is even.</h4>")
}else{
    document.write("<h4>Second number is odd.</h4>")
}

switch (operation) {
    case "+":
        document.write(`--> Result is ${add(input1, input2)}`);
        break;
    case "-":
        document.write(`Result is ${sub(input1, input2)}`);
        break;
    case "/":
        document.write(`Result is ${div(input1, input2)}`);
        break;
    case "*":
        document.write(`Result is ${mul(input1, input2)}`);
        break;
    case "**":
        document.write(`Result is ${pow(input1, input2)}`);
        break;
    case "%":
        document.write(`Result is ${mod(input1, input2)}`);
        break;

    default:
        document.write("Wrong input, TRY AGAIN.");
        break;
}