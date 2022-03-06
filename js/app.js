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
const winMessage = document.querySelector("#win-message")

// A variable to keep track of moves, indicate whether or not to draw X or O 

let playerX = "X"
let playerO = "O"

const Move1 = () => {
    square1.append(playerX)
    // Display a message to indicate which turn is about to be played.
    message.innerText = `it is ${playerX}'s turn!`
}

const Move2 = () => {
    square2.append(playerO)
    // Display a message to indicate which turn is about to be played.
    message.innerText = `it is ${playerO}'s turn!`
}

const Move3 = () => {
    square3.append(playerX)
    // Display a message to indicate which turn is about to be played.
    message.innerText = `it is ${playerX}'s turn!`
}

const Move4 = () => {
    square4.append(playerO)
    // Display a message to indicate which turn is about to be played.
    message.innerText = `it is ${playerO}'s turn!`
}

const Move5 = () => {
    square5.append(playerX)
    // Display a message to indicate which turn is about to be played.
    message.innerText = `it is ${playerX}'s turn!`
}

const Move6 = () => {
    square6.append(playerO)
    // Display a message to indicate which turn is about to be played.
    message.innerText = `it is ${playerO}'s turn!`
}

const Move7 = () => {
    square7.append(playerX)
    // Display a message to indicate which turn is about to be played.
    message.innerText = `it is ${playerX}'s turn!`
}

const Move8 = () => {
    square8.append(playerO)
    // Display a message to indicate which turn is about to be played.
    message.innerText = `it is ${playerO}'s turn!`
}

const Move9 = () => {
    square9.append(playerX)
    // Display a message to indicate which turn is about to be played.
    message.innerText = `it is ${playerX}'s turn!`
}

const clearBoard = () => {
    location.reload()
    while (gameSquare.firstChild) {
    // if there is a child of the gameSquare it is removed
        gameSquare.removeChild(gameSquare.firstChild)
    }
}

// Detect Win Conditions

const winCondition = () => {
    if (square1.innerText === "X" && square2.innerText === "X" && square3.innerText === "X") {
        winMessage.innerText = "You Won!"
        clearBoard()
    } else if (square4.innerText === "X" && square5.innerText === "X" && square6.innerText === "X") {
        winMessage.innerText = "You Won!"
        clearBoard()
    } else if (square7.innerText === "X" && square8.innerText === "X" && square9.innerText === "X") {
        winMessage.innerText = "You Won!"
        clearBoard()
    } else if (square3.innerText === "X" && square5.innerText === "X" && square7.innerText === "X") {
        winMessage.innerText = "You Won!"
        clearBoard()
    } else if (square1.innerText === "X" && square5.innerText === "X" && square9.innerText === "X") {
        winMessage.innerText = "You Won!"
        clearBoard()
    } else if (square1.innerText === "O" && square2.innerText === "O" && square3.innerText === "O") {
        winMessage.innerText = "You Won!"
        clearBoard()
    } else if (square4.innerText === "O" && square5.innerText === "O" && square6.innerText === "O") {
        winMessage.innerText = "You Won!"
        clearBoard()
    } else if (square7.innerText === "O" && square8.innerText === "O" && square9.innerText === "O") {
        winMessage.innerText = "You Won!"
        clearBoard()
    } else if (square3.innerText === "O" && square5.innerText === "O" && square7.innerText === "O") {
        winMessage.innerText = "You Won!"
        clearBoard()
    } else if (square1.innerText === "O" && square5.innerText === "O" && square9.innerText === "O") {
        winMessage.innerText = "You Won!"
        clearBoard()
    } else if 
        (square1.firstChild && square2.firstChild && square3.firstChild
        && square4.firstChild && square5.firstChild && square6.firstChild
        && square7.firstChild && square8.firstChild && square9.firstChild) {
        winMessage.innerText ="Tie Game!"
    }
}

// Detect draw conditions (ties/cat's game)



// DOM content

document.addEventListener("DOMContentLoaded", () => {
    // A cell should not be able to be replayed once marked
    // You should not be able to click remaining empty cells after the game is over
    square1.addEventListener("click", Move1, {once: true})
    square2.addEventListener("click", Move2, {once: true})
    square3.addEventListener("click", Move3, {once: true})
    square4.addEventListener("click", Move4, {once: true})
    square5.addEventListener("click", Move5, {once: true})
    square6.addEventListener("click", Move6, {once: true})
    square7.addEventListener("click", Move7, {once: true})
    square8.addEventListener("click", Move8, {once: true})
    square9.addEventListener("click", Move9, {once: true})
    square1.addEventListener("click", winCondition)
    square2.addEventListener("click", winCondition)
    square3.addEventListener("click", winCondition)
    square4.addEventListener("click", winCondition)
    square5.addEventListener("click", winCondition)
    square6.addEventListener("click", winCondition)
    square7.addEventListener("click", winCondition)
    square9.addEventListener("click", winCondition)
    resetButton.addEventListener("click", clearBoard)
})
