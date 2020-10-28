import React from "react"

export default function Cell({ id, onClick, content, isCandidate }) {
  return (
    <div
      className={`box${isCandidate ? " isCandidate" : ""}`}
      // onClick={() => onClick(id)}
    >
      {content}
    </div>
  )
}
