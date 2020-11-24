document.body.addEventListener("mousemove", function (e) {
    const x = clientX;
    const y = clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;

    const h1 = document.querySelector("h1")
    h1.innerHTML = `${e.clientX}, ${e.clientY}`;
    const red = x / width * 100;
    const green = y / height * 100;
    const blue = ((x / width * 100) + (y / height * 100)) / 2;

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`




})