let input = document.getElementById("inputBox");
let btn = document.querySelectorAll("button")

let str = "";
let arr = Array.from(btn);

arr.forEach(button =>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML == "=") {   
            str= eval(str);
            input.value = str;
            str = "";
        }else if(e.target.innerHTML == "Ac"){
            str = "";
            input.value = "";
        }else if(e.target.innerHTML == "Del"){
            str = str.substring(0,str.length - 1);
            input.value= str;
        }else{
            str += e.target.innerHTML;
            input.value = str;
        }
    })
})

