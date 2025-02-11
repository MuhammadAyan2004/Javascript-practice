let input = document.getElementById("input");
let qrimg = document.getElementById("img");
let imgbox = document.querySelector(".imgBox")
let button = document.querySelector("button");

button.addEventListener("click",()=>{
    if(input.value.length > 0){
        qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
        imgbox.classList.add("show-img")
    }else{
        input.classList.add("error");
        setTimeout(()=>{
            input.classList.remove("error");
        },1000)
    }
})
