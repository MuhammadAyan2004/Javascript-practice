// localStorage.setItem("name","ayan")
// console.log((localStorage.getItem("name")))
// name1.innerText = localStorage.getItem("myname")

// input.addEventListener("input",(e)=>{
//     let a = localStorage.setItem("myname",e.target.value)
//     name1.innerText = localStorage.getItem("myname")
// })
// Ageinput.addEventListener("input",(e)=>{
//     let b = localStorage.setItem("myage",e.target.value)
//     age.innerText = localStorage.getItem("myage")
// })



const name1 = document.getElementById("name")
const age = document.getElementById("age")
const input = document.getElementById("input")
const Ageinput = document.getElementById("input-age")
const push = document.getElementById("push")

let ls = JSON.parse(localStorage.getItem("myinfo")) || []

function saveData(name,age){
    let newData = { 
        Id: ls.length,
        Name:name,
        Age:Number(age), 
    };
    ls.push(newData);
    localStorage.setItem("myinfo",JSON.stringify(ls))
    sumAges()
}
function sumAges(){
    let totalAge = ls.reduce((sum,allAges)=> sum + (allAges.Age),0);
    console.log(totalAge);
}
push.addEventListener("click",()=>{
    saveData(input.value,Ageinput.value)
    name1.innerText = input.value
    age.innerText = Ageinput.value
})
// localStorage.clear()
sumAges()



// function sum(num1,num2){
//     'use strict'
//     num1 = 100;
//     num2 = 200;

//     return arguments[0]+arguments[1];
// }

// console.log(sum(10,10));