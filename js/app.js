const gameBoard = document.querySelector("#container")
const resetButton = document.querySelector("#reset")
const gameSquare = document.querySelector(".game-square")
const square1 = document.querySelector("#square-1")
const square2 = document.querySelector("#square-2")
const square3 = document.querySelector("#square-3")
const square4 = document.querySelector("#square-4")
const square5 = document.querySelector("#square-5")
const square6 = document.querySelector("#square-6")
const square7 = document.querySelector("#square-7")
const square8 = document.querySelector("#square-8")
const square9 = document.querySelector("#square-9")
const message = document.querySelector("#message")

// A variable to keep track of moves, indicate whether or not to draw X or O 

const playerMoveX = "X"
const playerMoveO = "O"
let player = playerMoveX

// A user should be able to click on different squares to make a moves
// Every click will alternate between marking an X and O
// Upon marking of an individual cell, use JavaScript to add an X or O to the cell, according to whose turn it is.
    // wasn't able to do this, only able to add X or O to square

const addMove = (event) => {
    event.target.append(player)
    if (player === playerMoveX) {
        player === playerMoveO 
    } else {
        player === playerMoveX
    }
    // Display a message to indicate which turn is about to be played.
    message.innerText = `it is ${player}'s turn!`
}

// Add a reset button that will clear the contents of the board.

const clearBoard = () => {
    location.reload()
    while (gameSquare.firstChild) {
    // if there is a child of the gameSquare it is removed
        gameSquare.removeChild(gameSquare.firstChild)
    }
}

// Detect draw conditions (ties/cat's game)

// Detect winner: Stop game and declare the winner if one player ends up getting three in a row.

// Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.

// DOM content

document.addEventListener("DOMContentLoaded", () => {
    // A cell should not be able to be replayed once marked
    // You should not be able to click remaining empty cells after the game is over
    square1.addEventListener("click", addMove, {once: true})
    square2.addEventListener("click", addMove, {once: true})
    square3.addEventListener("click", addMove, {once: true})
    square4.addEventListener("click", addMove, {once: true})
    square5.addEventListener("click", addMove, {once: true})
    square6.addEventListener("click", addMove, {once: true})
    square7.addEventListener("click", addMove, {once: true})
    square8.addEventListener("click", addMove, {once: true})
    square9.addEventListener("click", addMove, {once: true})
    resetButton.addEventListener("click", clearBoard)
})

