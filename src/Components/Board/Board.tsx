import React, { useContext,useState } from 'react'
import { BoardType, GameContext } from '../../Context/GameContext';
import { checkPossiblePlaces } from '../../hooks/CheckPossibleCells';
import { ChangeBoard } from '../../utilis/ChangeBoard';
import { AppContext } from '../../Context/AppContext';
import { cloneBoard, alpha_beta, minimax } from '../../utilis/minimax';

import './baord.scss';

const Board:React.FC = () => {

  const {turn,setTurn,board,setBoard,setHistory} = useContext(GameContext);
  const {gameOption,gameLevel} = useContext(AppContext);
  
  const [disabled,setDisabled] = useState(false); // this variable for disabling the user from clicking on the cell while the algorithim is being called.

  const handleBoardChange = (row:number,col:number)=>{
    let cloned = JSON.parse(JSON.stringify(board)); // making a deep copy of the board/.
    setHistory((arr:BoardType[])=>[...arr,cloned]); // add the latest board to the history.
    let newBoard:BoardType;
    setBoard((board:BoardType)=>{
      board[row][col]=turn;
      newBoard = ChangeBoard(board,row,col,turn);
      return newBoard});

    if(gameOption === 'HvC'){
      setDisabled(true);
      setTimeout(()=>{
        // i here make it asynchronoys, so that the latest board change get updated, and also feel the user that there an opponent plays against him.
        const {board:Board} = minimax(board,gameLevel === 'hard'? 2:1,false);// using depth 2 for hard, and depth of 0 for easy.
        setBoard(Board);
        setDisabled(false);
      },100)
    }
    
    else{
      setTurn((prevTurn:number)=>(prevTurn + 1) % 2);   // this means that i am in HvH (Human vs Human), and i will trigger the turn.
    }
    }
  return (
    <div className="board_wrapper">
          {board.map((rows :(null|number)[] ,row:number)=><div className='row' key={row}>
            {rows.map((cell:(null|number),col:number)=>{
              let isValid:boolean = false;
              if(gameOption !== 'HVC'){
                isValid = checkPossiblePlaces(board,row,col,turn);
              }
              return (
                  <div onClick={()=>{if(isValid && !disabled){handleBoardChange(row,col)}}} className='cell' key={col}>
                      {(cell !==null) && <div className={`circle ${cell === 1?'white':'black'}`}></div>}
                      {(isValid && !disabled) && <div className={`validPlace`}></div>}
                  </div>
              )
            }
            )}
            </div>)}
    </div>
  )
}

export default Board