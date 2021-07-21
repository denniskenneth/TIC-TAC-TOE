
const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
const WINNING_COMBINATIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const cellElements =document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const winningMsgElement = document.getElementById('winning-msg');
const restartBtn = document.getElementById('restartBtn');
const winningMsgTxtElement = document.querySelector('[data-winning-msg-txt]');
let circleTurn;

startGame()
restartBtn.addEventListener('click', startGame)

function startGame() {
    circleTurn = false
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS);
        cell.classList.remove(CIRCLE_CLASS);
        cell.removeEventListener('circle', handleClick);
        cell.addEventListener('click', handleClick, { once: true })
    })
    setBoardHoverClass()
    winningMsgElement.classList.remove('show');
}

function handleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS

    //placeMark
    placeMark(cell, currentClass)

    //Check for win
    if (checkWin(currentClass)) {
        endGame(false);
    }
    // check for draw
    else if (isDraw()) {
        endGame(true);
    }
    // switch turns
    else {
        swapTurns();
        setBoardHoverClass();
    }
    
}

function endGame(draw) {
    if (draw) {
         winningMsgTxtElement.innerText = 'Draw!'
    } else {
        winningMsgTxtElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
    }
    winningMsgElement.classList.add('show')
}

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) ||
        cell.classList.contains(CIRCLE_CLASS)
    })
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

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
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