const btn1 = document.getElementById("btn-1"); 
const text = document.getElementById("text"); 
let check = 0;

btn1.addEventListener("click",()=>{
    if(check == 0){
        text.innerHTML = "Friends";
        btn1.innerText = "Remove";
        btn1.style.backgroundColor = "red";
        check = 1;
    }else{
        text.innerHTML = "Stranger";
        btn1.innerText = "Add Friend";
        btn1.style.backgroundColor = "green";
        check = 0 
    } 
})
