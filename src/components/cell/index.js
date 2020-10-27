import React, { useState } from "react"

export default function Cell({ cell }) {
  const [content, setContent] = useState("")

  const handleClick = () => {}

  return (
    <div className="box" onClick={handleClick}>
      {cell.id}
    </div>
  )
}
