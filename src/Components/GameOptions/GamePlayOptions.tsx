import React, { useContext } from 'react'
import './gameoptions.scss'
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import {  GameContext, BoardType } from '../../Context/GameContext';
import { AppContext } from '../../Context/AppContext';
import UndoIcon from '@mui/icons-material/Undo';
const GamePlayOptions = () => {
  // the intalized game at the first begining
  const intialBoard:BoardType = [
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,0,1,null,null,null],
    [null,null,null,1,0,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null]
  ]
  const {setBoard,setTurn,history,setHistory} = useContext(GameContext);
  const {gameOption} = useContext(AppContext);
  const RestGame = ()=>{
    // reset the game, and also reset the hitory of the game.
    setBoard(intialBoard);
    setHistory([]);
  }
  const GetBackOneStep = ()=>{
    // this function just return one step back of the board.
    let prevBoard:BoardType = history[history.length - 1 ]; // getting the last board state 
    setHistory((history:BoardType[])=>history.slice(0,-1)) // removing the last element from the history
    setBoard(prevBoard)
    if (gameOption === 'HvH')
      setTurn((prevTurn:number)=>(prevTurn + 1) % 2);  // if i am in mode HvH, if i get back step, i must also change the turn.

  }
  
  return (
    <div className="game_options_wrapper">
        <button className='opt_btn back_step' onClick={GetBackOneStep}>
          <UndoIcon/>  
          Undo
        </button>
        <button onClick={RestGame} className='opt_btn reset_btn'>Rest<RestartAltIcon/></button>
    </div>
  )
}

export default GamePlayOptions