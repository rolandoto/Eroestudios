import React, { useContext, useEffect } from 'react'
import {useHistory,Route} from 'react-router-dom'
import  AutoProvider  from './Autocontext'

export const Autroroutex   =(props) =>{
    
    const {jwt}  = useContext(AutoProvider)
    const history = useHistory();

    useEffect(() =>{
        if(!jwt) {
            history.push('/Login')
        }
    },[jwt])

    return (
        <Route {...props} />
    )
}   