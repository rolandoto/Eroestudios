import React from 'react'
import './Modal.css'
import { BiExit ,BiCog} from "react-icons/bi";
const Modal =({children,onClose,name,confif}) =>{
 
    return(
        <div className='Modal'>
            <div className='content-Modal'>
                <span  className='btn'  >
                    <span className='bord'> <h1 className='title-config'>{name[0]}</h1></span>
                    <ul className='text-font'>
                        <li> <span> Señor {name} </span></li>
                        <li><BiCog fontSize={20} color='#205a97' /> <span onClick={confif} >Configuracion</span> </li>
                        <li onClick={onClose}><span><BiExit fontSize={20} color='#205a97' />Salir</span> </li>
                    </ul>
                    {children}
                </span>
            </div>
        </div>
    )
}
export default  Modal