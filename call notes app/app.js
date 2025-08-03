let create = document.getElementById("create")
let create_btn = document.getElementById("create-btn")
let close_btn = document.getElementById("close-btn")
let formContainer = document.querySelector(".form")
let form = document.querySelector("form")
let cardContainer = document.querySelector(".card-content")
let upbtn = document.getElementById("up")
let downbtn = document.getElementById("down")


let count = 0;
var lscards = JSON.parse(localStorage.getItem("cards")) || []

function formopen() {
    cardContainer.style.display = "none"
    formContainer.style.display = "block"
}
function formclose() {
    formContainer.style.display = "none"
    cardContainer.style.display = "flex"
}

create.addEventListener("click", () => {
    formopen()
})

function addToCard() {
    const img_url = document.getElementById("img-inp")
    const nameInp = document.getElementById("name-inp")
    const cityInp = document.getElementById("city-inp")
    const purposeInp = document.getElementById("purpose-inp")

    create_btn.addEventListener("click", () => {
        let lcImg = img_url.value;
        let lcName = nameInp.value;
        let lcCity = cityInp.value;
        let lcPurpose = purposeInp.value;
        let newCard = { lcImg, lcName, lcCity, lcPurpose }


        lscards.push(newCard)
        localStorage.setItem("cards", JSON.stringify(lscards))


    })
}

function showcards() {
    const img = document.getElementById("pic-url");
    const names = document.querySelector(".name");
    const city = document.getElementById("city-name");
    const purpose = document.getElementById("purpose-name");

    const updateCard = () => {
        img.src = lscards[count].lcImg;
        names.textContent = lscards[count].lcName;
        city.textContent = lscards[count].lcCity;
        purpose.textContent = lscards[count].lcPurpose;
    };

    if (lscards.length > 0) {
        count = 0;
        updateCard();
    }

    upbtn.addEventListener("click", () => {
        if (count > 0) {
            count--;
            updateCard();
        }
    });
    downbtn.addEventListener("click", () => {
        if (count < lscards.length - 1) {
            count++;
            updateCard();
        }
    });
}

addToCard()
showcards()
