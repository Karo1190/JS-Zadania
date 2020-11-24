const input = document.querySelector("input");
const div = document.querySelector("div");
const passwords = ["jedEN", "DwA"];
const messages = ["super", "dział!"];

passwords.forEach((password, i) => {
    passwords[i] = password.toLocaleLowerCase();

})

const showMessage = (e) => {
    const text = e.target.value.toLocaleLowerCase();

    passwords.forEach((password, i) => {
        if (password === text) {
            div.textContent = messages[i]
        }


    })



}
// Najprostsze rozwiązanie
// const text = e.target.value

// passwords.forEach((password, index) => {
//     if (password.toLocaleLowerCase === text.toLocaleLowerCase) {
//         div.textContent = messages[index]
//     }


// })




input.addEventListener("focus", (e) => {
    e.target.classList.add("active");
});

input.addEventListener("blur", (e) => {
    e.target.classList.remove("active");
})


input.addEventListener("input", showMessage);