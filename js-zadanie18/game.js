const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}


const game = {
    playerHand: "",
    aiHand: "",
    playerHandHTML: ""

}

const hands = document.querySelectorAll(".select img");


function handSelection() {
    game.playerHand = this.dataset.option
    hands.forEach(hand => hand.style.boxShadow = "");
    this.style.boxShadow = "0 0 0 4px black";
}

hands.forEach((hand) => {
    hand.addEventListener("click", handSelection)
});


function aiChoice() {
    const aiHand = hands[Math.floor(Math.random() * 3)].dataset.option
    return aiHand;
}

function checkResult(player, ai) {
    if (player === ai) {
        return "draw"
    } else if ((player == "papier" && ai == "nożyczki") || (player == "nożyczki" && ai == "papier") || (player == "kamień" && ai == "nożyczki")) {
        return "win"
    } else {
        return "loss"
    }
}

function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;
    document.querySelector('[data-summary="who-win"]').textContent = result;
    document.querySelector("p.numbers span").textContent = ++gameSummary.numbers;

    if (result === "win") {
        document.querySelector("p.wins span").textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').textContent = "Wygrałeś";
    } else if (result === "loss") {
        document.querySelector("p.losses span").textContent = ++gameSummary.losses;
        document.querySelector('[data-summary="who-win"]').textContent = "Przegrałeś";
    } else {
        document.querySelector("p.draws span").textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="who-win"]').textContent = "Mamy remis";
    }
}

function endGame() {
    document.querySelector(`data-option= "${game.playerHand}"`).style.boxShadow = "";
    game.playerHand = "";
    game.aiHand = "";
}


function startGame() {
    if (!game.playerHand) {
        return
        alert("Wybierz dłoń!");
    }

    game.aiHand = aiChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    publishResult(game.playerHand, game.aiHand, gameResult);
    // console.log(gameResult);
    endGame();
}


document.querySelector(".start ").addEventListener("click", startGame);