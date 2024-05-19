import { BoardType } from "../Context/GameContext";

export const ChangeBoard = (board:BoardType,row:number,col:number,turn:number,dict=new Set()):BoardType=>{
        
    if(row<0 || row > 7 || col < 0 || col > 7 || board[row][col] === null || dict.has(`${row}-${col}`)){ // the base condition of the recursion
        return board;
    }
    const directions = [
        // Directions: up, down, left, right, diagonals
        [-1, 0], [1, 0], [0, -1], [0, 1], // up, down, left, right
        [-1, -1], [-1, 1], [1, -1], [1, 1] // diagonals
    ];
    // Iterate through all directions
    for (const [dx, dy] of directions) {
        let x = row + dx; // 
        let y = col + dy;
        // Keep going in the current direction until hitting the board boundary
        // or an empty cell

        let positions = []
        
        while ( x >= 0 && x < 8 && 
            y >= 0 && y < 8 && 
            board[x][y] !== null && 
            board[x][y]!==turn) 
            {   
            dict.add(`${x}-${y}`);
            ChangeBoard(board,x,y,turn,dict);
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