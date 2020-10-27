import { useContext, useEffect } from "react"

import GameCtx, { GAME_STATE, initBoardState } from "../context/GameCtx"

export function useBoard() {
  const gameCtx = useContext(GameCtx)

  const newGame = () => {
    gameCtx.setBoard(initBoardState())
    gameCtx.setTurn(1)
    gameCtx.setGameState(GAME_STATE.PLAYING)

    let X = 0
    let O = 0

    const newBoard = gameCtx.board.map(cell => {
      if (cell.id > 6) return cell

      const dice = Math.floor(Math.random() * (6 - 1)) + 1

      let match = "X"
      if (dice % 2 === 0 && X < 3) {
        X += 1
      } else if (O < 3) {
        O += 1
        match = "O"
      }

      return {
        ...cell,
        content: match,
      }
    })

    gameCtx.setBoard(newBoard)
  }

  const getCell = id => {
    return gameCtx.board.find(cell => cell.id === id)
  }

  const updateCell = (id, value) => {
    return gameCtx.board.map(cell => {
      if (cell.id !== id || cell.check) return cell

      return {
        ...cell,
        check: true,
        content: value,
      }
    })
  }

  const doTurn = (id, value) => {
    const newBoard = updateCell(id, value)
    gameCtx.setBoard(newBoard)
    gameCtx.setTurn(gameCtx.turn + 1)
  }

  useEffect(() => {
    if (gameCtx.board.every(cell => cell.check))
      gameCtx.setGameState(GAME_STATE.GAME_OVER)
  }, [gameCtx, gameCtx.board])

  return {
    isPlayerTurn: gameCtx.turn % 2 === 1,
    newGame,
    updateCell,
    getCell,
    doTurn,
  }
}
