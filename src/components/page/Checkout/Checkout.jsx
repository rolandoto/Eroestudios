import React from 'react'
import ButtonPaypal from '../../ButtonPaypal/ButtonPaypal'
import './Checkout.css'
const Checkout =()=>{

    return (
        <div className='Checkout-list'>
            <h1 className='title-checkout'>pagar</h1>
            <ButtonPaypal/>
        </div>
    )
}

export default  Checkout