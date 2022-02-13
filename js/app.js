const gameBoard = document.querySelector("#container")
const resetButton = document.querySelector("#reset")
const gameSquare = document.querySelector(".game-square")
const message = document.querySelector("#message")

// A variable to keep track of moves, indicate whether or not to draw X or O 

// const player = {
//     currentChoice: null
// }

// const xChoice = "X"
// const oChoice = "O"

// const playerChoice = () => {
//     if (player.currentChoice === xChoice) {
//         // ??? add O ??? ///
//     } else (player.currentChoice === oChoice)
//        // ??? add X ????
// }

// A user should be able to click on different squares to make a move.

const addSymbol = (event) => {
    // add X or O symbol
    const symbol = document.createTextNode("X")
    console.log("the symbol is", symbol)
    // select game square
    gameSquare.classList.add("game-square")
    // add symbol to the selected square
    gameSquare.appendChild(symbol)
    // sends a message to user that symbol has been added 
    message.innerText = `added symbol to board`

}

// Every click will alternate between marking an X and O

// Upon marking of an individual cell, use JavaScript to add an X or O to the cell, according to whose turn it is.

// A cell should not be able to be replayed once marked.

// You should not be able to click remaining empty cells after the game is over.

// Add a reset button that will clear the contents of the board.

const clearBoard = () => {
    while (gameSquare.firstChild) {
    // if there is a child of the gameBoard it is removed
        gameSquare.removeChild(gameSquare.firstChild)
    }
message.innerText = "cleared board"
}

// Display a message to indicate which turn is about to be played.

// Detect draw conditions (ties/cat's game)

// Detect winner: Stop game and declare the winner if one player ends up getting three in a row.

// Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.

// DOM content

document.addEventListener("DOMContentLoaded", () => {
    // gameSquare.addEventListener("click", addSymbol)
    resetButton.addEventListener("click", clearBoard)
})