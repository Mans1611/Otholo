import './homepage.scss'
import { Link } from 'react-router-dom';
const Home = () => {

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