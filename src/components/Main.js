import React, {useEffect, useState} from "react";
import Board from "./Board";
import './Main.css'
import {determineWinner} from "../logic";

const Main = ({firstPlayer, secondPlayer}) => {
   let [boxes, setBoxes] = useState(Array(9).fill(null))
   let [next, setNext] = useState(firstPlayer)
   let [winner, lineIndexes] = determineWinner(boxes)
   let [score1, setPlayer1Score] = useState(0)
   let [score2, setPlayer2Score] = useState(0)

   useEffect(() => {
    if(winner === 'X') {
      setPlayer1Score(player1Score => player1Score+1)
    }
    if(winner === 'O')
      setPlayer2Score(player2Score => player2Score+1)
  }, [winner])
   const newGame = () => {
    setBoxes(Array(9).fill(null))
    setNext(firstPlayer)
   }
   if(!boxes.some(el => el == null)) {
     alert('There are no losers!')
     newGame()
   }

   const handleClick = (index) => {
      const boardCopy = [...boxes]
      if (winner || boardCopy[index]) return
      boardCopy[index] = (next === firstPlayer) ? 'X' : "O"
      setBoxes(boardCopy)
      setNext((next === firstPlayer) ? secondPlayer : firstPlayer)
   }

   const winnerPlayer = () => (next === firstPlayer) ? secondPlayer : firstPlayer



   return (
         <section className='wrapper'>
            <button className='start-game' onClick={newGame}>New Game</button>
           <p className='player'>{winner ? `Winner ${winnerPlayer()}` : `Player ${next} take turns`}</p>
           <Board boxes={boxes} handleClick={handleClick} lineIndexes={lineIndexes}/>
           <section className='score'>
              <h2>Score:</h2>
              <p>{`${firstPlayer} (X) : ${score1}`}</p>
              <p>{`${secondPlayer} (O) : ${score2}`}</p>
            </section>
         </section>
   )
}

export default Main;
