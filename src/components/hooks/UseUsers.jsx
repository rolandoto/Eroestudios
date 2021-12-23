import {useCallback, useContext, useState} from 'react'
import  AutoProvider  from '../../core/Autocontext'
import loginService from '../service/LoginService'
import RegisterService from '../service/RegisterService'


const UseUsers =() =>{

    const {jwt,setJwt,name,setName} = useContext(AutoProvider)
   
    const [state,setState] = useState({
        loading:false,error:false
    })
    
    const Login = useCallback(({username,password}) =>{
        setState({loading:true,error:false}) 
        loginService({username,password}).then(jwt =>{
             window.sessionStorage.setItem('jwt',jwt)
             window.sessionStorage.setItem('name',username)
            setState({loading:false,error:false})
            setJwt(jwt)
            setName(username)

        }).catch(err =>{
            console.error(err)
            setState({loading:false,error:true})
        })
    },[setJwt]) 
    
     const Logout= useCallback(()=>{
        window.sessionStorage.removeItem('jwt')
        setJwt(null)
     },[setJwt])

    const Register =useCallback(({username,password}) =>{
        setState({loading:true,error:false})
            RegisterService({username,password}).then(index=>{
               
            setState({loading:false,error:false}) 
            }).catch(e =>{
                console.error(e)
            })
     },[])
    
    return {
        isLogin:Boolean(jwt),
        isLoading:state.loading,
        isError:state.error,
        Login,
        Logout,
        Register,
        jwt,
        name
    }
}

export default UseUsers