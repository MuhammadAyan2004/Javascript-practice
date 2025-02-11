const newqoute = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("genbtn");
const category = document.getElementById("category")
const apiKey = 'zIOuSUxHltGN70PDb+CLaA==AUBMndoU4jvA4z0i';
const api_url = `https://api.api-ninjas.com/v1/quotes`;

async function qoute() {
    const response = await fetch(api_url,{method:'Get',headers:{'x-api-key': apiKey}})
    if(response.ok){
        const data = await response.json();
        console.log(data);
        newqoute.innerHTML = data[0].quote;
        author.innerHTML = data[0].author;
    }else{
        newqoute.innerHTML = "No qoute found!!"
        author.innerHTML = "loading..."
    }
}
btn.addEventListener("click",qoute)