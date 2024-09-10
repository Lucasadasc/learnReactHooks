import React, {useState, useEffect} from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        /* 
            O código abaixo é o código de limpeza que é executado quando o componente é desmontado.
            É uma boa prática adicionar o código de limpeza para evitar vazamento de memória.
            Em certas situações, é necessário limpar recursos ou cancelar assinaturas. 
        */
        return () => {
            console.log('Component unmounting code')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, []) // O array de dependências vazio faz com que o useEffect seja executado apenas uma vez, ou seja, ele se comporta como componentDidMount.

    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default HookMouse