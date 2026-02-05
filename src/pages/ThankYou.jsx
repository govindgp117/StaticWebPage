import React from 'react'
import './ThankYou.css'

export default function ThankYou() {
  return (
    <div className="thankyou-container">
      <div className="card">
        <div className="heart">💖</div>
        <h1>Yes!</h1>
        <p className="message">
          Thank you for being my Valentine!
        </p>
        <p className="submessage">
          You've made me the happiest person. 💕
        </p>
        <div className="hearts-animation">
          <span>💕</span>
          <span>💕</span>
          <span>💕</span>
        </div>
      </div>
    </div>
  )
}
