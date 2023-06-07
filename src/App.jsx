import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increase(){
    setCount(count+1)
  }
  function reset(){
    setCount(0)
  }
  function decrease(){
    setCount(count-1)
  }
  return (
    <>
      <h1>Counter</h1>
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrease}>Decrease</button>
    </>
  )
}

export default App
