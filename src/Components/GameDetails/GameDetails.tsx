import React, { useContext } from 'react'
import './gamedetails.scss'
import { GameContext } from '../../Context/GameContext'
const GameDetails = () => {
    const {turn,history} = useContext(GameContext);

  return (
    <div className='game_details'>
        <div className="header">
            Turn <div className={`circle ${turn?'orange':'black'}`}></div>
        </div>
        <div className="game_history_wrapper">
            <h2 className="title">Game History</h2>
            <div className="history">
                {history?.map((_,index)=><div key={index}>{index}</div>)}
            </div>
        </div>
    </div>
  )
}

export default GameDetails