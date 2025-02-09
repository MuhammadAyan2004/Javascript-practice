const submit = document.querySelector(".submit")
const card = document.querySelector(".card")
const okbtn = document.querySelector(".ok")


submit.addEventListener("click", () => {
    card.style.visibility = "visible";
    card.style.top = "50%";
    card.style.transform = "translate(-50%,-50%) scale(1)";
})
okbtn.addEventListener("click", () => {
    card.style.visibility = "hidden";
    card.style.top = "0";
    card.style.transform = "translate(-50%,-50%) scale(0.1)";
})

