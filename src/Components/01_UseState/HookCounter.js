import React, {useState} from 'react'

/* 
O hook é uma função que permite "ligar-se" a recursos de ciclo de vida do React a partir de componentes funcionais.
Com ele, é possível utilizar estados e outros recursos do React em componentes funcionais. 

A diferença entre o Hook e a classe é que o Hook é mais simples e mais fácil de usar.
*/




function HookCounter() {
    const [count, setCount] = useState(0)
    
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default HookCounter