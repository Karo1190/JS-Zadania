let possibilities = ["Walcz", "Przemyśl to jeszcze raz"];
const input = document.querySelector("input");
const btnAdd = document.querySelector(".add");
const btnClean = document.querySelector(".clean");
const btnShowAdvice = document.querySelector(".showAdvice");
const btnshowOptions = document.querySelector(".showOptions");


const addPossibility = (e) => {
    e.preventDefault();
    newPossibility = input.value
    possibilities.push(newPossibility);
    console.log(possibilities);
    if (input.value) {
        alert(`dodałeś opcję ${newPossibility}`);
    } else {
        alert("dodaj prawidłową opcję");
    }
    input.value = "";
    // if(input.value = "")

};

const removePossibility = (e) => {
    e.preventDefault();
    possibilities = [];
    console.log(possibilities);
};


const showAdvice = () => {
    const indexAdvice = Math.floor(Math.random() * possibilities.length);
    const h1 = document.querySelector("h1")
    h1.textContent = possibilities[indexAdvice]
    // const div = document.createElement("div");
    // div.textContent = possibilities[indexAdvice];
    // document.body.appendChild(div);
    // if (div.textContent) {
    //     div.textContent = "";
    // }
}



const showOptions = () => {
    alert(possibilities.join(", "));
}



btnAdd.addEventListener("click", addPossibility);

btnClean.addEventListener("click", removePossibility);

btnShowAdvice.addEventListener("click", showAdvice);

btnshowOptions.addEventListener("click", showOptions);