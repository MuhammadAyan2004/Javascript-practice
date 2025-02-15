const input = document.getElementById("input")
const buttons = document.querySelectorAll("button")
console.log(buttons);
let str = "";
buttons.forEach(btn=>{
    btn.addEventListener("click",(e)=>{
        if(e.target.innerText == "AC"){
            input.value = str;
            str = "";
        }else if(e.target.innerText == "DE"){
            str =  str.substring(0,str.length-1)
            input.value = str;
        }else if(e.target.innerText == "="){
            str = eval(str);
            input.value = str;
        }else{
            str += e.target.innerText;
            input.value = str
        }
    })
})
