import React, { useContext } from 'react'
import './homepage.scss'
import { AppContext } from '../../Context/AppContext'
import { Link } from 'react-router-dom';
const Home = () => {
    const {setPage} = useContext(AppContext);

  return (
    <div className='homepage'>
        <div className="btns">
            <h1 className='game-title'>Otholo</h1>
            <Link className='option' to={'gameoptions'}>Start Game</Link>
        </div>
    </div>
  )
}

export default Home