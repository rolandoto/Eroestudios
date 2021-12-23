import React, {  useState } from 'react'

const Context = React.createContext({})


export const UseContextProvider =({children}) => {

    const state ={
        cart:[]
    }  
   
    const [carts,setCart] =useState(state)
    
    return <Context.Provider 
            value={{carts,
                    setCart}}>
                {children}
            </Context.Provider>
}

export default Context