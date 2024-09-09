import React, { useState} from 'react'

function HookCounterThree() {
    
    const [name, setName] = useState({firstName: '', lastName: ''})
    
    return (
        <div>
            <input 
                type='text' 
                value={name.firstName} 
                // Os três pontos + nome da variavel são utilizados para manter o valor do outro campo, sem sobrescrever. Se não fizer isso, o valor do outro campo será apagado.
                onChange={e => setName({ ...name, firstName: e.target.value })}  
            />
            <input 
                type='text' 
                value={name.lastName} 
                onChange={e => setName({ ...name, lastName: e.target.value })} 
            />
            <h2>Your first name is - {name.firstName}</h2>
            <h2>Your last name is - {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </div>
    )
}

export default HookCounterThree