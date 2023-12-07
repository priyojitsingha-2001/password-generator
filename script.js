const passwordBox = document.getElementById("password");

const includeUpperCase = document.querySelector('#upperCase');
const includelowerCase = document.querySelector('#lowerCase');
const includeNumber = document.querySelector('#numbers');
const includesymbols = document.querySelector('#symbols');

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>/?";

function genPass() {

    let password = "";
    let length = document.getElementById("length").value;
    while (password.length < length) {
        if (includeUpperCase.checked)
            password += upperCase[Math.floor(Math.random() * upperCase.length)];
        if (includelowerCase.checked)
            password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        if (includeNumber.checked)
            password += number[Math.floor(Math.random() * number.length)];
        if (includesymbols.checked)
            password += symbols[Math.floor(Math.random() * symbols.length)];
    }
    passwordBox.value = password;
}

//when user clicks the generate button it executes the genPass method
document.getElementById("generate").addEventListener("click", genPass);

// when user clicks on the copy image/icon..
document.querySelector("img").addEventListener('click', () => {
    passwordBox.select();//here we select the text content
    document.execCommand("copy");//here we then paste the content to clipboard
    passwordBox.value = "";
})

//footer
const anchorTag = document.createElement('a');
anchorTag.textContent = "Prioyjit Singha";
anchorTag.href = "https://github.com/priyojitsingha-2001";
anchorTag.target = "_blank"
anchorTag.style.color = "white";
anchorTag.style.textDecoration = "none";

const currentYear = new Date().getFullYear();

document.querySelector("footer").innerHTML = `&copy; ${currentYear} ${anchorTag.outerHTML} | All rights reserved`;