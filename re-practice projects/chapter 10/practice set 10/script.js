// question # 1


// const input = document.querySelector("input")
// const btn = document.querySelector("button")
// const apiKey = "1affce47f40ee2078c888483c60ba828";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


// async function weather(city) {
//     const response = await fetch(apiUrl+ city + `&appid=${apiKey}`);
//     if(!response.ok){
//         alert("invalid city")
//     }else{
//         let data = await response.json()
//         console.log(data);
//         document.querySelector(".city").innerHTML = data.name
//         document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°c";
//         document.querySelector(".humidity").innerHTML = data.main.humidity+ "%";
//         document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";
//         let img = document.querySelector(".weatherIcon");
//         if(data.weather[0].main == "Clouds"){
//             img.src = "images/clouds.png";
//         }else if (data.weather[0].main == "Rain"){
//             img.src="images/rain.png";
//         }else if (data.weather[0].main == "Clear"){
//             img.src="images/clear.png";
//         }else if (data.weather[0].main == "Drizzle"){
//             img.src="images/drizzle.png";
//         }else if (data.weather[0].main == "Mist"){
//             img.src="images/mist.png";
//         }else if (data.weather[0].main == "Humidity"){
//             img.src="images/humidity.png";
//         }else if (data.weather[0].main == "Snow"){
//             img.src="images/snow.png";
//         }else if (data.weather[0].main == "Wind"){
//             img.src="images/wind.png";
//         }else if(data.weather[0].main == "Smoke"){
//             img.src="images/mist.png";
//         }
//     }
// }


// btn.addEventListener("click",()=>{
//     weather(input.value);
//     input.value = ""
// })



// question # 2

const genbtn = document.querySelector(".genbtn")
const container = document.querySelector(".notes")

function showNotes (){
    container.innerHTML = localStorage.getItem("notes")
}
showNotes()

function saveNotes () {
    localStorage.setItem("notes",container.innerHTML)
}

function createNote(){

    const p = document.createElement("p")
    p.classList.add("input-box")
    p.setAttribute("contenteditable","true")

    const img = document.createElement("img");
    img.src = "images/delete.png";
    img.classList.add("icon")

    p.appendChild(img)
    container.appendChild(p)
    saveNotes()
    p.addEventListener("input",saveNotes)
}
container.addEventListener("click",(e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove()
        saveNotes()
    }
})

genbtn.addEventListener("click",createNote);