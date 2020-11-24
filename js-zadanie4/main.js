document.body.style.height = "10000px";
const squere = document.createElement("div");
document.body.appendChild(squere);
squere.style.width = "100%";
// squere.style.height = "100px";
squere.style.position = "fixed";
squere.style.top = 0;
squere.style.left = 0;
squere.style.backgroundColor = "green"
let size = 100;
squere.style.height = size + "px";
let grow = true

const changeHeight = function () {
    if (size >= window.innerHeight / 2) {
        grow = false;
    } else if (size <= 0) {
        grow = true;
    }

    if (grow) {
        size += 10;
        squere.style.height = size + "px";
        squere.style.backgroundColor = "green";


    } else {
        size -= 10;
        squere.style.height = size + "px";
        squere.style.backgroundColor = "red";
    }

}

window.addEventListener("scroll", changeHeight);