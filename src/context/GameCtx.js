import React, { useState } from "react"

const GameCtx = React.createContext({})

export const GAME_STATE = {
  READY: 0,
  PLAYING: 1,
  WIN: 2,
  GAME_OVER: 3,
}

export const initBoardState = () => {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => ({
    id: value,
    check: false,
    content: "",
    isCandidate: false,
  }))
}

export const GameCtxProvider = ({ children }) => {
  const [turn, setTurn] = useState(1)
  const [board, setBoard] = useState(initBoardState)
  const [gameState, setGameState] = useState(GAME_STATE.READY)

  return (
    <GameCtx.Provider
      value={{ turn, setTurn, board, setBoard, gameState, setGameState }}
    >
      {children}
    </GameCtx.Provider>
  )
}

export default GameCtx
