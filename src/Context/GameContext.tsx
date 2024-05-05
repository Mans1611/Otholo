import { createContext } from "react"
export type BoardType = (number|null)[][]

export let board:BoardType = [
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,0,1,null,null,null],
    [null,null,null,1,0,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null]
  ]


type GameContextType = {
    turn:number,
    setTurn:(turn:any)=>void,
    board:BoardType,
    setBoard:(board:any)=>void,
    history:BoardType[],
    setHistory:(board:any)=>void
}
export const GameContext = createContext<GameContextType>({
    turn:0,
    setTurn:()=>{},
    board:board,
    setBoard:()=>{},
    history:[board],
    setHistory:()=>{}
})
