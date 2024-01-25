import React, { useState } from 'react'

function Counter() {
    const[counter , setCounter] = useState(0);
    const increment=() => {
        setCounter(counter + 1);
    }
    const decrement=()=>{
        setCounter(counter -1);
    }
  return (
    <div className='container d-flex justify-content-center counterbtns'>
            <button onClick={increment} className='btn btn-dark'>+</button>
            <h2>{counter}</h2>
            <button onClick={decrement} className='btn btn-dark '>-</button>
    </div>
  )
}

export default Counter