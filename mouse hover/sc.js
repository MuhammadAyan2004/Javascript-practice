const main = document.querySelector("main");
const move = document.querySelector("#mouse");
const move2 = document.querySelector("#mouse2");

main.addEventListener("mousemove", (e) => {
    move.style.left = e.clientX  + "px";
    move.style.top = e.clientY  + "px";
    move2.style.left = e.clientX  + "px";
    move2.style.top = e.clientY  + "px";
});