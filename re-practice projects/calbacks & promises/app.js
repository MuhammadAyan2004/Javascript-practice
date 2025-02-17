// const prompt = require('prompt-sync')();

// const { resolve } = require("path");

// const { rejects } = require("assert");
// const { error } = require("console");
// const { resolve } = require("path");

// const { error } = require("console");

// const { promises } = require("dns");

// const { error } = require("console");

// let user_input = prompt("what's your name: ")
// console.log(user_input); 

//  callback function
// function loadscript(src,callback){
//     var script = document.createElement("script")
//     script.src = src
//     script.onload = function(){
//         console.log("loaded scrript with  src: " + src);
//         callback(null,src)
//     }
//     script.onerror = function(){
//         console.log("error loaded script: " + src);
//         callback(new error("src got some error"))
//     }
//     document.body.append(script) 
// }
// function hello(error,src){
//     if(error){
//     console.log(error);
//     return
//     }
//     alert("hello: " + src)
// }

// loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",hello)


//  promises

// let p1 = new Promise(function(resolve,reject){

//     function hello(a,b){
//         if(a > 0){
//             resolve(a+b)
//         }else{
//             reject(new Error("a is less then zero"))
//         }
//     }
//     hello(0,2)
// })


// let p2 = new Promise(function(resolve,reject){
//     console.log("promise is pending");
//     setTimeout(() => {
//         reject(new Error("i am an error"))
//     }, 1000);
// })

// p1.then((value)=>{
//     console.log(value);
// })
// p1.catch((error)=>{
//     console.log("some error occured in p2", error.message);
// })


// console.log(p1);


// let p1 = new Promise((resolve,reject)=>{
//     try{
//         function add(a,b){
//             if(a>0){
//                 resolve(a+b)
//             }else{
//                 throw new Error("a is less then 0")
//             }
//         }
//         add(2,1)
//     }catch(error){
//         reject(error)
//     }
// })

// p1
// .then((value)=>console.log("The code was successfully run and the final output is: ",value))
// .catch((error)=>console.log("some error occured in p1"))
// console.log(p1);

// let ice_cream = new Promise((resolve,reject)=>{
//     let got_ice_cream;
//     setTimeout(()=>{
//         got_ice_cream = false;
//         if(got_ice_cream){
//             resolve(got_ice_cream)
//         }else{
//             reject(got_ice_cream)
//         }
//     },1000)
// })
// ice_cream.then(()=>{
//     console.log("eat ice cream");
// }).catch(()=>{
//     console.log("call mom");
// })




// promise chaining

// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("resolved after 2s");
//         resolve(100)
//     },2000)
// })
// p1.then((value)=>{
//     console.log(value);
//     let p2 = new  Promise((resolve,reject)=>{
//         setTimeout(()=>{resolve("promise 2")},2000)
//     })
//     return p2
// }).then((value)=> {
//     console.log(value,"we are done");
//     return 2
// }).then(value => console.log(2))



// making load script using promise

// const loadscript = (src)=>{

//     return new Promise((resolve,reject)=>{
//         const script = document.createElement("script");
//         script.type = "text/javascript"
//         script.src = src
//         document.body.appendChild(script)
//         script.onload = ()=>{
//             resolve(src)
//         }
//         script.onerror = ()=>{
//             reject(src)
//         }
//     })
// }

// let p1 = loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js")

// p1
// .then(value => {
//     console.log("script successfully uploaded", value)
//     return loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js")
// })
// .then(value => console.log("second script is ready",value))
// .catch(error => console.log("we are sorry but we are having problem to  load this script"))


// attacing multiple handler

// let p1 = new Promise((res,rej)=>{
//     console.log("promise not resolved yet");
//     setTimeout(() => {
//         res("hey i am resolved")
//     }, 2000);
// })

// p1.then(value => console.log(value))
// p1.then(value => {
//     setTimeout(() => {
//         console.log("i am another function of p1",value)
//     }, 2000);
// })


// promise api

let p1 = new Promise((res,rej)=>{
    setTimeout(() => {
        res('value 1')
    }, 10000);
})
let p2 = new Promise((res,rej)=>{
    setTimeout(() => {
        rej(new Error("hey i'm here"))
    }, 2000);
})
let p3 = new Promise((res,rej)=>{
    setTimeout(() => {
        res('value 3')
    }, 3000);
})

// Promise method
// let Promise_all = Promise.all([p1,p2,p3])
// let Promise_all = Promise.allSettled([p1,p2,p3])
// let Promise_all = Promise.resolve([p1,p2,p3])
// let Promise_all = Promise.reject([p1,p2,p3])
// let Promise_all = Promise.race([p1,p2,p3])
let Promise_all = Promise.any([p1,p2,p3])
Promise_all.then(value => console.log(value))
