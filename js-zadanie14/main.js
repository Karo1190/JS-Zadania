const button = document.querySelector("button");
const div = document.querySelector("div");
const names = ["Ania", "Monika", "Kira", "Jarosław", "Daria", "Bartosz", "Rafał"];
const prefixs = ["Wydaje mi się", "Mam wrażenie", "Szczerze powiedziawszy, myślę", "Szczerze uważam", "Na 100% twierdzę"];


const nameGenerator = () => {
    const indexName = Math.floor(Math.random() * names.length);
    // const indexPrefix = Math.floor(Math.random() * prefixs.length);
    // div.textContent = `${prefixs[indexPrefix]}, że najlepsze imię to ${names[indexName]}`;
    div.textContent = `${prefixs[Math.floor(Math.random() * prefixs.length)]}, że najlepsze imię to ${names[indexName]}`; //w jednej linii
}


button.addEventListener("click", nameGenerator);