// const apiKey = "1affce47f40ee2078c888483c60ba828";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// async function weather(city) {
//     const response = await fetch(apiUrl+ city + `&appid=${apiKey}`);
//     if(!response.ok){
//         console.log("no data found");
//         return;
//     }else{
//         let data = await response.json()
//         console.log(data);
//         // console.log(data.weather[0]);
//     }
// }
// weather("karachi")



// const response = await fetch(apiUrl+ "karachi" + `&appid=${apiKey}`);
// api.then((response)=>{
//     return response.json()
// }).then((response)=>{
//     console.log(response);
// })


// const newqoute = document.getElementById("quote");
// const author = document.getElementById("author");
// const btn = document.getElementById("genbtn");
// const category = document.getElementById("category")
// const apiKey = 'zIOuSUxHltGN70PDb+CLaA==AUBMndoU4jvA4z0i';
// const api_url = `https://api.api-ninjas.com/v1/quotes`;

// async function qoute() {
//     const response = await fetch(api_url,{
//         method:'GET',
//         headers:{
//             'x-api-key': apiKey
//         }
//     });
//     if(response.ok){
//         const data = await response.json();
//         console.log(data);
//         // newqoute.innerHTML = data[0].quote;
//         // author.innerHTML = data[0].author;
//     }else{
//         newqoute.innerHTML = "No qoute found!!"
//         author.innerHTML = "loading..."
//     }
// }
// btn.addEventListener("click",qoute)


// sendind post request 

async function createTodo() {

    let options = {
        method: "POST",
        headers: {
            "content-type":"application/json",
        },
        body: JSON.stringify({
            title:"Ayan",
            body:"bhai",
            userid:11,
        })
    }

  let response = await  fetch('https://jsonplaceholder.typicode.com/todos/1')
  let p = await response.json()
  console.log(p);
}
createTodo()

