import React, { useContext } from "react"

import GameCtx from "../../context/GameCtx"
import { useBoard } from "../../hooks/useBoard"
import Cell from "../cell"

export default function Board() {
  const gameCtx = useContext(GameCtx)
  const { doTurn, newGame } = useBoard()

  const handleCellClick = id => {
    doTurn(id, "O")
  }

  const refreshRows = () => {
    return gameCtx.board.map(cell => {
      return (
        <Cell
          key={cell.id}
          id={cell.id}
          onClick={handleCellClick}
          content={cell.content}
          isCandidate={cell.isCandidate}
        />
      )
    })
  }

  let rows = refreshRows()

  const checkWinners = () => {
    const machineMatches = gameCtx.board
      .filter(cell => cell.content === "X")
      .map(cell => cell.id)

    const winners = []

    if (machineMatches.includes(1) && machineMatches.includes(4))
      winners.push(7)
    if (machineMatches.includes(1) && machineMatches.includes(5))
      winners.push(9)
    if (machineMatches.includes(2) && machineMatches.includes(5))
      winners.push(8)
    if (machineMatches.includes(3) && machineMatches.includes(5))
      winners.push(7)
    if (machineMatches.includes(3) && machineMatches.includes(6))
      winners.push(9)

    const cells = gameCtx.board
      .filter(cell => winners.includes(cell.id))
      .map(cell => ({ ...cell, isCandidate: true }))
    const newBoard = [...gameCtx.board]
    cells.forEach(cell => {
      newBoard[cell.id - 1] = cell
    })
    gameCtx.setBoard(newBoard)
  }

  return (
    <>
      <button onClick={newGame}>New game</button>
      <button onClick={checkWinners}>Check winners</button>
      <div className="game-board">{rows}</div>
    </>
  )
}
