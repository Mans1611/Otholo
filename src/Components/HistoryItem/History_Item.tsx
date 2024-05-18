import React, { useContext } from 'react'
import { useCountCircles } from '../../hooks/useCountCircles';
import { BoardType, GameContext } from '../../Context/GameContext';

const History_Item = ({oldBoard,index}:{oldBoard:BoardType,index:number}) => {
    const {setHistory,setBoard} = useContext(GameContext);
    
    const [orange,black] = useCountCircles(oldBoard);
    const ChangeHistory = (oldBoard:BoardType,index:number)=>{
        setBoard(oldBoard);
        setHistory((histories:BoardType[])=>histories.slice(0,index));
    }
    return (
        <div onClick={()=>ChangeHistory(oldBoard,index)} className='history_item' key={index}>
            <>
                <div className='circle orange'></div>
                {orange}
            </>
            <>
                <div className='circle black'></div>
                {black}
            </>
        </div>
        )
  
}

export default History_Item