document.body.addEventListener("click", function (e) {
    console.log(e.clientX, e.clientY);


    // Moje rozwiązanie 
    // const evenX = e.clientX % 2 === 0;
    // const evenY = e.clientY % 2 === 0;
    // if (evenX && evenY) {
    //     document.body.style.backgroundColor = "red";
    // } else if (evenX && !evenY) {
    //     document.body.style.backgroundColor = "green";
    // } else if (!evenX && evenY) {
    //     document.body.style.backgroundColor = "blue";
    // } else {
    //     document.body.style.backgroundColor = "yellow";
    // }
    // Rozwiązanie 
    const color = getColor(e);
    document.body.style.backgroundColor = color;

})

const getColor = (e) => {
    if (e.clientX % 2 === 0)
        if (e.clientY % 2 === 0) {
            return "red"
        } if (e.clientX % 2 === 0) {
        return "green"
    } else return "blue"
}