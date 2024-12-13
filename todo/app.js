const input = document.getElementById("add-text");
const addbtn = document.querySelector(".add");
const todo = document.getElementById("todo-list");

let editTodo = null;

const showtask = ()=>{
    const inputText = input.value.trim();
    if(inputText === ""){
        alert("input was empty")
        return false;
    }else if(addbtn.innerText == "Edit"){
        editTodo.target.previousElementSibling.innerHTML = inputText;
        addbtn.innerHTML = "Add";
        input.value = "";
        editTodo = null
    }else{

        let li = document.createElement("li");
        let p = document.createElement("p");
        p.innerHTML = input.value
        li.appendChild(p);
        todo.appendChild(li);
        input.value = "";

        const edit = document.createElement("button");
        edit.classList.add("edit");
        edit.innerHTML = "Edit";
        li.appendChild(edit);
        
        const del = document.createElement("button");
        del.classList.add("del");
        del.innerText = "Del";
        li.appendChild(del);

    }
}

const updateTodo = (e)=>{
    if(e.target.innerHTML==="Del"){
        todo.removeChild(e.target.parentElement);
    }else if (e.target.innerHTML==="Edit"){
        input.value=e.target.previousElementSibling.innerHTML;
        input.focus();
        addbtn.innerText = "Edit";
        editTodo=e;
    }
}

addbtn.addEventListener("click",showtask);
todo.addEventListener("click",updateTodo);