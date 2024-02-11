import GameBoard from "./components/GameBoard"
import GameOver from "./components/GameOver";
import Log from "./components/Log";
import Player from "./components/Player"
import { WINNING_COMBINATIONS } from "./winning-combinations";
import { useState } from "react"


function getActivePlayer(gameTurns)
{
  let currentPlayer="X";
  if(gameTurns.length>0 && gameTurns[0].player==="X")
  {
    currentPlayer="O";
  }
  return currentPlayer;
}

function App() {
  // const [activePlayer, setActivePlayer]=useState("X");
  const [gameTurns, setGameTurns]=useState([]);


 let activePlayer=getActivePlayer(gameTurns);

 const initialGameBoard=[[null,null,null],[null,null,null],[null,null,null]];
 let  gameBoard=[...initialGameBoard.map(array=>[...array])];
 
 for(const turn of gameTurns)
 {
     const {square, player}=turn;
     const {row, col}=square;
     gameBoard[row][col]=player;
 }
 let winner;
 for(const combination of WINNING_COMBINATIONS)
 {
  const firstSquareSymbol=gameBoard[combination[0].row][combination[0].column];
  const secondSquareSymbol=gameBoard[combination[1].row][combination[1].column];
  const thirdSquareSymbol=gameBoard[combination[2].row][combination[2].column];

  if(firstSquareSymbol && firstSquareSymbol===secondSquareSymbol && firstSquareSymbol===thirdSquareSymbol)
  {
     winner = firstSquareSymbol;
  }
 }
 const hasDraw= (gameTurns.length===9 && !winner);
 function handleRematch()
 {
   setGameTurns([]);
 }

  function handleSelectSquare(rowIndex,colIndex)
  {

    
    // setActivePlayer((prevPlayer)=> (prevPlayer==="X")? "O":"X");
    setGameTurns((prevTurns)=> {
     
      let currentPlayer=getActivePlayer(prevTurns);
    let updatedTurns=[{square: {row: rowIndex , col: colIndex}, player: currentPlayer},...prevTurns]

    return updatedTurns;
  })

 
  }

  return (
    <main>
      <div id="game-container">
       <ol id="players" className="highlight-player">
       <Player name="Player 1" symbol="X" isActive={activePlayer==="X"}></Player>
       <Player name="Player 2" symbol="O" isActive={activePlayer==="O"}/>
       </ol>
       
       {(winner||hasDraw) && <GameOver winner={winner} onRestart={handleRematch}/>}
       <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
      </div>
    <Log turns={gameTurns}/>
    </main>
  )
}

export default App
