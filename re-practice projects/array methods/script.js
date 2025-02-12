// let arr = [1,2,3,4,5]

// arr.forEach((value, index, array)=>{
//     console.log(value);
// })
// console.log(arr.push(6));
// console.log(arr.push(7));
// console.log(arr.push(8));
// console.log(arr.push(9));
// console.log(arr);

// console.log('-----------------------');
// console.log("map method");
// let arr2 = [1,2,3,4,5]
// let b =  arr2.map((value,index,array)=>{
//     console.log(value);
//     return value + 1
// })
// console.log(b);
// console.log(arr2);


// console.log("----------------------");
// console.log("filter method");


// let arr3 = [1,2,3,4,5,10,99,43,37,100];
// let arr4 = [1,5,3,2,100,43,37];
// let c = arr3.filter((value)=> arr4.includes(value));

// console.log(c);
// console.log(arr3);


// console.log("----------------------");
// console.log("find method");


// let arr5 = [1,2,3,4,5,10,99,43,37,100];
// let arr6 = [1,5,3,2,100,43,37];
// let d = arr5.find((value)=> arr6.includes(value));

// console.log(d);



// console.log("----------------------");
// console.log("reduce method");


// let arrs = [1,2,3,4,-5,-10,-11];
// let e = arrs.reduce((h1, h2)=>{
//     console.log(h1-h2);
//     return h1 - h2
// })
// console.log(e);




// closures in js

// message = "hy";

// function hello1(){
//     let message = "bye";
//     console.log("hello 1:" + message);

//     let c = function hello2(){
//         console.log("i am c: "+message);
//     }
//     // hello2()
//     return c
// }

// a = hello1()
// a()

// function returnfunc(){
// const x = ()=>{
//     let a = 1;
//     console.log(a);
//     const y = ()=>{
//         // let a = 2;
//         console.log(a);
//         const z = ()=>{
//             // let a = 3
//             console.log(a);
//         }
//         z()
//     }
//     a = 100
//     y()
// }
// return x
// }

// let a = returnfunc();
// a()




// hoisting in js

// greet();

// function greet(){
//     console.log("goodd");
// }

// guess the number

// let game = Math.floor(Math.random() * 5) + 1;
// let score = 0;
// let scoreOnScreen = document.querySelector(".score")

// while(true){
//     let number = prompt("guess the number b/w 1-5 or type 'exit' to quit the game")

//     if(number.toLowerCase() === "exit"){
//         alert("game over. Thanks for playing");
//         break;
//     }

//     number = Number(number);

//     if(isNaN(number) || number < 1 || number >5 ){
//         alert("please enter a valid number between 1-5");
//         continue;
//     }
//     if(number === game){
//         alert("you guess the right answer: " + number);
//         score++;
//         scoreOnScreen.textContent = score;
//         game = Math.floor(Math.random() * 5) + 1
//     } else {
//         alert("you guess the wrong answer, try again!")
//     }
// }

// snake, water, gun game 

const relo = document.querySelector("button").addEventListener("click",()=>location.reload());
let game = ["snake", "gun", "water"];
let random = game[Math.floor(Math.random() * game.length)]
let myscore = document.querySelector(".score")
let compscore = document.querySelector(".comp")
let inScore = 0
let outScore = 0
let start = 0;

while(start<=2){
    let usergame = prompt("select any one b/w snake, gun or water to battle with computer");

        if (random == "snake" && usergame == "gun") {
            alert("you win this match, computer choose snake. Because gun shoot snake")
            inScore++
            myscore.textContent = inScore
            start++
            continue;
        } else if (random == "water" && usergame == "snake") {
            alert("you win this match because snake drink water")
            inScore++
            myscore.textContent = inScore
            start++
            continue;
        } else if (random == "gun" && usergame == "water") {
            alert("you win this match because water drew gun")
            inScore++
            myscore.textContent = inScore
            start++
            continue;
        } else {
            alert("computer win this match");
            outScore++;
            compscore.textContent = outScore;
            start++
            continue;
        }
        break;
}




