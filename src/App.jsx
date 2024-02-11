import GameBoard from "./components/GameBoard"
import Log from "./components/Log";
import Player from "./components/Player"
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
       <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>
    <Log turns={gameTurns}/>
    </main>
  )
}

export default App
