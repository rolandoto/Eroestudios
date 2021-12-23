import React from 'react'
import UseCart from '../../hooks/UseCart'
import './DetailProduct.css'

const DetailProduct =({history}) =>{
     const {carts} = UseCart()


     const handCart =()=>{
        history.push('/cart')
     }
    return (
        <div className='container-ecommerce' >
            <div className='cart-container'>
                <h1><span>especifique los detalles del productos</span></h1>
            </div>
            <div className='coordena-cart'>
                <div className='Coorde-Detail' >
                    <ul className='list-Detail' > 
                        <li>Detalles</li>
                        <li>Fecha</li>
                        <li>Formato</li>
                        <li>Resolucion</li>
                    </ul>
                </div>
               
                <div  className='red'>

                    <div>
                        <ul>  
                            {carts.cart.map((index,i)  =>(
                                <li key={i}>
                                    <p>{index.lat} </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>  
                        <ul>
                           <li><input type='radio' />
                            <label for="dewey">21/09/2019</label></li> 
                            <li><input type='radio' />
                            <label for="dewey">21/09/2019</label></li>  
                            <li><input type='radio' />
                            <label for="dewey">10/04/2020</label></li>   
                            <li><input type='radio' />
                            <label for="dewey">09/02/2021  </label></li>  
                        </ul> 
                    </div>
                    <div>   
                        <li> 
                            <input type='radio' />
                            <label for="dewey">jpg</label>
                        </li>
                        <li>
                            <input type='radio' />
                            <label for="dewey">svg</label>
                        </li>
                        
                        <li>
                            <input type='radio' />
                            <label for="dewey">ECW</label>
                        </li>
                        <li>
                             <input type='radio' />
                            <label for="dewey">TIFF</label>
                        </li>
                       
                    </div>
                    <div>  
                        <li>
                             <input type='radio' />
                            <label for="dewey">10 cm</label>
                        </li> 
                        <li>
                            <input type='radio' />
                            <label for="dewey">20 cm</label>
                        </li>
                        <li>
                             <input type='radio' />
                             <label for="dewey">40 cm</label>
                        </li>
                       <li>
                             <input type='radio' />
                             <label for="dewey">0 cm</label>
                       </li>
                       
                    </div>
                </div>
                
                <button className='button-paypal' onClick={handCart}  >Agregar al carrito</button>
            </div> 
        </div>
    )
}

export default DetailProduct