
const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
const cellElements =document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
let circleTurn;

startGame()

function startGame() {
    circleTurn = false
    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick, { once: true })
    })
    setBoardHoverClass()
}

function handleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    //placeMark
    placeMark(cell, currentClass)
    //Check for win
    // check for draw
    // switch turns
    swapTurns()
    setBoardHoverClass()
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

function swapTurns () {
    circleTurn = !circleTurn
}
function setBoardHoverClass() {
    board.classList.remove(X_CLASS);
    board.classList.remove(CIRCLE_CLASS)
    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS)
    } else {
        board.classList.add(X_CLASS)
    }
}

// let tag = document.querySelectorAll('td')
//  let board = ['x','x','x','o','o','o','x','x',' ']
// tag.forEach((x, i) => x.innerText= board[i])
// //GAME MODULE
// const Gameboard = (() => {
//     let board = [x,x,x,o]
//     const gameBoard = () => {};
//     const displayController = () => {};
//     return {};
// })()

// // PLAYER FACTIRY FUNCTION
// const player = (name, level) => {
//     return {
//         name,
//         level
//     };
// }