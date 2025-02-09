const btn = document.querySelector(".genbtn");
const area = document.querySelector(".notes");

function showNotes(){
    area.innerHTML = localStorage.getItem("notes");
}
showNotes()

function saveData(){
    localStorage.setItem("notes",area.innerHTML)
}

btn.addEventListener("click",()=>{
    const textarea = document.createElement("p");
    const img = document.createElement("img");
    img.classList.add("icon");
    img.src = "images/delete.png";
    textarea.classList.add("input-box");
    textarea.setAttribute("contenteditable","true");
    
    area.appendChild(textarea).appendChild(img);
    saveData()
    textarea.addEventListener("input", saveData);
});

area.addEventListener("click",(e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove()
        saveData()
    }
});

area.addEventListener("input", saveData);