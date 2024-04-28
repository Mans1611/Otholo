import React from 'react'
import './baord.scss';


const Board = ({board}:{board:(number|null)[][]}) => {
        
  return (

    <div className="board_wrapper">
          {board.map((row :(null|number)[] ,key:number)=><div className='row' key={key}>
            {row.map((cell:(null|number),index:number)=>{
                return (
                    <div className='cell' key={index}>
                        {(cell === 1||cell===0)   && <div className={`circle ${cell === 1?'white':'black'}`}></div>}
                    </div>

                )
            }
            )}
            </div>)}
    </div>
  )
}

export default Board