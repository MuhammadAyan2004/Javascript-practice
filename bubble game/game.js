let bubbleArea = document.querySelector(".pbtom")
let timevalue = document.querySelector("#timerValue")
let score = document.querySelector("#score")
let hitval = document.querySelector("#hitvalue")
let timer = 60

function gameNewHit(){
    hitval.innerHTML = Math.floor(Math.random()*10)
}

function makebubble(){
    let clutter = ""

for(let i = 1; i<=126; i++){
    let rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`
}
bubbleArea.innerHTML = clutter;
}
function maketimer(){
    let timeint = setInterval(()=>{
        if(timer >= 0){
            timevalue.innerHTML = timer--
            if(timer < 9){
                timevalue.style.color = "red"
            }else{
                timevalue.style.color = "cadetblue"
            }
        }else{
            clearInterval(timeint)
        }
    },1000)
}

let scores = 0;
function handleScore (e){
    if(e.target.innerHTML === hitval.innerHTML){
        scores +=10
    }else if (timevalue.innerHTML == 0){
        bubbleArea.removeEventListener("click",handleScore)
        return;
    }
    score.innerHTML = scores
    makebubble()
    gameNewHit()
}

bubbleArea.addEventListener("click",handleScore)


gameNewHit()
maketimer()
makebubble()
