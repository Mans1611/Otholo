import { createContext } from "react";

type AppContextType = {
    page:string,
    setPage:(page:string)=>void,
    myTurn : null | boolean,
    setMyTurn : (turn:boolean)=>void,
    gameOption: null | string
    setGameOption: (option:string|null)=>void,
    gameLevel : null | string,
    setGameLevel : (level:string|null)=>void
}

export const AppContext = createContext<AppContextType>({
    page:'home',
    setPage:()=>{},
    myTurn : true,
    setMyTurn:()=>{},
    gameOption: null,
    setGameOption: ()=>{},
    gameLevel : null ,
    setGameLevel : ()=>{}
});