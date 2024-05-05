export const checkPossiblePlaces = (board:(null|number)[][], row:number, col:number, player:number)=>{
        // Check if the specified position is empty
        if (board[row][col] !== null) {
            return false;
        }
        // Directions: up, down, left, right, diagonals
        const directions = [
            [-1, 0], [1, 0], [0, -1], [0, 1], // up, down, left, right
            [-1, -1], [-1, 1], [1, -1], [1, 1] // diagonals
        ];
        let valid = false;
        // Iterate through all directions
        for (const [dx, dy] of directions) {
            let x = row + dx;
            let y = col + dy;
            let foundOpponent = false;
            // Keep going in the current direction until hitting the board boundary
            // or an empty cell
            while (x >= 0 && x < 8 && y >= 0 && y < 8 && board[x][y] !== null) {
                if (board[x][y] !== player) {
                    foundOpponent = true; // I will trigger it for the next if statement.
                } else if (foundOpponent) {
                    valid = true;
                    break;
                } else {
                    break;
                }
                x += dx;
                y += dy;
            }   
            if (valid) {
                break;
            }
        }   
        return valid;
}
