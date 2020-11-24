const squere = document.createElement("div");
document.body.appendChild(squere);

let size = 100;
let grow = true;
squere.style.height = size + "px";
squere.style.width = size + "px";



window.addEventListener("scroll", function () {
    if (size >= window.innerWidth / 2) {
        grow = false;
    } else if (size <= 0) {
        grow = true;
    }

    if (grow) {
        size += 5;
        squere.style.width = size + "px";
        squere.style.height = size + "px";
    } else {
        size -= 5;
        squere.style.width = size + "px";
        squere.style.height = size + "px";
    }
})