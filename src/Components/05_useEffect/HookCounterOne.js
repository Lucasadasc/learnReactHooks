import React, {useState, useEffect} from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')


    /* 
    - O useEffect é um hook que permite executar efeitos colaterais em componentes funcionais.
    - useEffect é uma alternativa para os métodos de ciclo de vida das classes.
    - useEffect é executado após cada renderização do componente. 
    */

    useEffect(() => {
        console.log('useEffect - Updating document title')
        document.title = `Clicked ${count} times`
    }, [count]) // Com o array de dependências, o useEffect só será executado quando a variável count muda. Portanto, mesmo que o componente seja renderizado várias vezes, o useEffect só será executado quando a variável count mudar.

    return (
        <div>
            <input 
                type='text' 
                value={name} 
                onChange={e => setName(e.target.value)}  
            />
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default HookCounterOne