import { useState } from 'react'
import CountDisplay from '../src/component/CountDisplay'

// import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increment=() =>
  {
    setCount(count+1);
  }

  return (
    <>
     <CountDisplay count={count} increment={increment}/>
    </>
  )
}

export default App
