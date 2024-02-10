import { useState } from "react";


export default function GameBoard()
{   
    const initialGameBoard=[[null,null,null],[null,null,null],[null,null,null]];
    const [gameBoard, setGameBoard]=useState(initialGameBoard);
    function handleClick(rowIndex,colIndex)
    {
    setGameBoard((prevGameBoard)=>
    {
       const updatedBoard= [...prevGameBoard.map((innerBoard)=>[...innerBoard])];
       updatedBoard[rowIndex][colIndex]="X";
       return updatedBoard;
    });

    }

    return (
    <ol id="game-board">
     {gameBoard.map((row,rowIndex)=><li key={rowIndex}>
        <ol>
            {row.map((playerSymbol,colIndex)=><li key={colIndex}><button onClick={()=>handleClick(rowIndex,colIndex)}>{playerSymbol}</button></li>)}
        </ol>
     </li>)}
    </ol>);
}