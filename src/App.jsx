import React, { useState } from 'react'
import './App.css'
import Valentine from './pages/Valentine'
import ThankYou from './pages/ThankYou'

function App() {
  const [showThankYou, setShowThankYou] = useState(false)

  return (
    <div>
      {!showThankYou ? (
        <Valentine onYes={() => setShowThankYou(true)} />
      ) : (
        <ThankYou />
      )}
    </div>
  )
}

export default App
