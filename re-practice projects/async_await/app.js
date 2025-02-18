// async function ayan() {
//     let karachiW = new Promise((res,rej)=>{
//         setTimeout(() => {
//             res(25)
//         }, 2000);
//     }) 
//     let lahoreW = new Promise((res,rej)=>{
//         setTimeout(() => {
//             res(22)
//         }, 5000);
//     }) 
//     console.log("fetching karachi weather....");
//     let kW = await karachiW;
//     console.log("fetched karachi weeather:"+ kW);
//     console.log("fetching lahore weather....");
//     let lw = await lahoreW;
//     console.log("fetched lahore weeather:"+ lw);
//     return [kW,lw]
// }
// const ayyan = async ()=>{
//     console.log("hello im arrow function and i am not waiting");
// }

// const main1 = async () =>{
//     console.log("welcome to async function phenomena");
//     let a = await ayan()
//     let b = await ayyan()
    
// }
// main1()

// try catch

// setTimeout(() => {
//     console.log("you are funny baby");
// }, 2000);
// try{
//     try{
//         setTimeout(() => {
//             console.log("i'm in try method");
//         }, 1000);
//         console.log(hello);
//     }
//     catch(er){
//         console.log("i'm in try try");
//     }
// }
// catch(error){
//     console.log("error comes in baby");
// }

// setTimeout(() => {
//     console.log("you are my love");
// }, 3000);

// setTimeout(() => {
//     console.log("i love u 3 thousand");
// }, 4000);



// use promises to make loadscript function  problem #1



// function scriptLoad(src){

//     return new Promise((res,rej)=>{
//         const script = document.createElement("script")
//         script.src = src
//         document.body.append(script)

//         script.onload = ()=>{
//             res(src)
//         }
//         script.onerror= ()=>{

//             rej(src)
//         }
//     })
// }

// let p1 = scriptLoad("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js");
// p1.then((value)=>{
//     console.log(value);
// }).catch(err => console.log("sorry but your given script is wrong",err))



// use async\await to make loadscript function problem #2


// async function loadscript(src) {

//     const script = document.createElement("script")
//     script.src = src
//     document.body.append(script)
    
//     let loaded = script.onload = src

//     let load = await loaded
//     console.log(load);

// }


// loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js")


// problem #3

// let p = ()=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             reject(new Error("The error comes in me baby"))
//         },3000)
//     })
// }

// async function wait() {
    
//     try{
//         let a = await p()
//         a()
//     }catch(err){
//         console.log(err);
//     }
// }

// wait()


// problem #4

let p1 = async()=>{
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(10)
        }, 2000);
    })
}
let p2 = async()=>{
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(20)
        }, 3000);
    })
}
let p3 = async()=>{
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(30)
        }, 1000);
    })
}


let run = async()=>{
    console.time("run")
    let a1 = p1()
    let a2 = p2()
    let a3 = p3()

    let value = await Promise.all([a1,a2,a3])

    console.log(value);
    console.timeEnd("run")
}
run()