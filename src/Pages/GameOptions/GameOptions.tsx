import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './gameoptions.scss'
import { AppContext } from '../../Context/AppContext'
import ComputerIcon from '@mui/icons-material/Computer';
import FaceIcon from '@mui/icons-material/Face';
const GameOptions = () => {
    const {gameOption,setGameOption,gameLevel,
        setGameLevel} = useContext(AppContext);

  return (
    <div className='homepage optionpage'>
         <div className="btns">
            <h1 className='game-title'>Select Mode</h1>
            <button className={`option gameoptions ${gameOption === 'HvH'? 'active':''}`} onClick={()=>{setGameOption('HvH');setGameLevel(null)}}><FaceIcon/> vs <FaceIcon/></button>
            <button className={`option gameoptions ${gameOption === 'HvC'? 'active':''}`} onClick={()=>setGameOption('HvC')}><FaceIcon/> vs <ComputerIcon/></button>
            {gameOption === 'HvC' && 
                <div className="levels">
                    <button className={`option ${gameLevel === 'easy' ? 'active':''}`} onClick={()=>setGameLevel('easy')}>Easy</button>
                    <button className={`option ${gameLevel === 'hard' ? 'active':''}`} onClick={()=>setGameLevel('hard')}>Hard</button>
                </div>
            }
            {   (gameOption == 'HvH' || (gameOption ==='HvC' && gameLevel)) && 
                <div className="start_wrapper">
                    <Link className='start' to='/gameplay'>strats</Link>
                </div>
            }
        </div>
    </div>
  )
}

export default GameOptions