import React, { useState } from "react"

const GameCtx = React.createContext({})

export const GameCtxProvider = ({ children }) => {
  const [turn, setTurn] = useState(1)

  return (
    <GameCtx.Provider value={{ turn, setTurn }}>{children}</GameCtx.Provider>
  )
}

export default GameCtx
