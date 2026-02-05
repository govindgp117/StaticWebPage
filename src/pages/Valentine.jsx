import React, { useState } from 'react'
import './Valentine.css'

export default function Valentine({ onYes }) {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 })
  const [scale, setScale] = useState(1)

  const handleNoHover = () => {
    const randomX = Math.random() * (window.innerWidth - 150)
    const randomY = Math.random() * (window.innerHeight - 60)
    setNoPos({ x: randomX, y: randomY })
    setScale(scale * 0.9)
  }

  return (
    <div className="valentine-container">
      <div className="content">
        <h1 className="question">Will you be my Valentine? 💕</h1>
        <div className="buttons-container">
          <button className="btn btn-yes" onClick={onYes}>
            Yes
          </button>
          <button
            className="btn btn-no"
            style={{
              transform: `translate(${noPos.x}px, ${noPos.y}px) scale(${scale})`,
              cursor: 'pointer'
            }}
            onMouseEnter={handleNoHover}
            onTouchStart={handleNoHover}
            disabled
          >
            No
          </button>
        </div>
      </div>
    </div>
  )
}
