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

for(let i =1; i<=3000; i++){
    console.log(i +":"+ " i love you");
}