let red = 100;
let green = 100;
let blue = 100;
let increaseColor = true;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;


// const changeColor = (e) => {
//     if (e.keyCode === 38 && red > 255) {
//         red += 3;
//         green += 3;
//         blue += 3
//         document.body.style.backgroundColor = `rgb(${red++}, ${green++}, ${blue++})`

//     } else if (e.keyCode === 40 && red >= 0) {
//         red -= 3;
//         green -= 3;
//         blue -= 3;
//         document.body.style.backgroundColor = `rgb(${red--}, ${green--}, ${blue--})`;
//     }


// }


// switch

const changeColor = (e) => {

    switch (e.which) {
        case 38:
            document.body.style.backgroundColor = `rgb(${red < 255 ? red++: red}, ${green < 255 ? green++ : green}, ${ blue <255 ? blue++: blue})`;

            break;

        case 40:
            document.body.style.backgroundColor = `rgb(${red >0 ? red--: red}, ${green >0 ?green--: green}, ${blue >0?blue--: blue})`;
            break;

    }
    console.log(green)
}

// console.log(red)

window.addEventListener("keydown", changeColor);