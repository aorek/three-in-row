import React, { useState, useContext } from "react"

import GameCtx from "../../context/GameCtx"
import Cell from "../cell"

export default function Board() {
  const gameCtx = useContext(GameCtx)
  const initBoardState = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => ({
    id: value,
    check: false,
    content: "",
  }))

  const [board, setBoard] = useState(initBoardState)

  const handleNewGame = () => {
    gameCtx.setTurn(1)
    setBoard(initBoardState)
  }
  return (
    <>
      <button onClick={handleNewGame}>New game</button>
      <div className="game-board">
        {board.map(cell => {
          return <Cell cell={cell} />
        })}
      </div>
    </>
  )
}
