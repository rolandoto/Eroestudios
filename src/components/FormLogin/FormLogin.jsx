
import React, {useEffect, useState } from 'react'
import {Link,useHistory} from 'react-router-dom'
import UseUsers from '../hooks/UseUsers'
import Loader from "react-loader-spinner";
const FomrLogin =() =>{

  const [username,setUsername] = useState('') 
  const [password,setPassword] = useState('')
  
  const {Login,jwt,isLoading,isError} = UseUsers()
  const history = useHistory()
  const handSubmit=(e)=>{
    e.preventDefault()
    Login({username,password})
      }
      
  useEffect(() =>{
    if(Boolean(jwt)){
      history.push('/')
    }else {
      
    }
  },[jwt])
  
    return (
        <>
            <form className="form" onSubmit={handSubmit} >
            <div className="input-container">
              <h1 className='title-h1'>INICIAR SESIÓN</h1>
              <div className='Form'>
              <input
                type="text"
                name="username"
                className="input"
                placeholder="Correo electronico"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="input-container">
              
              <a href="#" className="link forgotten-password">
                Forgot password?
              </a>

            </div>
          {isLoading &&  
          <div className='loading'>
               <Loader
                type="TailSpin"
                color="#205a97"
                height={60}
                width={60}
            //3 secs
            /><h1 className='login-botton'>Cargando Usuario....</h1>
           </div>
    }
        {isError ? <span className='isError'>Usuario no encontrado</span> : null}
            </div>
                <button className='login-btn' type="submit" >
                    <div className='l'></div>
                  <span>Iniciar sesión   </span>   
                </button>

                  <a className='Login-Btn' type="submit" >
                      <Link  to='/register' className='color' >
                          <div className='l'></div>
                        <span>Crear cuenta  </span>   
                      </Link>
                  </a>
        </form>
            
       </>
    )
}
export default FomrLogin