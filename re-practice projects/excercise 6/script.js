const input = document.querySelector("#addTask")
const container = document.getElementById("task")
const addbtn = document.getElementById("add")

let editTodo = null

function todo(){
    let value = input.value.trim()
    if(value === ""){
        alert("enter some values to add task")
        return
    }else if(addbtn.innerHTML == "Edit"){
        editTodo.target.parentElement.querySelector("p").innerHTML = input.value
        addbtn.innerHTML = "Add";
        input.value = ""
    }else{
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerHTML = value;
        li.appendChild(p)

        const edit = document.createElement("button")
        edit.innerText = "Edit"
        edit.classList.add("edit")
        li.appendChild(edit)

        const del = document.createElement("button")
        del.innerText = "Remove"
        del.classList.add("del")
        li.appendChild(del)
        container.appendChild(li)
    }
    input.value = ""
    save()

}

container.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        save()
    }else if(e.target.innerHTML == "Remove"){
        e.target.parentElement.remove()
        save()
    }else if(e.target.innerHTML == "Edit"){
        input.value = e.target.previousElementSibling.innerHTML;
        input.focus()
        addbtn.innerText = "Edit"
        editTodo = e
        save()
    }
})

function save(){
    localStorage.setItem("data",task.innerHTML)
}
function show(){
    task.innerHTML = localStorage.getItem("data")
}
show()
