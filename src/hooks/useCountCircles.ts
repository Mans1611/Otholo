
export const useCountCircles = (board:(number|null)[][])=>{
    let white=0,black=0;
    for(let i = 0; i < board.length;i++){
        for(let j = 0; j < board[i].length;j++){
            if (board[i][j] === 1)
                white+=1
            else if (board[i][j]===0)
                black+=1
        }
    }
    return [white,black];
}