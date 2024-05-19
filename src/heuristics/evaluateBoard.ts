import { BoardType } from "../Context/GameContext";

export const evaluateBoard=(board:BoardType)=> {
    // the heuarstic that is being used.
    // Example: evaluate based on the difference in number of pieces
      const playerPieces = board.flat().filter(piece => piece === 1).length;
      const computerPieces = board.flat().filter(piece => piece === 0).length;
      return playerPieces - computerPieces;
}
