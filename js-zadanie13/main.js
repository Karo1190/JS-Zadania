const input = document.querySelector("input");
const div = document.querySelector("div")
const passwords = ["jedEN", "DwA"];
const messeges = ["super", "działa!"];

const lCPasswords = passwords.map(password => password.toLocaleLowerCase());
console.log(lCPasswords);


const showMessege = (e) => {
    const text = e.target.value.toLocaleLowerCase();
    for (let i = 0; i < lCPasswords.length; i++) {
        if (text === lCPasswords[i]) {
            div.textContent = messeges[i]
        }

    }
}



input.addEventListener("input", showMessege)