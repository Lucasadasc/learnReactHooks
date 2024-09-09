import React, {useState} from 'react'
import './style.css'

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div className='div_style'>
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            {/* Devemos utilizar a função de callback para garantir que o valor atualizado seja baseado no valor anterior. */}
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button> 
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    )
}

export default HookCounterTwo