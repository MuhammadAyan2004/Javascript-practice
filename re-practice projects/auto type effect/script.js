const autoText = document.getElementById("changing-text")
const words = ["Programmer","Freelancer","Youtuber"]
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect(){
    let currentWord = words[wordIndex]
    if(isDeleting){
        charIndex--;
    }else{
        charIndex++;
    }
    autoText.textContent = currentWord.substring(0,charIndex)
    
    if(!isDeleting && charIndex === currentWord.length){
        setTimeout(()=> isDeleting = true,1000)
    }else if(isDeleting && charIndex === 0){
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length
    }
    setTimeout(typeEffect,isDeleting ? 100:200)
}
typeEffect();
