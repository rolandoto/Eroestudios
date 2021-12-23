import  React, { useContext } from 'react'
import './headers.css'
import { AiOutlineUser,AiOutlineShopping,AiOutlineSearch } from "react-icons/ai";
import {Link} from 'react-router-dom'
import UseUsers from '../hooks/UseUsers';
import UseCart from '../hooks/UseCart';
import { useEffect, useState } from 'react/cjs/react.development';
import Modal from '../Modal/Modal';
import { BsFillGearFill } from "react-icons/bs";
import  AutoProvider  from '../../core/Autocontext';
import { useHistory } from 'react-router';
const Header =() =>{

    const {isLogin,Logout} = UseUsers()
    const {carts} = UseCart()
    const {cart} = carts 
    const {setShow,show,name} = useContext(AutoProvider)
    
    const history = useHistory()
    const handLogout =()=>{
        setShow(!show)
    }

    const handCongig =() =>{
        history.push('/configuration')
    }

    

    

    return (
        <header>
            <nav className='container'>
                <div className='flex-nav-logo'>
                   <h1><span className='flex-logo'></span><span className='aero'><img src="http://aeroestudios.com/wp-content/uploads/2021/11/logo-color-aeroestudios.png" alt="" /> </span> </h1>
               </div>
                <ul className='flex-nav'>
                   <Link to ='/'><li>HOME</li></Link> 
                    <Link to ='/produts'><li>PRODUCTS</li></Link> 
                </ul>
                <ul className='flex-login'> 
                    <div className='flex-icon-na'>
                      <form action="" className='search'>
                     <input type="text" name="" id=""  placeholder='search'/>
                     </form>
                      < AiOutlineSearch    size={25} className='flex-icon' color='#205a97' />
                      </div>

                    {isLogin  ?<h1 >{name} </h1>   
                        : 
                     <Link to='/Login' className='color-icon'  >  <li> <AiOutlineUser color='#205a97' size={30}  /></li> </Link>}
                    
                    <Link to='/DetailProduct' className='currentColor' ><li> <AiOutlineShopping color='#205a97' size={30} /> {cart.length > 0 &&   ( <span className='cart-op'>{cart.length} </span>)}   </li></Link>   

                    {isLogin && <div>
                                    <div>
                                        <BsFillGearFill className='config-headers' color='#205a97' onClick={handLogout} />
                                    </div>
                                    
                                    <div>
                                        {show &&  <Modal onClose={Logout} name={name} confif={handCongig}  ></Modal>}
                                </div>
                         </div>   }
                </ul>
            </nav>
        </header>
    )
}
export default  Header