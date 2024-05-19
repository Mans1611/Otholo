import { BoardType } from "../Context/GameContext";
import { evaluateBoard } from "../heuristics/evaluateBoard";
import { checkPossiblePlaces } from "../hooks/CheckPossibleCells";
import { ChangeBoard } from "./ChangeBoard";




export const cloneBoard = (board:BoardType)=> {
    // since assingment take value by reference. so i want to make a shallow copy.
    return board.map(row => [...row]);
}
const applyMove=(board:BoardType, row:number, col:number, player:number)=> {
    // this function make change the cell that is clicked, and change all adjacent cells.
    board[row][col] = player;
    return ChangeBoard( board, row,col,player);// here change the other cells, before calculate the algorthim.
}

// this function check if there a possible place cell.
export const isTerminalNode = (board:BoardType):boolean=> board.flat().every((val)=> val === 1 || val === 0); // this function check if we are in the terminal node.

const isValidMove = (board:BoardType, row:number, col:number, player:number):boolean=>  {
    // Check if the specified position is empty
    if (board[row][col] !== null) 
        return false;
    return true;
} 
  
export  const alpha_beta = (board:BoardType, depth:number, maximizingPlayer:boolean, alpha:number=-Infinity, beta:number=Infinity)=>{
    // this  is alpha beta burining algorthim
    if (depth === 0 || isTerminalNode(board)) {
        return {score:evaluateBoard(board),board:null};
    }

    if (maximizingPlayer) {
        let maxEval = -Infinity;
        let bestMove;
        for (let row = 0; row<8;row++) {
           for(let col = 0; col<8;col++){ 
                if (checkPossiblePlaces(board, row, col, 1)) {
                let clonedBoard = cloneBoard(board); // cloning the board, make a new deep copy of the board.
                applyMove(clonedBoard, row, col, 1);
                let boardVal = alpha_beta(clonedBoard, depth - 1, false, alpha, beta).score; // naking a recursion call
               
                if(boardVal>maxEval){
                  maxEval = boardVal;
                  bestMove = clonedBoard;
                }
                alpha = Math.max(alpha, boardVal);
                if (beta <= alpha) {
                    break; // Beta cut-off
                }
            }}
        }
        return {score:maxEval,board:bestMove};
    } else {
        let minEval = Infinity;
        let bestMove;
        for (let row = 0; row<8;row++) {
          for(let col = 0; col<8;col++){ 
            if (checkPossiblePlaces(board, row, col, 0)) {
                const clonedBoard = cloneBoard(board) // here i clone the board, since i don't want to take reference.
                applyMove(clonedBoard, row, col, 0);
                let boardVal = alpha_beta(clonedBoard, depth - 1, true, alpha, beta).score ;
                if(boardVal < minEval){
                  minEval = boardVal;
                  bestMove = clonedBoard;
                }
                minEval = Math.min(minEval, boardVal);
                beta = Math.min(beta, boardVal);
                if (beta <= alpha) {
                    break; // Alpha cut-off
                }
            }
          }
        }
        return {score:minEval,board:bestMove};
    }
}


export const minimax = (board:BoardType, depth:number, maximizingPlayer:boolean) => {
    if (depth === 0 || isTerminalNode(board)) 
        return { score: evaluateBoard(board), board: null }; // you can change heurastic by chabging the evaluateBoard function to evaluateCorners, which is the second heuristic
    

    if (maximizingPlayer) {
        let maxEval = -Infinity;
        let bestMove = null;
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[row].length; col++) {
                if (isValidMove(board, row, col, 1)) {
                    const newBoard = cloneBoard(board);
                    applyMove(newBoard, row, col, 1);
                    let boardVal = minimax(newBoard, depth - 1, false).score;
                    if (boardVal > maxEval) {
                        maxEval = boardVal;
                        bestMove = newBoard;
                    }
                }
            }
        }
        return { score: maxEval, board: bestMove };
    } else {
        let minEval = Infinity;
        let bestMove = null;
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[row].length; col++) {
                if (isValidMove(board, row, col, 0)) {
                    const newBoard = cloneBoard(board);
                    applyMove(newBoard, row, col, 0);
                    let boardVal = minimax(newBoard, depth - 1, true).score;
                    if (boardVal < minEval) {
                        minEval = boardVal;
                        bestMove = newBoard;
                    }
                }
            }
        }
        return { score: minEval, board: bestMove };
    }
}