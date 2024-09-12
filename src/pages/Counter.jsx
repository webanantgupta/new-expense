import React, { useState } from 'react'
import Navbar from '../components/Navbar';

const Counter = () => {

    const [x,setx] = useState(1);

const handleIncrease = () => {
   setx(x+1)
}

const handleDecrease = () => {
    setx(x-1)
}

const handleMultiply = () => {
  setx(x*2)
}

const handleDivide = () => {
  setx(x/2)
}

const handleMultiply5 = () => {
  setx(x*5)
}
  return (
    <div>
      <Navbar/>
      Counter Page
      <p>Value:{x}</p>
      <button onClick={handleIncrease}>Increase by one</button>
      <button onClick={handleDecrease}>Decrease by one</button>
      <button onClick={handleMultiply}>Multiply by two</button>
      <button onClick={handleDivide}>Divide by two</button>
      <button onClick={handleMultiply5}>Multiply by five</button>
      


    </div>
  )
}

export default Counter
