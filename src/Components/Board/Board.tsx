import React, { useContext, useEffect, useRef } from 'react'
import './baord.scss';
import { BoardType, GameContext } from '../../Context/GameContext';
import { checkPossiblePlaces } from '../../hooks/CheckPossibleCells';
import { useChangeBoard } from '../../hooks/useChangeBoard';
import { channel } from 'diagnostics_channel';
import { ChangeBoard } from '../../utilis/ChangeBoard';


const Board:React.FC = () => {

  const {turn,setTurn,board,setBoard,setHistory} = useContext(GameContext);

  const handleBoardChange = (row:number,col:number)=>{
    let newBoard:BoardType;

    setBoard((board:BoardType)=>{
      board[row][col]=turn;
      newBoard = ChangeBoard(board,row,col,turn);
      return newBoard
    });
    setHistory((arr:BoardType[])=>[...arr,newBoard]);
    setTurn((prevTurn:number)=>(prevTurn + 1) % 2);
  }
  return (
    <div className="board_wrapper">
          {board.map((rows :(null|number)[] ,row:number)=><div className='row' key={row}>
            {rows.map((cell:(null|number),col:number)=>{
                const isValid = checkPossiblePlaces(board,row,col,turn);
                return (
                    <div onClick={()=>{if(isValid){handleBoardChange(row,col)}}} className='cell' key={col}>
                        {(cell !==null) && <div className={`circle ${cell === 1?'white':'black'}`}></div>}
                        {(isValid) && <div className={`validPlace`}></div>}
                    </div>
                )
            }
            )}
            </div>)}
    </div>
  )
}

export default Board