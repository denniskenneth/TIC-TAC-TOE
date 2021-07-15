
let tag = document.querySelectorAll('td')
 let board = ['x','x','x','o','o','o','x','x',' ']
tag.forEach((x, i) => x.innerText= board[i])
//GAME MODULE
const Gameboard = (() => {
    let board = [x,x,x,o]
    const gameBoard = () => {};
    const displayController = () => {};
    return {};
})()

// PLAYER FACTIRY FUNCTION
const player = (name, level) => {
    return {
        name,
        level
    };
}