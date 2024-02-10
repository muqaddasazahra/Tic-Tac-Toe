import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import { useState } from "react"
function App() {
  const [activePlayer, setActivePlayer]=useState("X");
  const [gameTurns, setGameTurns]=useState([]);

 
  function handleSelectSquare(rowIndex,colIndex)
  {

    
    setActivePlayer((prevPlayer)=> (prevPlayer==="X")? "O":"X");
    setGameTurns((prevTurn)=> {
     
      let currentPlayer="X";
      if(prevTurn.length>0 && prevTurn[0].player==="X")
      {
        currentPlayer="O";
      }
    let updatedTurns=[{square: {row: rowIndex , col: colIndex}, player: currentPlayer},...prevTurn]

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
       <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>

    </main>
  )
}

export default App
