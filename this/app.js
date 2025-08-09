let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");
let curd = document.querySelector(".users")

let userManager = {
    users: [],
    init: function(){
        curd.innerHTML = JSON.parse(localStorage.getItem("cards"))   
        form.addEventListener("submit",(e)=>{
            e.preventDefault()
            this.addUser()
        })
        this.removeUser()
    },
    addUser: function(){
        this.users.push({
            name:username.value,
            role:role.value,
            bio:bio.value,
            pic:photo.value
        })
        form.reset()
        this.renderUi()
    },
    renderUi:function () {
        curd.innerHTML = ""
        this.users.forEach((user)=>{
            const card = document.createElement("div");
            card.classList.add("card");

            const img = document.createElement("img");
            img.src = user.pic;
            img.alt = "User Photo";

            const h3 = document.createElement("h3");
            h3.textContent = user.name;

            const roleP = document.createElement("p");
            roleP.classList.add("role");
            roleP.textContent = user.role;

            const bioP = document.createElement("p");
            bioP.classList.add("bio");
            bioP.textContent = user.bio;

            const removebtn = document.createElement("button");
            removebtn.classList.add("remove");
            removebtn.textContent = "remove";


            card.appendChild(img);
            card.appendChild(h3);
            card.appendChild(roleP);
            card.appendChild(bioP);
            card.appendChild(removebtn);

            curd.appendChild(card);
            
        })        
        
        this.removeUser()
        localStorage.setItem("cards",JSON.stringify(curd.innerHTML))

    },
    removeUser: function(){
        let delbtn = document.querySelectorAll(".remove")
        delbtn.forEach((dbtn)=>{
            dbtn.addEventListener("click",(e)=>{
            this.users.pop(e.target)
            this.renderUi()
        })
        })
    }
}

userManager.init()