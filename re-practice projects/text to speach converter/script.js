let select = document.querySelector("select")
let speach = new SpeechSynthesisUtterance();
let voices = [];

window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices();
    speach.voice = voices[0];
    voices.forEach((voice,index)=>(
        select.options[index] = new Option(voice.name,index)
    ))
}
select.addEventListener("change",()=>{
    speach.voice = voices[select.value];
})
document.querySelector("button").addEventListener("click",()=>{
    speach.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speach)
})