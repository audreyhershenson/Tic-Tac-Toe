// display player names
//choose order of turns
//take turns placing marks in empty spaces
//detect when a move causes a win or draw
//start the game over without resetting browser

//on each turn, detect if player 2 is a cpu, if so perform their move, otherwise wait for player input


//////////////////
//initialization//
//////////////////


const gameArea = document.getElementById('board');

let player = "Player 1"
let playerSymbol = "O"

let board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

///////////////////
// interactivity //
///////////////////

gameArea.addEventListener('click', function(clickEvent) {

    if (clickEvent.target.matches('.cell')) {
        playerSwitch();
        if (clickEvent.target.textContent == "") {
            clickEvent.target.textContent = playerSymbol;
            arrayConvert(playerSymbol)
        }
    }  
    function arrayConvert(playerSymbol) {
        if (clickEvent.target.matches('#A1')) {
            board[0][0] = playerSymbol;
            console.log(board)
        }
        if (clickEvent.target.matches('#A2')) {
            board[0][1] = playerSymbol;
            console.log(board)
        }
        if (clickEvent.target.matches('#A3')) {
            board[0][2] = playerSymbol;
            console.log(board)
        }
        if (clickEvent.target.matches('#B1')) {
            board[1][0] = playerSymbol;
            console.log(board)
        }
        if (clickEvent.target.matches('#B2')) {
            board[1][1] = playerSymbol;
            console.log(board)
        }
        if (clickEvent.target.matches('#B3')) {
            board[1][2] = playerSymbol;
            console.log(board)
        }
        if (clickEvent.target.matches('#C1')) {
            board[2][0] = playerSymbol;
            console.log(board)
        }
        if (clickEvent.target.matches('#C2')) {
            board[2][1] = playerSymbol;
            console.log(board)
        }
        if (clickEvent.target.matches('#C3')) {
            board[2][2] = playerSymbol;
            console.log(board)
        }
    }
    checkWin(board);
})

////////////////////////
//function definitions//
////////////////////////

function playerSwitch() {
    if (player === "Player 1") {
        player =  "Player 2";
        playerSymbol = "O"
    }
    else {
        player = "Player 1";
        playerSymbol = "X"
    }
}

function checkWin(board) {
    //horizontal
    if (board[0][0] === board [0][1] && board[0][1] === board[0][2] && board[0][0] !== null) {
        console.log("YOU WIN!")
    }
    else if (board[1][0] === board [1][1] && board[1][1] === board[1][2] && board[1][0] !== null) {
        console.log("YOU WIN!")
    }
    else if (board[2][0] === board [2][1] && board[2][1] === board[2][2] && board[2][0] !== null) {
        console.log("YOU WIN!")
    }
    //vertical
    else if (board[0][0] === board [1][0] && board[0][0] === board[2][0] && board[0][0] !== null) {
        console.log("YOU WIN!")
    }
    else if (board[0][1] === board [1][1] && board[0][1] === board[2][1] && board[0][1] !== null) {
        console.log("YOU WIN!")
    }
    else if (board[0][2] === board [1][2] && board[0][2] === board[2][2] && board[0][2] !== null) {
        console.log("YOU WIN!")
    }
    //diagonal
    else if (board[0][0] === board [1][1] && board[0][0] === board[2][2] && board[0][0] !== null) {
        console.log("YOU WIN!")
    }
    else if (board[0][2] === board [1][1] && board[0][0] === board[2][0] && board[0][2] !== null) {
        console.log("YOU WIN!")
    }
}
