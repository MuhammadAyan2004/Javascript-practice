const backbtn = document.getElementById("backbtn")
const nextbtn = document.getElementById("nextbtn")
const slider = document.querySelector(".container")


slider.addEventListener("wheel", (e) => {
    e.preventDefault();
    slider.scrollLeft += e.deltaX / 2;
    slider.style.scrollBehavior = "auto";
})

function slowScroll(increment) {
    let step = 0;
    const steps = 20;
    const intervel = 15
    const target = slider.scrollLeft + increment;
    const scrollstep = increment / steps
    const scrollIntervel = setInterval(() => {
        step++;
        slider.scrollLeft += scrollstep;
        if (step >= steps) {
            clearInterval(scrollIntervel);
            slider.scrollLeft = target
        }
    }, intervel)
}

nextbtn.addEventListener("click", () => slowScroll(1000))
backbtn.addEventListener("click", () => slowScroll(-1000))


// nextbtn.addEventListener("click",()=>{
//     slider.style.scrollBehavior = "smooth";
//     slider.scrollLeft += 1000;
// })
// backbtn.addEventListener("click",()=>{
//     slider.style.scrollBehavior = "smooth";
//     slider.scrollLeft -= 1000;
// })