import React from 'react'
import { useCountCircles } from '../../hooks/useCountCircles'

const ResultWrapper = ({board}:{board:(number|null)[][]}) => {
    const[white,black] = useCountCircles(board)
    return (
    <div className='result_wrapper'>
        white {white}
        black {black}
    </div>
  )
}

export default ResultWrapper