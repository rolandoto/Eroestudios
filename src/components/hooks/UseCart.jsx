import { useContext } from "react"
import  UseContextProvider  from "../../context/UseContext"

const UseCart =() =>{

    const {carts,setCart} = useContext(UseContextProvider)

    const AddCart =(event) =>{
        setCart({
            ...carts,
            cart:[...carts.cart,event]
        })
    }

    return {
        AddCart,
        carts
    }
}

export default UseCart