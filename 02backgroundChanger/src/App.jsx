import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white")
  const [prevColor, setPrevColor] = useState("black") 

  const handleColorChange = (newColor) => {
    if(newColor!=color)
    setPrevColor(color) // update previous color to current color
    setColor(newColor) // update current color to new color
  }

  return (
    <div className="container" style={{ backgroundColor: color, color: prevColor }}>
      <h1>Now backgroundColor is: {color}</h1>
      <div className="bar">
        <button onClick={() => handleColorChange("red")}>Red</button>
        <button onClick={() => handleColorChange("blue")}>Blue</button>
        <button onClick={() => handleColorChange("green")}>Green</button>
        <button onClick={() => handleColorChange("grey")}>Grey</button>
        <button onClick={() => handleColorChange("yellow")}>Yellow</button>
        <button onClick={() => handleColorChange("orange")}>Orange</button>
      </div>
    </div>
  )
}

export default App
