const btn = document.querySelector("button");
const li = document.querySelectorAll("li");
// let display = true;
let size = 10

// PĘTLA
// btn.addEventListener("click", function () {
//     // size++;
//     for (let i = 0; i < li.length; i++) {
//         if (!li[i].style.display) {
//             console.log("dodałem blok");
//         }
//         li[i].style.display = "block";
//         li[i].style.fontSize = `${size}px`;
//     }
//     size++;
// })

// foreach

btn.addEventListener("click", () => {
    li.forEach((liItem) => {
        liItem.style.display = "block";
        liItem.style.fontSize = size + "px";
    })
    size++;
})







// Moje rozwiązanie
// const increaseSize = function () {
//     if (display)

//         for (let i = 0; i < li.length; i++) {
//             li[i].style.display = "block";
//             li[i].style.fontSize = `${size}px`;
//         }
//     size++;
// }

// btn.addEventListener("click", increaseSize);