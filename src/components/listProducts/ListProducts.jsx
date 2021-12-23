import React from 'react'
import {Link} from 'react-router-dom'

const ListProducts =({id,img,name}) =>{
    return (
            <div className='pic'>  
                <img src={img} alt="" />
            </div>
            )
}
export default ListProducts