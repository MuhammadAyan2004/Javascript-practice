const img = document.querySelector("img")
const heart = document.querySelector("#mid");
const heart2 = document.getElementById("hy");

let check = 0 ;

img.addEventListener("dblclick",()=>{
    
    if(check == 0){
        heart2.classList.remove("ri-heart-line")
        heart2.classList.add("ri-heart-3-fill")
        heart2.style.color = "red"
        check = 1;
    }

    heart.style.transform = "scale(5)";
    setTimeout(() => {
        heart.style.transform = "scale(0)";
    }, 500);
})

heart2.addEventListener("click",()=>{
    if(check == 0){
        heart2.classList.remove("ri-heart-line")
        heart2.classList.add("ri-heart-3-fill")
        heart2.style.color = "red"
        check = 1;

    }else if(check == 1){
        heart2.classList.add("ri-heart-line")
        heart2.classList.remove("ri-heart-3-fill")
        heart2.style.color = "white"
        check = 0;
    }

})
