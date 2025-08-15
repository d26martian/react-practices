import React, { useState } from 'react'
import * as classes from './Counter.module.scss'

export const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div className={classes.button}>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>increment</button>
    </div>
  )
}
