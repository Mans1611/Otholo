import { BoardType } from "../Context/GameContext";

export const getRowCol = (board:BoardType,newBoard:BoardType)=>{
    let row:number=0,col:number=0;
    for(let row=0;row<8;row++){
        for (let col=0;col<8;col++){
            if (board[row][col] !== newBoard[row][col]){
                return [row,col];
            }
        }
    }
    return [row,col]
} 