// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne
const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3']

let letterIndex = -15;
let textIndex = 0;


// Implementacja
const addLetter = () => {
    // Użyj w środku setTimeout
    if (letterIndex >= 0) {
        spnText.textContent += txt[textIndex][letterIndex];
    }
    letterIndex++;
    if (letterIndex === txt[textIndex].length) {

        textIndex++;
        if (textIndex === txt.length) return;

        return setTimeout(() => {
            letterIndex = -15;
            spnText.textContent = '';
            addLetter();
        }, 2000)


    }
    setTimeout(addLetter, 100)

}


addLetter(); //pierwsze wywołanie


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);