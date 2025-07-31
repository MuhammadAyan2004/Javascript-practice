const users = [
    {
        name: "Ava Thompson",
        bio: "Frontend dev and coffee lover.",
        url: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Zara Malik",
        bio: "Content writer and tea addict.",
        url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Jake Kim",
        bio: "App developer and music fan.",
        url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Ethan Chen",
        bio: "Cloud geek and drone flyer.",
        url: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Isabella Rossi",
        bio: "Digital marketer and traveler.",
        url: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "miNoah Ahmed",
        bio: "Full-stack dev and gamer.",
        url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Mia Nakamura",
        bio: "AI fan and sci-fi nerd.",
        url: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=500&q=80"
    }
];

let input = document.querySelector("input")
let btn = document.querySelector("button")

function showUsers(arr){
        arr.forEach(box=>{
        const container = document.createElement("div");
        container.classList.add("details");

        const img = document.createElement("img");
        img.src = box.url;

        const h3 = document.createElement("h3");
        h3.textContent = box.name;

        const p = document.createElement("p");
        p.textContent = box.bio;

        container.appendChild(img);
        container.appendChild(h3);
        container.appendChild(p);

        document.querySelector(".bottom").appendChild(container);
    })
}

function handlefilter () {
    const val = input.value.trim().toLowerCase()
    document.querySelectorAll(".details").forEach(el => el.remove());
    if(val === ""){
        showUsers(users)
    }else{
        const filtered = users.filter(val => val.name.toLowerCase().includes(input.value.toLowerCase()))
        showUsers(filtered)
    }
}

function debounce(func, delay) {
    let timeoutId;
    return function () {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func()
        }, delay);
    };
}

const debouncedFilter = debounce(handlefilter, 500);

btn.addEventListener("click",handlefilter)
input.addEventListener("input",debouncedFilter)

handlefilter()
