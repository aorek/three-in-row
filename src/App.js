import React from "react"

import "./App.css"

import { GameCtxProvider } from "./context/GameCtx"
import Board from "./components/board"

function App() {
  return (
    <>
      <GameCtxProvider>
        <div className="container">
          <Board />
        </div>
      </GameCtxProvider>
    </>
  )
}

export default App
