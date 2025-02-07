let buttons = document.querySelectorAll(".btn");
let toastbox = document.querySelector(".toastbox");

function toastNotification(e){

    const toast = document.createElement("div");
    toast.classList.add("toast");
    const msg =  e.target.getAttribute("data-message");
    const toastType = e.target.classList[1]
    toast.innerHTML = msg;
    toast.classList.add(toastType);
    toastbox.append(toast);

    setTimeout(()=>{
        toast.remove()
    },5000)

}

buttons.forEach(btn=>{
    btn.addEventListener("click",toastNotification)
})
