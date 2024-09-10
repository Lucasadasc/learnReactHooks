import React, {useState, useEffect} from "react";

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)

        // O código abaixo é o código de limpeza que é executado quando o componente é desmontado.
        // É uma boa prática adicionar o código de limpeza para evitar vazamento de memória.
        return () => {
            clearInterval(interval)
        }
    }, [count]) 
    // Nesta situação, se o array de dependências estiver vazio, o intervalo será criado apenas uma vez e o contador não será atualizado. 
    // Se o array de dependências for [count], o intervalo será criado novamente sempre que o contador for atualizado.
    // Isso por que o useEffect é executado após cada renderização do componente.


    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
