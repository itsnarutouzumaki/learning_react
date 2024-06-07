import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
   
  const add=()=>{
    setCount(count+1);
  }

  const sub=()=>{
    if(count>0)
    setCount(count-1);
  }
  
  return (
    <>
      <div>
        <h1>The counter Project {count}</h1>
        <button onClick={add}>add in {count}</button>
        <button onClick={sub}>subtract in {count}</button>
      </div>
    </>
  )
}

export default App
