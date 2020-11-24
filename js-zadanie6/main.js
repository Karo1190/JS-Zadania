let size = 10;
let orderElement = 1;



const init = () => {
    const btn = document.createElement("button");
    const btnClear = document.createElement("button");
    btn.textContent = "Stwórz listę";
    btnClear.textContent = "Wyczyść listę";
    document.body.appendChild(btn);
    document.body.appendChild(btnClear);
    const ul = document.createElement("ul");
    ul.style.listStyle = "none";
    document.body.appendChild(ul);
    btn.addEventListener("click", createElement);
    btnClear.addEventListener("click", clearElement);


}


const createElement = () => {

    for (let i = 0; i < 10; i++) {
        const li = document.createElement("li");
        li.textContent = `Element nr ${orderElement++}`;
        li.style.fontSize = size++ + "px"
        // document.querySelector("ul").prepend(li)
        document.querySelector("ul").appendChild(li);

    }


}


const clearElement = () => {
    document.querySelector("ul").innerHTML = "";
    size = 10;
    orderElement = 1;
}

init()

// btn.addEventListener("click", createElement);


// const liElement = document.createElement("li");
// // const ul = document.querySelector("ul")
// liElement.textContent = `Element${size}`;
// document.querySelector("ul").appendChild("li");