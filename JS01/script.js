// alert("Hello World");

// console.log("code is running")
// console.log("code is aksing for trouble")
// console.log("code is looking good")
//  let x = "Ashmit Dubey"
//  let y = 22
//  let z = 3.55;
//  const p = true
//  let q = undefined;
//  let r = null;

//  console.log(x, y, z, p, q, r);
//  console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

// //  let o = {
//     name: "Ashmit",
//     age: 22,
//     isAdult: true
//  }
//     console.log(o);

//  console.log("Hello I am conditional tutorial")

// let age = 1;
// let grace = 2;

// age += grace
// console.log(age)
// console.log(age + grace)
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age ** grace)
// console.log(age % grace)

/*
I am a 
multiline 
comment
*/

// if (age == 18) {
//     console.log("You can drive");
// }

// else if (age == 0) {
//     console.log("Are you kidding?")
// }

// else if (age == 1) {
//     console.log("Are you again kidding?")
// }

// else {
//     console.log("You cannot drive");
// }


// a = 6;
// b = 8;
// let c = a > b ? (a - b) : (b - a);

// /*
// translates to:
// if(a>b){
//     let c = a - b;
// }
// else {
//     let c = a - b;
// }

// */   

// // Loops JavaScript 

// let a= 1;
// console.log(a);
// console.log(a+1);
// console.log(a+2);

// for(let i=0; i<5; i++){
//     console.log(a+i);

// for (let x = 0; x < 10; x++) {
//    console.log(a + x); 


// let obj = {
//     name: "Ashmit",
//     age: 22,
//     company: "implitude"
// }

// for (const key in obj) {
//    const element = obj[key];
//    console.log(key, element);  
// }

// let i=5;
// while(10>i){
//    i++  ;
//     console.log(i);
//    //  i--;
// }

// let random = Math.random();
// let a = prompt("Enter first number");
// let b = prompt("Enter second number");
// let c = prompt("Enter operation");

// let obj = {
//    "+": "-",
//    "*": "+",
//    "-": "/",
//    "/": "**",
// }

// if (random > 0.1) {
//    // console.log('the result is ${a} ${c} ${b}');
//    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
// }

// else {
//    c = obj[c];
//    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
// }


// console.log("This is strings tutorial")
// let a = "Harry";
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);
// console.log(a[4]);
// // console.log(a[5]);

// console.log(a.length)

// let real_name = "Harry"
// let friend = "Rohan"
// console.log("His name is " + real_name + " and his friends name is " + friend)
// console.log(`His name is ${real_name} and his friends name is ${friend}`)

// let b = "ShivamSh"
// console.log(b.toUpperCase())
// console.log(b.toLowerCase()) 
// console.log(b.length) 
// console.log(b.slice(1, 5)) 
// console.log(b.slice(1)) 

// console.log(b.replace("Sh", "77"))
// console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"))

// console.log(b)

// let m = 6
// function factorial(number) {
//     let arr = Array.from(Array(number).keys)
//     console.log(arr)
// }

// factorial(a)
console.log("script.js initializing")
// let boxes = document.getElementsByClassName("box1")
let boxes = document.querySelector(".container").children
// console.log(boxes)

function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    // let val2 = 126; 
    // let val3 = 26; 
    // let val4 = 200; 
    return `rgb(${val1}, ${val2}, ${val3} )`
}

Array.from(boxes).forEach(function (e) {
        e.style.backgroundColor = getRandomColor();
        e.style.color = getRandomColor();
    })
