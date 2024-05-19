import { BoardType } from "../Context/GameContext";

export const evaluateCorners=(board:BoardType)=> {
    // this heuarstic is being used in HvC only
    const cornerValue = 100; // here i give a high value for the corners.
    // Define corners
    const corners = [
        [0, 0], // top left
        [0, 7], // top right
        [7, 0], // bottom left
        [7, 7] //  bottom right
    ];
    
    let playerScore = 0;
    let computerScore = 0;
    
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (board[row][col] === 1) {
                playerScore++;
            } else if (board[row][col] === 0) {
                computerScore++;
            }
        }
    }
    // Add corner control values
    for (const [row, col] of corners) {
        if (board[row][col] === 1) {
            playerScore += cornerValue;
        } else if (board[row][col] === 0) {
            computerScore += cornerValue;
        }
    }
    return playerScore - computerScore;
}
