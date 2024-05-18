import React, { useContext } from 'react'
import './gamedetails.scss'
import { BoardType, GameContext } from '../../Context/GameContext'
import { evaluateBoard, isTerminalNode } from '../../utilis/minimax';
import { AppContext } from '../../Context/AppContext';
import { useCountCircles } from '../../hooks/useCountCircles';
import History_Item from '../HistoryItem/History_Item';

const GameDetails = () => {
    const {turn,history,setHistory,board,setBoard} = useContext(GameContext);
    const {gameOption} = useContext(AppContext);

   
    return (
        <div className='game_details'>
            <div className="header">
                Turn <div className={`circle ${turn?'orange':'black'}`}></div>
            </div>
            <div>
                {isTerminalNode(board) && 
                    <div>
                        {
                        evaluateBoard(board)>0?'Player 1 Wins':
                        gameOption === 'HvH'?'Player 2 Wins':'AI Wins'
                        }
                    </div>
                }
            </div>
            <div className="game_history_wrapper">
                <h2 className="title">Game History</h2>
                <div className="history">
                    {history.map((oldBoard,index)=><History_Item 
                    key = {index}
                    index= {index} 
                    oldBoard={oldBoard}/>)}
                </div>
            </div>
        </div>
    )
}

export default GameDetails