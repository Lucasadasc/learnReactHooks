import React from 'react'

function Button({ handleClick, children }) {
    console.log(`Rendering button - ${children}`)
    
    return (
        <button onClick={handleClick}>{children}</button>
    )
}

export default React.memo(Button)
// O react memo é um HOC que previne um componente de ser renderizado novamente se as props não mudarem