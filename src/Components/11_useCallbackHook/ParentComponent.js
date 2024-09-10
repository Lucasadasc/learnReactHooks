import React, { useState, useCallback } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

function ParentComponent() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)
    
    /* 
    - usar useCallback para evitar que o componente filho seja renderizado novamente
    - useCallback é um hook que retorna uma versão memorizada do callback que só muda se uma das dependências tiverem mudado.
    - Se você passar um array vazio como segundo argumento, ele só será executado uma vez.
    - Se você não passar um array, ele será executado toda vez que o componente for renderizado.
    - Se você passar uma variável como segundo argumento, ele será executado toda vez que essa variável mudar. 
    */
    /* 
        Se não usar o useCallback, o componente filho será renderizado toda vez que o componente pai for renderizado. 
        Nesse caso aqui, o componente filho é o Button.js. Se o salary fosse alterado, tanto o incrementAge quanto o incrementSalary seriam renderizados novamente. 
    */
    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])
    
    const incrementSalary =  useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])
    
    return (
        <>
            <Title />
            <Count text='Age' count={age} />
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text='Salary' count={salary} />
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </>
    )
}

export default ParentComponent

// Em situações como essa, o uso de Callbacks é recomendado para evitar que o componente filho seja renderizado novamente