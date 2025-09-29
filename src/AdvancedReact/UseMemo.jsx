import React, { useMemo, useState } from 'react'
import { use } from 'react'

const UseMemo = () => {
  

  const [number, setNumber] = useState(0)

  const handleInputChange = (e) => {
    const inputValue = parseInt(e.target.value) 
    setNumber(inputValue)
  }
// 5 8 4* *3 *2 *1
  const computeExpensiveValue = (num) => {
    console.log('Computing...')
    let result = 1
    for (let i = 1; i <= num; i++) {
      result *= i
    }
    return result
  }
  const memoizedValue = useMemo(() => computeExpensiveValue(number), [number])

  return (
    <div>
        <h2>useMemo Hook Example</h2>
        <input
            type="number"
            value={number}
            onChange={handleInputChange}
        />

        <p>Factorial of {number} is : {memoizedValue}</p>
    </div>
  )
}

export default UseMemo