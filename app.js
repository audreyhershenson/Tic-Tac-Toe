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

let player = document.getElementById("p2name").value;
let playerSymbol = "X";
let gameRunning = false;
let opponent = null;

let board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
arrayChoose = ["A1","A2","A3","B1","B2","B3","C1","C2","C3"];

if  (document.getElementById("p2name").value === "Computer") {
    opponent = "Computer";
}
else {
    opponent = null;
}

///////////////////
// interactivity //
///////////////////

gameArea.add

gameArea.addEventListener('click', function(clickEvent) {
    console.log(clickEvent)
    if (gameRunning === true) {
        if (player === document.getElementById("p1name").value) {
            playerSymbol = "O";
        }
        else {
            playerSymbol = "X";
        }
        if (clickEvent.target.innerHTML === '') { 
            if (clickEvent.target.textContent == "") {
                clickEvent.target.textContent = playerSymbol;
                arrayConvert(playerSymbol)
                document.getElementById('message').innerHTML = (player + "'s turn!");
            }
        }  
        function arrayConvert(symbol) {
            if (clickEvent.target.matches('#A1')) {
                board[0][0] = symbol;
            }
            if (clickEvent.target.matches('#A2')) {
                board[0][1] = symbol;
            }
            if (clickEvent.target.matches('#A3')) {
                board[0][2] = symbol;
            }
            if (clickEvent.target.matches('#B1')) {
                board[1][0] = symbol;
            }
            if (clickEvent.target.matches('#B2')) {
                board[1][1] = symbol;
            }
            if (clickEvent.target.matches('#B3')) {
                board[1][2] = symbol;
            }
            if (clickEvent.target.matches('#C1')) {
                board[2][0] = symbol;
            }
            if (clickEvent.target.matches('#C2')) {
                board[2][1] = symbol;
            }
            if (clickEvent.target.matches('#C3')) {
                board[2][2] = symbol;
            }
        }
        checkWin(board);
    }

})



////////////////////////
//function definitions//
////////////////////////

function playerSwitch(currentP) {
    
    if (currentP === document.getElementById("p1name").value) {
        
        if (opponent === "Computer") {
            player = document.getElementById("p2name").value;
            playerSymbol = "X";
            computerChoose();  
        }
        else {
            player = document.getElementById("p2name").value;
            playerSymbol = "X";
        }
    }
    else if (currentP === document.getElementById("p2name").value){
        player = document.getElementById("p1name").value;
        playerSymbol = "O";
    }
    console.log(player);
}

function checkWin(board) {

    //horizontal
    if (board[0][0] === board [0][1] && board[0][1] === board[0][2] && board[0][0] !== null) {
        document.getElementById('message').innerHTML = (player + " WINS!");
        document.getElementById("restart").style.display = "flex";
        document.getElementById("restartButton").style.display = "block";
        gameRunning = false;
    }
    else if (board[1][0] === board [1][1] && board[1][1] === board[1][2] && board[1][0] !== null) {
        document.getElementById('message').innerHTML = (player + " WINS!");
        document.getElementById("restart").style.display = "flex";
        document.getElementById("restartButton").style.display = "block";
        gameRunning = false;
    }
    else if (board[2][0] === board [2][1] && board[2][1] === board[2][2] && board[2][0] !== null) {
        document.getElementById('message').innerHTML = (player + " WINS!");
        document.getElementById("restart").style.display = "flex";
        document.getElementById("restartButton").style.display = "block";
        gameRunning = false;
    }
    //vertical
    else if (board[0][0] === board [1][0] && board[0][0] === board[2][0] && board[0][0] !== null) {
        document.getElementById('message').innerHTML = (player + " WINS!");
        document.getElementById("restart").style.display = "flex";
        document.getElementById("restartButton").style.display = "block";
        gameRunning = false;
    }
    else if (board[0][1] === board [1][1] && board[0][1] === board[2][1] && board[0][1] !== null) {
        document.getElementById('message').innerHTML = (player + " WINS!");
        document.getElementById("restart").style.display = "flex";
        document.getElementById("restartButton").style.display = "block";
        gameRunning = false;
    }
    else if (board[0][2] === board [1][2] && board[0][2] === board[2][2] && board[0][2] !== null) {
        document.getElementById('message').innerHTML = (player + " WINS!");
        document.getElementById("restart").style.display = "flex";
        document.getElementById("restartButton").style.display = "block";
        gameRunning = false;
    }
    //diagonal
    else if (board[0][0] === board [1][1] && board[0][0] === board[2][2] && board[0][0] !== null) {
        document.getElementById('message').innerHTML = (player + " WINS!");
        document.getElementById("restart").style.display = "flex";
        document.getElementById("restartButton").style.display = "block";
        gameRunning = false;
    }
    else if (board[0][2] === board [1][1] && board[0][2] === board[2][0] && board[0][2] !== null) {
        document.getElementById('message').innerHTML = (player + " WINS!");
        document.getElementById("restart").style.display = "flex";
        document.getElementById("restartButton").style.display = "block";
        gameRunning = false;
    }
        //check draw
    else if  (board[0][0] !== null && board[0][1] !== null && board[0][2] !== null && board[1][0] !== null && board[1][1] !== null && board[1][2] !== null && board[2][0] !== null && board[2][1] !== null && board[2][2] !== null) {
    document.getElementById('message').innerHTML = ("DRAW");
    document.getElementById("restart").style.display = "flex";
    document.getElementById("restartButton").style.display = "block";
    gameRunning = false;
    }
    playerSwitch(player);
}

function computerChoose() {

    
    //remonve here
    for (i = 0; i < arrayChoose.length; i++) {
        if (document.getElementById(arrayChoose[i]).innerHTML !== "") {
            console.log(arrayChoose);
            console.log(arrayChoose[i]);
            console.log(arrayChoose[i].innerHTML);
            arrayChoose.splice(i,1);
        }
    }
    let computerMove = Math.floor(Math.random() * (arrayChoose.length));
    let space = document.getElementById(arrayChoose[computerMove]); 
    space.textContent = "X";
    if (space.id === ('A1')) {
        board[0][0] = "X";
    }
    if (space.id === ('A2')) {
        board[0][1] = "X";
    }
    if (space.id === ('A3')) {
        board[0][2] = "X";
    }
    if (space.id === ('B1')) {
        board[1][0] = "X";
    }
    if (space.id === ('B2')) {
        board[1][1] = "X";
    }
    if (space.id === ('B3')) {
        board[1][2] = "X";
    }
    if (space.id === ('C1')) {
        board[2][0] = "X";
    }
    if (space.id === ('C2')) {
        board[2][1] = "X";
    }
    if (space.id === ('C3')) {
        board[2][2] = "X";
    }
    checkWin(board);
    
    
}
    

function startGame() {  
    gameRunning = true;
    player = document.getElementById("p1name").value;
    playerSymbol = "O";

    let divStarting = document.getElementById("startingScreen");
    let divGameplay = document.getElementById("gameplayScreen");
    divStarting.style.display = "none";
    divGameplay.style.display = "flex";

    document.getElementById('player1').innerHTML =  document.getElementById("p1name").value;
    document.getElementById('player2').innerHTML =  document.getElementById("p2name").value;
}

function restartGame() {
    player = document.getElementById("p1name").value;
    playerSymbol = "O";
    gameRunning = false;

    board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
    ]

    arrayChoose = ["A1","A2","A3","B1","B2","B3","C1","C2","C3"];
    document.getElementById('message').innerHTML = ("GO!");

    document.getElementById("A1").textContent = "";
    document.getElementById("A2").textContent = "";
    document.getElementById("A3").textContent = "";
    document.getElementById("B1").textContent = "";
    document.getElementById("B2").textContent = "";
    document.getElementById("B3").textContent = "";
    document.getElementById("C1").textContent = "";
    document.getElementById("C2").textContent = "";
    document.getElementById("C3").textContent = "";

    let divStarting = document.getElementById("startingScreen");
    let divGameplay = document.getElementById("gameplayScreen");
    let divButton = document.getElementById("restartButton");
    divStarting.style.display = "flex";
    divStarting.style.flexDirection = "column";
    divStarting.style.alignItems = "center";

    divGameplay.style.display = "none";
    divButton.style.display = "none";
}