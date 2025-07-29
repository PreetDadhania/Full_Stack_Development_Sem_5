import { useState } from 'react'
import React from 'react'
import Counter from './components/Counter'
import Name from './components/Name'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-container'>
      <Counter />
      <Name />
    </div>
  )
}

export default App
