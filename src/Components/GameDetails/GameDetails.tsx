import React, { useContext } from 'react'
import './gamedetails.scss'
import { BoardType, GameContext } from '../../Context/GameContext'
import {  isTerminalNode } from '../../utilis/minimax';
import { AppContext } from '../../Context/AppContext';
import { useCountCircles } from '../../hooks/useCountCircles';
import History_Item from '../HistoryItem/History_Item';
import { evaluateBoard } from '../../heuristics/evaluateBoard';

const GameDetails = () => {
    const {turn,history,board,setBoard} = useContext(GameContext);
    const {gameOption} = useContext(AppContext);

   let isTerminal = isTerminalNode(board);
    return (
        <div className='game_details'>
            {
                !isTerminal
                &&
                <div className="header">
                    Turn <div className={`circle ${turn?'orange':'black'}`}></div>
                </div>
            }
         
            {isTerminal && 
                <div className='game_result'>
                    {
                    evaluateBoard(board)>0?'Player 1 Wins':
                    gameOption === 'HvH'?'Player 2 Wins':'AI Wins'
                    }
                </div>
            }
          
            <div className="game_history_wrapper">
                <h2 className="title">Game History</h2>
                <div className="history">
                    {history.length>0?history.map((oldBoard,index)=><History_Item 
                    key = {index}
                    index= {index} 
                    oldBoard={oldBoard}/>
                    ):
                    <h3>No History Yet</h3>
                    }
                </div>
            </div>
        </div>
    )
}

export default GameDetails