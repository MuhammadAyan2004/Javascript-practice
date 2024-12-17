//const object = {
//    name: "Ayan",
//    age:20,
//    id:" 917-2023",
//    isPass: true
//};
//
//for(let key in object){
//    console.log(key + ": " + object[key] )
//}


// const product={
//     name:"pen",
//     color:"(black)",
//     rating:700,
//     isdeal:true,
//     price:50,
//     offfer:5
// };
// for(let key in product){
//     console.log(key+" : " +product[key]);
    
// }
// console.log("")
// const profile={
//     userName:"muhammad Ayan",
//     follow:true,
//     posts:195,
//     follwers:"500k",
//     following:4,
//     bio:"hy i,m a software engineer and i love to do codes"
// };
// for(let key in profile){
//     console.log(key + " : " + profile);
    
// }

// let num=10;
// if(num%2==0){
//     console.log(num," is even");
// }else{
//     console.log(num,"is odd");
// }


// let age = 36;
// age >= 18? console.log("you are adult") : console.log ("you are not adult");

// let  num = prompt("enter a number");
// if(num % 5===0 ){
//     console.log(num,"is multiple of 5")
// }else{
//     console.log(num,"is not multiple of 5")
// }

// let num=prompt("enter a number: ");
// num = parseInt(num);
// if(num>=80&&num<=100){
//     console.log(num,"grade A")
// }else if(num>=70&&num<=79){
//     console.log(num,"grade B") 
// }else if(num>=60&&num<=69){
//     console.log(num,"grade C")
// }else if(num>=50&&num<=59){
//     console.log(num,"grade D")
// }else if(num>=0&&num<=49){
//     console.log(num,"grade F")
// }else{
//     console.log("Invalid choice. please a enter number between 0-100")
// }

// for(let  i=1;i<=5;i++){
//     console.log(i);   
// }

// let sum=0;
// let n =10;
// for(let i=1; i<=n; i++){
//     sum=sum+i;
// }
// console.log("sum of 1-5 is =", sum);

// let str="MuhammadAyan";
// let size=0;
// for(let val of str){
//     console.log("val =" ,val);
//     size++;
// }

// console.log("string size = ",size);

// let student={
//     name:"ayan",
//     id:917,
// }
// for(let key in student){
//     console.log(key,":",student[key])
// }

//practice qs1
// for(let i=0;i<=90;i++){
//     if(i %9 ===0){
//         console.log(i);
        
//     }
// }

// guess the number game:
// let game= 30;
// let guess= prompt("guess the number b/w 0-100");
// while(guess != game){
//     guess=prompt("oh ho you entered the worng number.please try again. ");
// }
// console.log("congratulation you guess the right number.");

// username generator:
// let userName = prompt("Enter your full-name withoutspaces");
// console.log(`@${userName}${userName.length}`);

// Array question

// let marks=[85,90,73,50,40];
// let sum =0;
// for(let val of marks){
//     sum+=val;
  
// }
// console.log(`students marks are: ${marks}\nThe total marks of student are : ${sum}`)
// let avg= sum/marks.length;
// console.log(`avg number marks of student are: ${avg}`);

// question 2
// let items=[250,300,625,50,900];
// let i=0;
// for(let val of items){
//    let offer=val/10;
//    items[i]=items[i]-offer;
//    console.log(`Items price after offer:${items[1]}`);
//    i++;
// }

// for(let i=0;i<items.length;i++){
//     let offer = items[i]/10;
//     items[i]-=offer;
// }
// console.log(items);

 // questoin 3
// let companies=["bloomberrg","microsoft","uber","google","ibm","netflix"];
 
// companies.shift();

// companies.splice(1,1,"ola");
// companies.push("Amazon");

// functions
//  function sum(a,b){
//     console.log("multiple of 5 and 6  are: ",a*b);
//  }
// sum(5,6);

// const sum =(a,b)=>{
//     console.log(a+b);
// }
// sum(5,9);

// functions practice question{

// function countVowel(str){
//     let count=1;
//     for(const char of str){
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
            
//             console.log(count++);
//         }
//     }
//     return count;
// }
// countVowel("muhammadAyan");


// const count=(str)=>{
//     let count=0;
//     for(let char of str){
//         if (char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//             count++;
//         }
//     }
//     return count;
// }
// count("usman");

// Array topic  in function

// let arr=["karachi","lahore","islamabad","rawalpindi","gujrat","hydrabad"];

// arr.forEach((i,k,arr)=>{
//     console.log(i.toUpperCase(),k,arr);
    
// })

// question related

// q1
// let arr=[2,3,4,5];
// arr.forEach((arr)=>{
//     console.log(arr*arr);
    
// })

// q2 1
// let num=[2,3,4,5];
// let calcSquare=(i)=>{
//     console.log(i*i);
    
// }
// num.forEach(calcSquare);
// q2 2
// let arr=[1,2,3,4,5,6,7,8,9,10];
// let even= arr.filter((val)=>{
//     return val>5;
// })

// console.log(even);

// q3
// let arr=[1,2,3,4,5];
// const outPut =arr.reduce((res,val)=>{
//     return res+val;
// })
// console.log(outPut);

// q4
// let arr=[1,2,3,4,5];
// const outPut =arr.reduce((res,val)=>{
//     return res > val ? res:val;
// })
// console.log(outPut);

// q5
// let studentMarks=[95 ,56,34,99,94,73,29,68,97,95,93,90,80 ,91 ,92];
// let highMark = studentMarks.filter(function(val){
//     return val>=90;
// })
// console.log(highMark);

// q6
// let n= prompt("enter a number:");
// let arr=[]
// for (let i = 1; i <= n; i++){
//     arr[i-1]=i;
// }
// console.log(arr);

// let sum = arr.reduce((res,curr)=>{
//     return res+curr;
// })
// console.log(sum);


// let multi = arr.reduce((res,curr)=>{
//     return res*curr;
// })
// console.log(multi);

// DOM MANIPULATION 
// question 
// let h2=document.querySelector("h2");
// h2.innerText =h2.innerText+" from ayan";

// let box = document.querySelectorAll(".box");
// let idx=1;
// for(let div of box){
//     div.innerText=`new unique value ${idx}`;
//     idx++;
// }

// let btn =document.createElement("button");
// btn.innerText="click me!";
// btn.style.backgroundColor="black";
// btn.style.color="white";
// btn.style.border=" 1px solid black";
// btn.style.width="100px";
// btn.style.padding="10px"


// let div = document.querySelector("div")
// div.before(btn);

// practice question

// let btn=document.createElement("button");
// btn.innerHtml="";
// btn.innerText="click me !"
// btn.style.backgroundColor="red";
// btn.style.color="white";

// let btnComp=document.querySelector("body");
// btnComp.prepend(btn);



// let para= document.querySelector("p");
// para.classList.add("newClass")

// event listner

// let btn=document.querySelector("#mode");
// let bod =document.querySelector("body");
// let currMode="light";
// btn.addEventListener("click",function(){
//     if (currMode === "light" ){
//         currMode="dark"
//         bod.style.backgroundColor="black";
//     }else{
//         currMode="light";
//         bod.style.backgroundColor="white";
//     }
// })

//  classes and objects
// const employee = {
//     clcTax () {
//         console.log("tax rate is 10%");
//     }
// };

// const usman ={
//     salary: 50000,
//     clcTax(){
//         console.log("tax rate 20%");
        
//     }
// };

// usman.__proto__ = employee;

// class car {
//     constructor(brand,milage){
//         console.log("Creating New Object")
//         this.brand = brand;
//         this.milage = milage;
//     }
//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }

// };
// let fortuner = new car("fortuner",12);
// console.log(fortuner);
// let lexux = new car("lexux",10);
// console.log(lexux);


// practice

// class parent {
//     hello(){
//         console.log("hello");
//     }
// };

// class child extends parent{} 

// let greet = new child();

// inheritance
// class person {
//     constructor(name){
//         this.species= "homo domo";
//         this.name=name;
//     }
//     eat(){
//         console.log("eat");
//     }

// };
// class  engineer extends person {
//     constructor(name){
//         super(name);

//     }
//     work(){
//         super.eat();
//         console.log("solve mechanical problems!");
//     }
// };

// let ayan = new engineer("ayan");

// class practice question 

// let Data = "user data";

// class user {
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     viewData(){
//         console.log("data = ", Data)
//     }
// };
// class Admin extends user{
//     constructor(name,email,access){
//         super(name,email);
//         this.access=access;
//     }
//     editData(){
//         Data="some new vlaue";
//     }
// }
// let student1 = new user("ayan","abc@email.com");
// let student2 = new user("usman","dbs@email.com") ;
// let admin = new Admin("admin","admin@collage.com","all access given to admin");

// Async promises promises chain

// console.log("one");
// console.log("two");

// setTimeout(()=>{
//     console.log("hello");

// },4000)

// console.log("three");
// console.log("four");



// let elems = document.querySelectorAll(".elem")

// elems.forEach(function(e){
//     e.addEventListener("mouseenter",()=>{
//         e.querySelector("img").style.opacity = 1
//     })
//     e.addEventListener("mouseleave",()=>{
//         e.querySelector("img").style.opacity = 0
//     })
//     e.addEventListener("mousemove",(d)=>{
//         const img = e.querySelector("img");
//         const mainRect = e.getBoundingClientRect();
//         img.style.left = (d.clientX - mainRect.left) + "px";
//         img.style.top = (d.clientY - mainRect.top) + "px";
//     })
// })


// let nums = [2, 7, 11, 15];
// let target = 9;

// const twoSum = function(nums, target) {
//     let map = new Map();
    
//     for (let i = 0; i < nums.length; i++) {
//         let complement = target - nums[i];
        
//         if (map.has(complement)) {
//             return [map.get(complement), i];
//         }
        
//         map.set(nums[i], i);
//     }
// };

// console.log(twoSum(nums, target));

// let isLoggedin = 0;
// let option = isLoggedin == 1 ? "logout": "login";
// console.log(option);

// console.log(6==="6");

// let input;
// input =  prompt("enter your value")
// if(input ==1 ||input === "y" ||input === "yes"){
//     document.write("continue")
// }else if(input == 0||input === "n"||input === "no"){
//     document.write("end")
// }else{
//     document.write("wrong input")
// }


// switch(input){
//     case "1":
//     case "y":
//     case "yes":
//         document.write("continue")
//         break;        
//     case "0":
//     case "no":
//         document.write("end");
//         break;
//     default:
//         document.write("wrong input")
// }

// let counter = 1;
// sum = 0;
// while(counter <=10){
//     if(counter %2==0){
//         sum = sum + counter
//     }
//     counter++
// }
// console.log(sum);

// outer: for(let counter = 1; counter <= 10; counter++){
//     if(counter == 5){
//         continue;
//     }
//     document.write(counter);
//     document.write('<br>');

//     for(let counter2 = 1; counter2<3; counter2++ ){
//         if(counter == 3){
//             // document.write("chutiya")
//             // document.write('<br>')
//             break outer;
//         }
//         document.write("hello");
//         document.write('<br>');    
//     }
// }

// let input = [1,2,3,4,5];

// let even=[];
// let odd=[];

// for(let i =0; i<input.length; i++){
//     if(input[i] %2 == 0){
//         even.push(input[i])
//     }else{
//         odd.push(input[i])
//     }
// }
// console.log(even)
// console.log(odd)






// seperate even or odd with user input
// let prom = Number(prompt("numbers to seperate even or odd"))
// function user_input(prom){
//     let arr = [];
//     for(let i=1; i<=prom; i++){
//         arr.push(i)
//     }
//     return arr;
// }
// function seperateEvenOdd(numbers){
//     let even = [];
//     let odd = [];
//     for(let i = 0; i < numbers.length; i++){
//         if(numbers[i] %2 === 0 ){
//             even.push(numbers[i])
//         }else{
//             odd.push(numbers[i])
//         }
//     }
//     console.log("even number of given array are: " , even);
//     console.log("odd number of given array are: " , odd);
// }
// let numbers =  user_input(prom)
// seperateEvenOdd(numbers);









// sum of even and odd by taking user input in an array


// let promt = Number(prompt("give any number to seperate even or add numbers and add them:"))

// function user_input(promt){
//     let arr=[];
//     for(let i = 1; i<=promt; i++){
//         arr.push(i)
//     }
//     return arr;
// }
// function EvenOdd(number){
//     let even = [];
//     let odd = [];
//     let sumEven = 0; 
//     let sumOdd = 0; 
//     for(let i = 0; i< number.length; i++ ){
//         if(number[i] %2 === 0 ){ 
//             even.push(number[i])
//             sumEven += number[i]
//         }else{
//             odd.push(number[i]);
//             sumOdd += number[i];
//         }
//     }
//     console.log(even);
//     console.log("even number",sumEven)
//     console.log(odd);
//     console.log("odd number",sumOdd)
// }
// let number = user_input(promt)
// EvenOdd(number);



//  find maximum numbe in an array by taking user_input


// let max = 0;
// let promt = Number(prompt("enter number to find the maximum:"));
// function user_input(limit){
//     return Array.from({ length: limit }, (_, i) => i + 1);
// }
// function maximun(number){
//    return Math.max(...number)
// }
// let number = user_input(promt);
// max = maximun(number);
// console.log("Array:",number);
// console.log("max number:", max);







// reverse array by taking user input


// let pom = Number(prompt("enter number:"));
// function user_input(limit){
//     return Array.from({length: limit}, (_,i) => i + 1)
// }
// let number = user_input(pom);
// console.log("actual array", number);
// console.log("reverse array", number.reverse());





// Write a program to take an array of numbers and count how many are positive, negative, and zero. Print the counts.

// let arr  =[0,1,2,3,8,32,0,4,6,0,3,29,-5,-6,-8,-100];
// let positive = [];
// let negative = [];
// let zero = [];

// for( let i = 1; i<=arr.length; i++){
//     if(arr[i]>=1){
//         positive.push(arr[i]);
//     }else if(arr[i] < 0){
//         negative.push(arr[i])
//     }else{
//         zero.push(0);
//     }
// }
// console.log("actual array",arr);
// console.log("positive numbers in an array",positive.length);
// console.log("negative numbers in an array",negative.length);
// console.log("zero number in an array",zero);






// Write a program that removes duplicate numbers from an array and prints the unique values.

// let strArr=[1,2,3,4,2,5,6,7,8,1,3,9,5]
// let find_Duplicate = arr => arr.filter(
//     (item,index)=>arr.indexOf(item) === index);
// console.log(strArr);
// console.log(find_Duplicate(strArr));


// 2 methods
// let numbers = prompt("Enter numbers separated by commas:").split(',').map(Number);

// function removeDuplicate(arr){
//     let uniqueNumbers = [...new Set(arr)]
//     return uniqueNumbers;
// }

// let uniqueNumbers = removeDuplicate(numbers)
// console.log("actual value",numbers);
// console.log("unique numbers",uniqueNumbers);





// Create a program that takes an array of numbers and checks which numbers are prime. Print the prime numbers.


// let numbers  = prompt("enter numbers to check its prime number or not and split them with comma:").split(',').map(Number);
// function isPrime(num){
//     if(num <=1) return false;
//     for(let i = 2; i<= Math.sqrt(num); i++){
//         if(num %i === 0 ) return false;
//     }
//     return true;
// }
// function findPrimes(numbers){
//     return numbers.filter(isPrime)
// }
// const primeNumbers = findPrimes(numbers);
// console.log("prime numbers are:", primeNumbers);





// Write a program that calculates the sum of all numbers in an array.

// let numbers = prompt("give me numbers to sum of them plz split numbers with comma:").split(',').map(Number);
// let sum = 0;
// for(let i = 0; i<= numbers.length-1; i++){
//         sum += numbers[i];
// }
// console.log("actual array:", numbers);
// console.log("sum of all numbers in an array:",sum);





// Write a program that takes a number from the user and finds its index in an array. If the number is not found, print a message saying it's not in the array.

// let number = [10,20,30,40,50];
// console.log("array",number);

// let userInput;

// while(true){
//         userInput = Number(prompt("enter a number to find it's index in the array"));
//         if(userInput === number[number.length - 0]){
//                 console.log("meao");
//                 break;
//         }else{
//            findIndex(number,userInput)
//         }
// }

// function findIndex(arr,num){
//         let index = arr.indexOf(num);
//         if(index !== -1){
//             console.log(`The number ${num} is at index ${index}`);
//         }else{
//             console.log(`The number ${num} is not at index`);
//         }
// }




// Write a program to shift all elements of an array one position to the right. The last element should become the first.


// function shiftedArrayRight(arr){
//         if(arr.length === 0) 
//         return false;

//         let lastElement = arr[arr.length -1]    
//         for(let i = arr.length-1; i > 0; i--){
//                 arr[i] = arr[i-1];
//         }
//         arr[0] = lastElement;
//         return arr;
// }
// let numbers = [1,2,3,4,5];
// console.log("original Array",numbers);

// let shiftedArray = shiftedArrayRight(numbers)
// console.log("shifted Array",shiftedArray); 


// practice 

// function add(){
//         if( arguments.length == 0){
//                 console.log("no parameter passed.");
//         }else{
//                 let sum = 0;
//                 for(let i = 0; i<arguments.length; i++){
//                         sum = sum + arguments[i]
//                 }
//                 console.log(sum);
//         }

// }
// add(10,10,20,40)




// anonymous function
// let sohw = function (a , b){
//         let c = a+b;
//         console.log(c);
// }
// sohw(5,7)

// part#2
// setTimeout(function(){
//         document.write("hello world")

// },3000)


// immediately invoked function

// let msg = "hello guys"

// function show(){
//         console.log(msg);
// }
// show();


// let pear = {
//         student_1:{
//                 name: "ayan",
//                 class: "undergradute",
//                 roll_No: 918_2023
//         },
//         student_2:{
//                 name: "usman",
//                 class: "undergradute",
//                 roll_No: 919_2023
//         },
//         student_3:{
//                 name: "mustufa",
//                 class: "undergradute",
//                 roll_No: 920_2023
//         },
//         student_4:{
//                 name: "esar",
//                 class: "undergradute",
//                 roll_No: 921_2023
//         }
// }

// for(let key in pear){
//         console.log(key);
//         for(let keys in pear[key]){
//                 console.log(pear[key][keys]);
//         }
// }


// let pear = new Object();

// pear.name = "ayan";
// pear.age = "20"

// console.log(pear.name,pear.age);

// let pear = {
//         name: "ayan",
//         age: 20,

//         get getName(){
//                 return this.name.toUpperCase();
//         },
//         set setName(n){
//                 this.name = n.toUpperCase();
//         }
// }
// pear.name = "usman";

// console.log(pear.getName);
// console.log(pear);


// Getter and setter function 
// method 1 Encapsulation
// class User {
//         constructor(name, email,id){
//                 this._name = name; 
//                 this._email = email;
//                 this._id = id;
//         }
//         get name() {
//                 console.log("getter call");
//                 return this._name;
//           }
//         get id() {
//                 console.log("getter call");
//                 return this._id;
//           }
//         get email() {
//                 console.log("getter call");
//                 return this._email;
//           }  
//         set name(newName){
//                 if(newName){
//                         console.log("setter call");
//                         this._name = newName;
//                 }
//         }
//         set id(newid){
//                 if(newid){
//                         console.log("setter call");
//                         this._id = newid;
//                 }
//         }
//         set email(newEmail){
//                 if(newEmail){
//                         console.log("setter call");
//                         this._email = newEmail;
//                 }
//         }
// }

// const user = new User("ayan", "ayan@gmail.com","917-2023");
// for(let key in user){
//         console.log(key,":",user[key]);
// }

// user.name = "Ali";
// user.id = "918-2023";
// user.email = "ali@gmail.com";
// for(let key in user){
//         console.log(key,":",user[key]);
// }
// console.log(user);


// metho2 Reactive State Management

// const State = {
//  _count:0,
//  get count(){
//         console.log("getter called");
//         return this._count
//  },
//  set count(newValue){
//         console.log("setter called");
//         this._count = newValue;
//  }
// }

// console.log(State.count);
// State.count = 10;
// console.log(State.count);

// method 3 data validation

// class form{
//         constructor(){
//                 this._email = "";
//         }
//         get emial(){
//                 console.log("getter called");
//                 return this._email;
//         }
//         set email(newEmail){
//                 if(newEmail.includes("@")){
//                         this._email = newEmail;
//                 }else{
//                         console.log("your given email is invalid");
//                 }
//         }
// }

// const page = new form();
// // console.log(page);
// // page.email = "invalidEmail"
// page.email = "ayan@gmail.com";
// console.log(page._email);



// method 4 lazy evalution
// class person{
//         constructor(firstName, lastName){
//                 this._firstName = firstName
//                 this._lastName = lastName
//         }
//         get fullName(){
//                 return `${this._firstName} ${this._lastName}`
//         }
// };
// const user1 = prompt("enter your first name");
// const user2 = prompt("enter your last name");

// const per = new person(user1,user2);
// console.log(per.fullName);


// method 5 Interfacing with APIs or Libraries

// class  userData{
//         constructor(){
//                 this._data = null;
//         }
//         get data(){
//                 if(!this._data){
//                   console.log("Fetching data from API...");
//                   this._data = {id:1, name: "ayan"};
//                 }
//                 return this._data;
//         }
// }
// const user = new userData();
// user._data = "hello123"
// console.log(user.data);

// method 6 DOM Manipulation in Custom Elements

// class myElement extends HTMLElement{
//         constructor(){
//                 super();
//                 this._value = "";
//         }
//         get value(){
//                 return this._value;
//         }
//         set value(newValue){
//                 this._value = newValue;
//                 this.textContent = `value: ${this._value}`
//         }
// }

// customElements.define("my-element",myElement);
// const element = document.createElement("my-element");
// document.body.appendChild(element);
// element.value = "hello world!";
// console.log(element.textContent);

//  method 7 

// class BankAccount {
//         constructor(owner, balance) {
//           this.owner = owner;
//           this._balance = balance;
//         }
      
//         get balance() {
//           return `Your balance is $${this._balance}`;
//         }
      
//         set balance(newBalance) {
//           console.log("You cannot set the balance directly!");
//           this._balance = newBalance;
//         }
//       }
      
//       const account = new BankAccount("Ayan", 1000);
//       console.log(account.balance); // Your balance is $1000
//       account.balance = 2000; // You cannot set the balance directly!
//       console.log(account.balance);
//       console.log(account);


// method 8 object constructor function


function Student(first, last, age, cls){
        this.firstName= first;
        this.lastName= last;
        this.age= age;
        this.class= cls;
}
let studentNo = prompt("enter student number")
let first = prompt("enter your first name:");
let last = prompt("enter your last name:");
let age = prompt("enter your age name:");
let cls = prompt("enter your class name:");
let student = new Student(first, last,age,cls);
console.log(student);