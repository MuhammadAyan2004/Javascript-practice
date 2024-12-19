const input = document.getElementById("add-text");
const addbtn = document.querySelector(".add");
const list = document.getElementById("todo-list");
let editTodo = null;

const showTask=()=>{
    let inputText = input.value.trim();
    if(inputText == ""){
        alert("write something to add");
        return false;
    }else if(addbtn.innerHTML == "edit"){
        editTodo.target.previousElementSibling.innerHTML = inputText;
        addbtn.innerHTML = "Add";
        input.value = "";
        editTodo = null;
    }else{
    let p = document.createElement("p")
    let li = document.createElement("li")
    p.innerHTML = inputText;
    li.appendChild(p)
    list.appendChild(li)
    input.value = "";
    
    const edit = document.createElement("button");
    edit.classList.add("edit");
    edit.innerText = "edit";
    li.appendChild(edit)

    const del = document.createElement("button");
    del.classList.add("del");
    del.innerText = "remove";
    li.appendChild(del)
 }
}
const updateTode = (e)=>{
    if(e.target.innerHTML === "remove"){
        list.removeChild(e.target.parentElement)
    }else if(e.target.innerHTML === "edit"){
        input.value = e.target.previousElementSibling.innerHTML;
        input.focus();
        addbtn.innerText = "edit";
        editTodo = e
    }
}


list.addEventListener("click",updateTode)
addbtn.addEventListener("click",showTask)