import React, { useRef } from 'react'
import './Register.css'
import  Recaptcha from 'react-recaptcha';
import { useState } from 'react/cjs/react.development';
import UseUsers from '../hooks/UseUsers';

const Register  =()=>{
     const  {Register,isLoading} =UseUsers()
    const [username,setUsername]=useState('')
    const [password,setPassaword] =useState('')

    const handSubmit =(e) =>{
        e.preventDefault()
        Register({ username, password })
    }   
    console.log(isLoading)
    return( 
        <div> 
            {
                !isLoading &&
                <form className="form"  onSubmit={handSubmit} >
                <div className="input-container">
                    <div className='Form'>
                        <h1 className='title-h1'>CREAR CUENTA</h1>
                        <label >Nombre</label>
                        <input  className="inpute" placeholder="Nombre" onChange={(e) => setUsername(e.target.value)} />
                         <label >Apellido</label>
                        <input  className="inpute" placeholder="apellido"/>
                         <label >email</label>
                        <input  className="inpute" placeholder="email"/>
                         <label >Telefono</label>
                        <input  className="inpute" placeholder="telefono"/>
                         <label >Contraseña</label>
                        <input  className="inpute" placeholder="contraseña" type='password' onChange={(e) => setPassaword(e.target.value)} />
                         <label >Confirmar contraseña</label>
                        <input  className="inpute" placeholder="confirmar contraseña" type='password' />
                    </div>
                </div>
                    <button className='login-btn' type="submit" >
                        <span>Crear Cuenta</span>  
                         
                    </button>
                    
            </form> 
           
            }
    {isLoading && <h1 className='auntenti'>Usuario Creado</h1>} 
        </div>
    )
}

export default Register