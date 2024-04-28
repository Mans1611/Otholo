import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext';
import './gameplay.scss';
import Board from '../../Components/Board/Board';
import ResultWrapper from '../../Components/ResultWrapper/ResultWrapper';

let board = [
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],
  [null,null,null,0,1,null,null,null],
  [null,null,null,1,0,null,null,null],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null]
]
const GamePlay = () => {  

  return (
    <div className='gameplay_page'>
        <div>

          <ResultWrapper board={board}/>

          <Board board={board}/>

          <div className="game_options_wrapper"></div>
        </div>
    </div>
  )
}

export default GamePlay