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

// let p1 = async()=>{
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res(10)
//         }, 2000);
//     })
// }
// let p2 = async()=>{
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res(20)
//         }, 3000);
//     })
// }
// let p3 = async()=>{
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res(30)
//         }, 1000);
//     })
// }


// let run = async()=>{
//     console.time("run")
//     let a1 = p1()
//     let a2 = p2()
//     let a3 = p3()

//     let value = await Promise.all([a1,a2,a3])

//     console.log(value);
//     console.timeEnd("run")
// }
// run()


// excercise #5

// async function hackerman() {
    
//     const div = document.querySelector("div")
//     const pTag1 = document.createElement("p")
//     const pTag2 = document.createElement("p")
//     const pTag3 = document.createElement("p")
//     const pTag4 = document.createElement("p")
//     const pTag5 = document.createElement("p")

//     let pro1 = ()=>{
//         return new Promise((res,rej)=>{
//             setTimeout(() => {
//                 pTag1.style.color = "green"
//                 let p1 = "Initializing hack program...."
//                 pTag1.textContent = p1
//                 res(pTag1)
//             }, 1000);
//         })
//     }
//     let pro2 = ()=>{
//         return new Promise((res,rej)=>{
//             setTimeout(() => {
//                 pTag2.style.color = "green"
//                 let p2 = "Hacking into the mainframe...."
//                 pTag2.textContent = p2
//                 res(pTag2)
//             }, 2000);
//         })
//     }
//     let pro3 = ()=>{
//         return new Promise((res,rej)=>{
//             setTimeout(() => {
//                 pTag3.style.color = "green"
//                 let p3 = "Downloading the secret files...."
//                 pTag3.textContent = p3
//                 res(pTag3)
//             }, 3000);
//         })
//     }
//     let pro4 = ()=>{
//         return new Promise((res,rej)=>{
//             setTimeout(() => {
//                 pTag4.style.color = "green"
//                 let p4 = "Deleting all the files...."
//                 pTag4.textContent = p4
//                 res(pTag4)
//             }, 5000);
//         })
//     }
//     let a1 = await pro1()
//     div.append(a1)
//     let a2 = await pro2()
//     div.append(a2)
//     let a3 = await pro3()
//     div.append(a3)
//     let a4 = await pro4()
//     div.append(a4)

//     const btn = document.createElement("button")
//     btn.textContent = "want to stop the hacking press me" 
//     btn.addEventListener("click",()=>{
//         pTag5.textContent = "ha ha ha you can't stop me"
//         pTag5.style.color = "green"
//         div.append(pTag5)
//     })

//     div.append(btn)
// }

// hackerman()


//async function hackerman() {
    
// const div = document.querySelector("div");
// const messages = [
//     "Initializing hack program....",
//     "Hacking into the mainframe....",
//     "Downloading the secret files....",
//     "Deleting all the files...."
// ]
// for(let i = 0; i<messages.length; i++){
//     await new Promise(res => setTimeout(res (i+1)*1000))
//     const p = document.createElement("p")
//     p.style.color = "green"
//     p.textContent = messages[i]
//     div.append(p)
// }

// const btn = document.createElement("button")
// btn.textContent = "want to stop the hacking press me" 
// btn.addEventListener("click",()=>{
//     const pTag5 = document.createElement("p");
//     pTag5.textContent = "ha ha ha you can't stop me"
//     pTag5.style.color = "green"
//     div.append(pTag5)
// })

// div.append(btn)
// }

// hackerman() 

const text = document.getElementById("text")
const messages = [
    "Initializing hack program....",
    "Hacking into the mainframe....",
    "Downloading the secret files....",
    "Deleting all the files...."
]

const sleep = async(seconds)=>{
    return new Promise((res)=>{
        setTimeout(()=>{
            res(true)
        }, seconds * 1000)
    })
}

const showhack = async(messages)=>{
    await sleep(2)
    console.log(messages);
    text.innerHTML = text.innerHTML + messages + "<br>"
}


(async()=>{
    for(let i = 0; i<messages.length; i++){
        await showhack(messages[i])
    }
})()