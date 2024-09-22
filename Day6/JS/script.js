var name = "Heba";
// var age =  " 23."

document.write("<b>Welcome </b>" + name + ", <br><br>");
// document.write("Your age is " + age);

// window.alert("Welcome " + name);



var arr = ["Heba", "Sabri", "Abd Elazim"];
var deleted = arr.pop();
arr.unshift(deleted);
// document.write(arr[0]+" "+arr[1]+" "+arr[2]);
document.write(arr.join(" "));


/*
   the difference between function & method:
   method -> related to specific something(ex: pop&push related to array)
   function -> can use it with anything
*/


// // slice Vs splice
// var slice = arr.slice(0,2); //start,end
// console.log(slice);
// console.log(arr);

// arr.splice(0,2,"Mohammed"); //start,steps
// console.log(arr)


// var c = arr.concat(arr1,arr2);


var num =3 ;
console.log(num**2) //Math.pow(num,2)