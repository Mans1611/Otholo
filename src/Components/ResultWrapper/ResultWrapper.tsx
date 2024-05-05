
import { useContext } from 'react';
import { useCountCircles } from '../../hooks/useCountCircles'
import './result_wrapper.scss';
import { GameContext } from '../../Context/GameContext';

const ResultWrapper = () => {
    const {board} = useContext(GameContext);
    
    const[white,black] = useCountCircles(board)
    return (
    <div className='result_wrapper'>
        <div className="result">
          Orange : {white}
        </div>
        <div className="result">
          Black : {black}
        </div>
    </div>
  )
}

export default ResultWrapper