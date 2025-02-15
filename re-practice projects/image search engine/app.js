accessKey ="7SeyhzhUS-J4z46RfFIHZE9Sku0hQBVdfxJdaIj5ECY"

const input = document.getElementById("input");
const searchBtn = document.getElementById("search");
const images = document.querySelector(".images");
const showBtn = document.querySelector(".show-more");


let keyword = '';
let page = 1;

async function randomImages() {
    const apiurl = `https://api.unsplash.com/photos?page=${page}&client_id=${accessKey}&per_page=30`;
    const response = await fetch(apiurl);
    const data = await response.json();
    showIages(data)
}

async function searchImage() {
    keyword = input.value;
    const apiurl = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=30`;
    const response = await fetch(apiurl);
    const data = await response.json();
    console.log(data);
    showIages(keyword ? data.results : data)
}
function showIages(results){
    if(page === 1) images.innerHTML = "";

        results.forEach((result)=>{
            const image = document.createElement("img");
            image.src = result.urls.small;
            const imagelink = document.createElement("a");
            imagelink.href = result.links.html;
            imagelink.appendChild(image);
            imagelink.target= "_blank"
            images.appendChild(imagelink);
        })
    showBtn.style.display = "block"
}

searchBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    page=1;
    searchImage();
})
input.addEventListener("keydown",(e)=>{
    page=1;
    if(e.key === "Enter"){
        searchImage()
    }
})

showBtn.addEventListener("click",()=>{
    page++;
    if(input.value){
        searchImage();
    }else{
        randomImages();
    }
})

randomImages();