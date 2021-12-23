import React, { useEffect, useState } from 'react'
import UseMap from '../../hooks/UseMap'
import ListProducts from '../../listProducts/ListProducts'
import './products.css'

const Products =()=>{
    const [state,setState] = useState()
    const {maps,loading} = UseMap()
    console.log(maps)
    if(!maps) return <h1>cargando...</h1>
    
    return (
        <div className="center-title">
            <h1 className='title-product' >Products</h1>
            <div >
           
            </div>
        </div>
    )
}
export default Products