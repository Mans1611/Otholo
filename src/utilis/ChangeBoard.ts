import { BoardType } from "../Context/GameContext";

export const ChangeBoard = (board:BoardType,row:number,col:number,turn:number)=>{
        // Directions: up, down, left, right, diagonals
        const directions = [
            [-1, 0], [1, 0], [0, -1], [0, 1], // up, down, left, right
            [-1, -1], [-1, 1], [1, -1], [1, 1] // diagonals
        ];
        // Iterate through all directions
        for (const [dx, dy] of directions) {
            let x = row + dx; // 
            let y = col + dy;
            let foundOpponent = false;
            // Keep going in the current direction until hitting the board boundary
            // or an empty cell
            let positions = []
           
            while ( x >= 0 && x < 8 && y >= 0 && y < 8 && board[x][y] !== null && board[x][y]!=turn) {   
               
                positions.push([x,y]);
                x += dx;
                y += dy;
            }
            if(x >= 0 && x < 8 && y >= 0 && y < 8 && board[x][y]===turn){
                for(let [x,y] of positions){
                    board[x][y] = turn;
                }
            }
        }   
    return board
}