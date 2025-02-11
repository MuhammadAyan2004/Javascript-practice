const genBtn = document.getElementById("genBtn");
const copybtn = document.getElementById("copy");
const input = document.getElementById("input");
const hidebtn = document.getElementById("showPass");
const strength = document.querySelector(".strength");

// password hide and show functionalty
hidebtn.addEventListener("click", () => {
    if (input.type == "password") {
        input.type = "text";
        hidebtn.src = "eye-open.png"
    } else {
        input.type = "password";
        hidebtn.src = "eye-close.png"
    }
})

// random password generator function
const lenght = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "`~!@#$%^&*()_+{}[]|;:'>.<,?/";
const allChar = upperCase + lowerCase + number + symbol;

function password() {
    let password = "";
    while (lenght > password.length) {
        password += allChar[Math.floor(Math.random() * allChar.length)]
    }
    input.value = password
    PasswordStrength()
}

// copy funtion 
function copypass() {
    input.select();
    document.execCommand("copy")
}

// show password strength funtion
function PasswordStrength() {
    if (input.value.length <= 0) {
        strength.innerHTML = "";
    } else if (input.value.length <= 4) {
        strength.innerHTML = "Password is weak";
        strength.style.color = "red"
        input.style.border = "2px solid red";
    } else if (input.value.length <= 8) {
        strength.innerHTML = "Password is medium";
        strength.style.color = "yellow"
        input.style.border = "2px solid yellow"
    } else if (input.value.length <= 16) {
        strength.innerHTML = "Password is strong";
        strength.style.color = "green";
        input.style.border = "2px solid green";
    }
}
input.addEventListener('input', PasswordStrength);
genBtn.addEventListener("click", password)
copybtn.addEventListener("click", copypass)