import React, { useContext } from 'react'
import { UserContext, UserTeam } from '../10_UseContext/UserContext'

function ComponentF(){

    const user = useContext(UserContext);
    const team = useContext(UserTeam);

    return (
        <>
            <h2>Component F</h2>
            <p>Nome: {user}</p>
            <p>Time: {team}</p>
        </>
    )
}

export default ComponentF