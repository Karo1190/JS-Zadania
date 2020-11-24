const input = document.getElementById("pass");
const div = document.querySelector(".message")

const passwords = ["user", "wiosna"];
const messages = ["To będzie dobry dzień", "Teraz mamy zime"];
// div.textContent = "";

input.addEventListener("input", (e) => {
    div.textContent = "";
    // console.log(e.target.value)
    const text = e.target.value;

    passwords.forEach((password, index) => {
        if (password === text) {
            div.textContent = messages[index];
        }


    })


})

input.addEventListener("focus", (e) => {
    e.target.classList.add("active");
});

input.addEventListener("blur", (e) => {
    e.target.classList.remove("active");
})



// if (password === e.target.value) {
//     div.textContent = message;
// } else {
//     div.textContent = "";
// }