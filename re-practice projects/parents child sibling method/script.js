// const input = document.querySelector("input")
// const addbtn = document.querySelector(".add")
// const editbtn = document.querySelector(".edit")
// const cont = document.querySelector(".cont")

// let editTodo = null


// editbtn.addEventListener("click",(e)=>{
//     editTodo = e.target.parentElement
//     input.value = e.target.previousElementSibling.innerText;
//     input.focus();
//     addbtn.innerHTML = "edit";
// })

// addbtn.addEventListener("click",()=>{
//     if(addbtn.innerText === "edit"){
//         editTodo.querySelector("p").innerHTML = input.value;
//         addbtn.innerHTML = "add"
//         input.value = ""

//     }
// })

// excercise 3 random joke generator


let jokes = [
    "I told my laptop I needed a break, and now it won’t turn on. 💻😭",
"I started a diet, but my snacks didn’t get the memo. 🍕😂",
"My sleep schedule and common sense are in a long-distance relationship. 😴",
"I don’t need a hairstylist, gravity already messed up my hair for free. 💨",
"My wallet is like an onion—opening it makes me cry. 💸😭",
"I told myself I’d wake up early, but we both knew I was lying. ⏰😆",
"My bed and I love each other, but the alarm clock keeps trying to break us up. ⏳",
"I checked my bank account today… just to make sure I’m still broke. 💀",
"Life is short, so smile while you still have teeth. 😁",
"I was going to tell a time-travel joke, but you didn’t like it. ⏳😂",
"Why did the scarecrow win an award? Because he was outstanding in his field. 🌾",
"I used to play piano by ear, but now I use my hands. 🎹😂",
"Parallel lines have so much in common. It’s a shame they’ll never meet. 📏",
"I told my wife she should embrace her mistakes… she gave me a hug. 🤦‍♂️😂",
"I have a joke about construction, but I’m still working on it. 🚧",
"Why don’t skeletons fight each other? They don’t have the guts. 💀",
"I only know 25 letters of the alphabet. I don’t know Y. 🤔",
"What do you call cheese that isn’t yours? Nacho cheese! 🧀😂",
"I wondered why the baseball was getting bigger… then it hit me. ⚾🤕",
"Why can’t your nose be 12 inches long? Because then it would be a foot. 👃👣",
"I told my suitcase there’d be no vacations this year, and now it’s emotional baggage. 🎒😭",
"What did the ocean say to the beach? Nothing, it just waved. 🌊😂",
"Did you hear about the restaurant on the moon? Great food, no atmosphere. 🌕",
"Why do cows have hooves instead of feet? Because they lactose! 🐄😂",
"What do you call an alligator in a vest? An investigator. 🐊🕵️",
"I told my wife she should start doing lunges. That was a big step forward. 🤸‍♀️",
"Why don’t eggs tell jokes? Because they might crack up. 🥚😂",
"I used to be a baker, but I couldn’t make enough dough. 🍞",
"Why did the math book look sad? Because it had too many problems. 📚",
"Why did the coffee file a police report? It got mugged. ☕🚔",
"What do you call fake spaghetti? An impasta. 🍝😂",
"Why couldn’t the bicycle stand up by itself? It was two-tired. 🚲",
"I was addicted to soap, but I’m clean now. 🛁😂",
"Why do oranges wear sunscreen? So they don’t peel. 🍊☀️",
"I wanted to be a doctor, but I didn’t have the patience. 🏥😂",
"I just got fired from the calendar factory… All I did was take a day off. 📅",
"Why did the golfer bring two pairs of pants? In case he got a hole in one. ⛳",
"I asked my dog what’s two minus two. He said nothing. 🐶😂",
"I don’t trust stairs. They’re always up to something. 🏠",
"Why did the tomato blush? Because it saw the salad dressing. 🍅😂",
"I told my phone it needed space, now it won’t text me back. 📱",
"I started reading a book about anti-gravity… It’s impossible to put down. 📖😂",
"I told my plants I would water them, but I lied. Now they’re all leafing me. 🌱",
"What do you call a bear with no teeth? A gummy bear. 🐻😂",
"Why did the banana go to the doctor? It wasn’t peeling well. 🍌",
"I ordered a chicken and an egg online… I’ll let you know which comes first. 🐔🥚",
"I asked my wife if I was the only one she’d been with… She said, ‘Yes, the others were all nines and tens.’ 😭",
"What do you call a lazy kangaroo? A pouch potato. 🦘😂",
"I’m reading a book about teleportation. It’s bound to take me places. 📚",
"I can’t believe I got fired from the clock factory. All I did was take a few seconds. ⏰",
"I told my dog he was getting old. He said, ‘I’m not aging, I’m just becoming more pawsome.’ 🐶",
"I asked my suitcase if it wanted to travel, but it said it had too much baggage. 🎒",
"What did one plate say to the other plate? Lunch is on me! 🍽️",
"Why do bees have sticky hair? Because they use honeycombs. 🐝",
"Why don’t skeletons ever start a band? They don’t have the organs. 🎸",
"What do you get when you cross a snowman and a vampire? Frostbite. ❄️🦇",
"I went to buy camouflage pants, but I couldn’t find any. 🤷‍♂️",
"I told my WiFi it needed a vacation… It finally disconnected. 📶",
"I got a new job at a bakery because I kneaded dough. 🍞",
"My wife told me to stop impersonating a flamingo. I had to put my foot down. 🦩",
"Why do ducks have feathers? To cover their butt quacks. 🦆😂",
"Did you hear about the claustrophobic astronaut? He just needed a little space. 🚀",
"I put my phone on airplane mode, but it’s still on the couch. 📱",
"I can’t believe I got fired from my job at the orange juice factory. I just couldn’t concentrate. 🍊",
"I wrote a book on reverse psychology. Don’t read it. 📖",
"I got a pet termite… I named him Clint. Clint Eatswood. 🐜",
"I named my dog ‘Five Miles’ so I can tell people I walk Five Miles every day. 🐕",
"I used to be a baker, but I couldn’t make enough dough. 🍞",
"I wanted to learn how to drive a stick, but I kept getting stuck. 🚗",
"I asked the librarian if the library had any books on paranoia. She whispered, ‘They’re right behind you.’ 😳",
"I told my wife she should embrace her mistakes… She gave me a hug. 💔😂",
"I don’t play soccer because I enjoy it, I do it for the kicks. ⚽",
"I started a band called 1023MB… We still haven’t got a gig. 🎸",
"I told my wife she should start doing lunges. That was a big step forward. 🏃",
"I made a belt out of watches… It was a waist of time. ⏳😂",
"I was going to make a chemistry joke, but all the good ones Argon. ⚗️",
"My computer told me I needed an update… I told it I needed a break. 💻😂"
];
const genbtn = document.querySelector(".genbtn");
const jokehere = document.querySelector(".joke");



function randomJokes(){
    
    let randomJoke = jokes[Math.floor(Math.random() * 100)]
    jokehere.innerHTML = randomJoke
}

genbtn.addEventListener("click",randomJokes)