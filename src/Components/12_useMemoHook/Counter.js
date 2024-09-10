import React , {useState, useMemo} from 'react'

function Counter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    /* 
        Com o useMemo, o cálculo de isEven só será executado quando counterOne mudar.
        O useMemo é um hook que memoriza o valor calculado de uma função e só recalcula o valor quando uma das dependências mudar. 
    */
    /* 
        Se eu não utilizar o useMemo, o cálculo de isEven será executado toda vez que o componente for renderizado. 
        Ou seja, outras funções que não dependem de counterOne serão executadas toda vez que o componente for renderizado e terão que
        esperar o cálculo de isEven ser executado. 
    */
    /*
        A diferença entre o useMemo e o useCallback é que o useMemo memoriza o valor calculado de uma função e só recalcula o valor quando uma das dependências mudar.
        Já o useCallback memoriza a função passada e só a recalcula quando uma das dependências mudar.
        Sendo assim, usar o useMemo é mais eficiente do que usar o useCallback, pois o useMemo memoriza o valor calculado de uma função e só recalcula o valor quando uma das dependências mudar. 
     */
    const isEven = useMemo(() => {
        let i = 0
        while (i < 2000000000) i++
        return counterOne % 2 === 0
    }, [counterOne])

    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count One - {counterOne}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
            </div>
        </div>
    )
}

export default Counter