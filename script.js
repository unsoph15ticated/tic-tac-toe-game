let player = "X";
let gridDivs = ["", "", "", "", "", "", "", "", ""];
let isgameActive = true;

const winParameters = [
    [0, 1, 2],    //rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],    //columns
    [1, 4, 7],
    [2, 5, 8],  
    [0, 4, 8],    //diagonals
    [2, 4, 6]
]

function onClick(index) {
    if (isgameActive && gridDivs[index] === "") {
        gridDivs[index] = player;
        document.getElementById(index).innerText = player;
        checkWinner();
        switchPlayer();
    }
}
function checkWinner() {
    for (let i = 0; i < winParameters.length; i++) {
        const [a, b, c] = winParameters[i];
        if (gridDivs[a] !="" && gridDivs[a] === gridDivs[b] && 
            gridDivs[b] === gridDivs[c]) {
            isgameActive = false;
            document.getElementById("status").classList.remove("hidden")
            document.getElementById("status").innerText = `Congratulations! ${player} has won the match!`;
            return;
        }
    }
    if (!gridDivs.includes("")) {
        isgameActive = false;
        document.getElementById("status").classList.remove("hidden")
        document.getElementById('status').innerText = "It's a draw!";
    }
}
function switchPlayer() {
    if (player === "X") {
        player = "O";
    } else {
        player = "X";
    }
}

function restartGame() {
    player = "X";
    gridDivs = ["", "", "", "", "", "", "", "", ""];
    isgameActive = true;
    document.getElementById("status").classList.add("hidden")
    document.getElementById("status").innerText = "";
    for (let i = 0; i < gridDivs.length; i++) {
        document.getElementById(i).innerText = "";
    }
}