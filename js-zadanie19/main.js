const span = document.querySelector(".text");
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus hendrerit dui, eu commodo ligula ultricies quis. Suspendisse potenti. Quisque in malesuada magna. Nullam consequat diam tellus, nec pharetra nisl tincidunt accumsan. Mauris et risus a ante feugiat iaculis sed ac diam. Proin est orci, finibus at iaculis sit amet, tristique ac magna. Cras hendrerit dolor ligula, sit amet efficitur sapien maximus a. Cras eget volutpat libero, ut facilisis ex.'

let textIndex = 0;
let time = 50;

const addText = () => {
    span.textContent += text[textIndex];
    textIndex++;
    if (textIndex === text.length) {
        clearInterval(indexInterval);
    }
}

const cursorAnimation = () => {
    const spanCursor = document.querySelector(".cursor");
    spanCursor.classList.toggle("active");
}



const indexInterval = setInterval(addText, time);

setInterval(cursorAnimation, 400)