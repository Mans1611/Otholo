import React, { useContext, useEffect } from 'react'
import './gameoptions.scss'
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import {  GameContext, BoardType } from '../../Context/GameContext';

const GamePlayOptions = () => {
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
  const {setBoard,setHistory} = useContext(GameContext);
  
  const RestGame = ()=>{
    setBoard(intialBoard);
    setHistory([intialBoard]);
  }
  
  return (
    <div className="game_options_wrapper">
        <button>Go Back Step</button>
        <button onClick={RestGame} className='reset_btn'>Rest<RestartAltIcon/></button>
    </div>
  )
}

export default GamePlayOptions