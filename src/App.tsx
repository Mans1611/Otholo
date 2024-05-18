
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import GameOptions from './Pages/GameOptions/GameOptions';
import GamePlay from './Pages/GamePlay/GamePlay';
import { useState } from 'react';
import { AppContext } from './Context/AppContext';



function App() {
  const [ page,setPage]=useState<string>('home');
  const [ gameOption,setGameOption] = useState<string|null>(null)
  const [ gameLevel,setGameLevel] = useState<string|null>(null)

  return (
    <div className="App">
      <AppContext.Provider value={{
        page,setPage,
        gameOption,setGameOption,
        gameLevel,setGameLevel}}>
        <Router>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/gameoptions' element={<GameOptions/>}/>
              <Route path='/gameplay' element={<GamePlay/>}/>
            </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
