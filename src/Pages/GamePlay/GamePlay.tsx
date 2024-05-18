import React, { useState } from 'react'
import './gameplay.scss';
import Board from '../../Components/Board/Board';
import ResultWrapper from '../../Components/ResultWrapper/ResultWrapper';
import { BoardType, GameContext,board as intialBoard } from '../../Context/GameContext';
import GamePlayOptions from '../../Components/GameOptions/GamePlayOptions';
import GameDetails from '../../Components/GameDetails/GameDetails';


const GamePlay = () => {  
  document.title = 'Game Play';

  const [turn,setTurn] = useState(1);
  const [board,setBoard] = useState <BoardType>(intialBoard);
  const [history,setHistory] = useState <BoardType[]>([intialBoard]);
  
  return (
    <GameContext.Provider value={{turn,setTurn,board,setBoard,history,setHistory}}>
      <div className='gameplay_page'>
          <div>
            <ResultWrapper/>
            <Board/>
            <GamePlayOptions/>
          </div>
        <GameDetails/>
      </div>  
    </GameContext.Provider>
  )
}

export default GamePlay