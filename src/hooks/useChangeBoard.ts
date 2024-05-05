import { useContext } from "react";
import { BoardType, GameContext } from "../Context/GameContext";

export const useChangeBoard = (row:number,col:number)=>{
    const {turn,setTurn,board,setBoard} = useContext(GameContext);

   
}