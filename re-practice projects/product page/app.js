let img = document.querySelector("#img");
let golas = [document.querySelector(".gola1"),document.querySelector(".gola2"),document.querySelector(".gola3")]
let images = ["image1.png","image2.png","image3.png"]


golas.forEach((gola,index)=>{
    gola.addEventListener("click",()=>{
        golas.forEach(g => g.style.backgroundColor = "grey");
        gola.style.backgroundColor = "blue"
        img.src = images[index]
    })
})
