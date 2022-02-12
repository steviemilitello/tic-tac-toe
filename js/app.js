const markSymbol = document.querySelector("#xoButton")
const markO = document.querySelector("oButton")
const resetGame = document.querySelector("resetButton")
const gameSquare = document.querySelector("square")

// click handler that will add X or O 

const addSymbol = (event) => {
    // add or select X or O
    const symbol = event.target.innertext = "X"
    console.log("the symbol is: ", symbol)
    const symbolSquare = document.createElement('div')
    symbolSquare.classList.add("symbolSquare")
    symbolSquare.innertext = symbol 
    square.appendChild(symbolSquare)
    message.innerText = `added symbol ${symbol}`
}

// A user should be able to click on different squares to make a move.

const makeMove = () => {
    // square creation loop 
    for (let i = 0; i < 10; i++) {
        console.log("a square was made")
    // create new square
    const newSquare = document.createElement("div")
    // make div a square 
    newSquare.classList.add("newSquare")
    // append divs to square
    gameSquare.appendChild(newSquare)
    // assign x or o to square
    const x = "X" 
    const O = "O"
    newSquare.addEventListener("click, addSymbol")
}

// Every click will alternate between marking an X and O

// Upon marking of an individual cell, use JavaScript to add an X or O to the cell, according to whose turn it is.

// A cell should not be able to be replayed once marked.

// You should not be able to click remaining empty cells after the game is over.

// Add a reset button that will clear the contents of the board.

const clearBoard = (resetButton) => {
    while (gameSquare.firstChild) {
        gameSquare.removeChild(gameSquare.firstChild)
    }
}

// Display a message to indicate which turn is about to be played.

// Detect draw conditions (ties/cat's game)

// Detect winner: Stop game and declare the winner if one player ends up getting three in a row.

// Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.

document.addEventListener("DOMContentLoaded", () => {
    xoButton.addEventListener("click", makeMove)
    resetButton.addEventlistener("click", clearBoard)
    makeMove()
})