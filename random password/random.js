let input = document.getElementById("input-box");
let gen = document.querySelector("button");
let copy = document.getElementById("copy")

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()~{}<>?[]";

const final = upperCase + lowerCase + number + symbol;
let lenght = 12

function generate(){
    let password = "";
    while(lenght > password.length){
        password += final[Math.floor(Math.random() * final.length)]
        input.value = password
    }
}
function copypaste(){
    input.select();
    document.execCommand("copy")
}
gen.addEventListener("click",generate)
copy.addEventListener("click",copypaste)