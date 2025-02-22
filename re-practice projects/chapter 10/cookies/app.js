console.log(document.cookie);
document.cookie= "user = hello"
document.cookie= "user2 = hello123"
document.cookie= "user = hello1"

let key = prompt("enter your key name")
let value = prompt("enter your value name")

document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie);