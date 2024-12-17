var arr = [
    {dp:"d1.jpg",story:"d1.jpg"},
    {dp:"d2.jpg",story:"d2.jpg"},
    {dp:"c5.webp",story:"c5.webp"},
    {dp:"d2.jpg",story:"d2.jpg"},
    {dp:"d1.jpg",story:"d1.jpg"},
    {dp:"c5.webp",story:"c5.webp"},
]

let stories = document.querySelector(".stories");
let screen = document.querySelector("#full-screen");
var clutter = "";

arr.forEach(function(elem,idx){
    clutter += `<div id="${idx}"class="story"> <img src="${elem.dp}">
</div>`
})
stories.innerHTML = clutter;

stories.addEventListener("click",(dets)=>{
    let clickedElem = dets.target.closest(".story");

    let sty;
    if (clickedElem) {
        let id = clickedElem.id; 
         sty = arr[id].story;
    }
    screen.style.display = "block"
    screen.style.backgroundImage = `url(${sty})`

    setTimeout(function(){
        screen.style.display = "none"
    },3000)

})