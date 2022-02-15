const gameBoard = document.querySelector("#container")
const resetButton = document.querySelector("#reset")
const gameSquare = document.querySelector(".game-square")
const message = document.querySelector("#message")

// A variable to keep track of moves, indicate whether or not to draw X or O 

const player = {
    currentChoice: null
}
const computer = {
    currentChoice: null
}
const xChoice = document.createTextNode("X")

const oChoice = document.createTextNode("O")

const playerChoice = () => {
    if (player.currentChoice === xChoice) {
        computer.currentChoice === oChoice
    } else (player.currentChoice === oChoice)
    return playerChoice
}

// A user should be able to click on different squares to make a move.

const addMove = (event) => {
    // add player choice 
    const playerMove = document.createTextNode("X")
    // access player choice 
    // check to see if x or o is current choice
    // console log to make sure it worked
    console.log("the symbol is", playerMove)
    // select game square
    // add symbol to the selected square
    gameSquare.appendChild(playerMove)
    // sends a message to user that symbol has been added 
    message.innerText = `added symbol to board`

}

// const makeBoard = () => {
// 	// if there are already divs in gameSquare, clear them out
// 	while (gameSquare.firstChild) {
// 		// if there is a child of gameSquare, remove it
// 		gameSquare.removeChild(gameSquare.firstChild)
// 	}
// 	// square creation loop
// 	for (let i = 1; i < 10; i++) {
// 		// console log made sure the loop runs correctly, at the right time
// 		console.log('make a div')
// 		// generate a div every loop
// 		const div = document.createElement('div')
//         div.classList.add("div")
// 		// append those divs 
// 		gameSquare.appendChild(div)
//         div.addEventListener("click", addMove)
//     }
//     message.innerText = 'squares successfully generated'
// }

// Every click will alternate between marking an X and O

// Upon marking of an individual cell, use JavaScript to add an X or O to the cell, according to whose turn it is.

// You should not be able to click remaining empty cells after the game is over.

// Add a reset button that will clear the contents of the board.

const clearBoard = () => {
    location.reload()
    while (gameSquare.firstChild) {
    // if there is a child of the gameSquare it is removed
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
    // A cell should not be able to be replayed once marked
    gameSquare.addEventListener("click", addMove, {once: true})
    resetButton.addEventListener("click", clearBoard)
    makeBoard()
})