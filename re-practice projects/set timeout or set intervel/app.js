// let c = function (a,b) { 
//     console.log("heloo " + (a + b));
     
// }

// setTimeout(c,3000,1,2)

// let a = setTimeout(function(){
//     document.writeln("hello my name is ayan")
// },1000)

// clearInterval(a)

// let sec = 60
// setInterval(()=>{
    // for(let i = 60; i>= 1; i--){
    //         console.log(i);
    // }
// },6000)





// manual clock using set interval function 

// let s = setInterval(()=>{
//     let sec = document.querySelector(".sec")
//     if(sec.innerHTML === "0"){
//         sec.innerHTML = "60"
//     } else{
//         sec.innerHTML -= 1
//     }
// },1000)

// let mins = 1
// let m = setInterval(()=>{
//     let min = document.querySelector(".minute")
//     if(min.innerHTML === "60"){
//         min.innerHTML = "00";
//         mins = 1
//     }else if(min !== "00" || min === "00"){
//         min.innerHTML = mins++
//     }
     
// },60000)

// let hours = 1
// let h = setInterval(()=>{
//     let hour = document.querySelector(".hour")
//     if(hour.innerHTML === "100"){
//         hour.innerHTML = "00";
//         hours = 1
//     }else if(hour !== "00" || hour === "00"){
//         hour.innerHTML = hours++
//     }
     
// },600000)

let hour = document.querySelector(".hour")
let min = document.querySelector(".minute")
let sec = document.querySelector(".sec")

function clock(){
    let time = new Date();
    hour.innerHTML = time.getHours()
    min.innerHTML = time.getMinutes()
    sec.innerHTML = time.getSeconds()
}

setInterval(clock,1000)

clock()
