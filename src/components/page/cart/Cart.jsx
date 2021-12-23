import React from 'react'
import UseCart from '../../hooks/UseCart'
import UseUsers from '../../hooks/UseUsers'
import './Cart.css'
const Cart =({history}) =>{

    const {carts} = UseCart()
    const {isLogin} = UseUsers()

    const handCheckout =()=>{
        if(isLogin!= true) return history.push('/login') 
        if(isLogin){
          return  history.push('/checkout')
        } 
    }
    
    if(carts.cart.length ==0) return <h1>el carrito esta vacio</h1>
    return (
        <div className='container-ecommerce' >
            <div className='cart-container'>
                <h1><span>Seleccion los datos y descripcion del producto de que desea    </span></h1>
            </div>
            <div className='coordena-cart'>
                <h1> coordenas cart</h1>
                {carts.cart.map((index,i)  =>(
                    <div key={i}>
                        <h1>{index.lat} </h1>
                    </div>
                ))}
                <h1> sub total : $20000</h1>
                <h1> iva : $70000</h1>
                <button className='button-paypal' onClick={handCheckout} >ir pasarela de pago</button>
            </div> 
        </div>
    )
}
export default Cart