import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Cart from '../components/page/cart/Cart'
import Header from '../components/header/headers'
import Home from '../components/page/Home/Home'
import Login from '../components/Login/Login'
import Products from '../components/page/products/Products'
import Register from '../components/register/Register'
import { UseContextProvider } from '../context/UseContext'
import Checkout from '../components/page/Checkout/Checkout'
import DetailProduct from '../components/page/DetailProduct/DetailProduct'
import { AutoProvider } from '../core/Autocontext'
import { Autroroutex } from '../core/Autrorutes'
import configuration from '../components/configuration/configuration'

function App(){
    return (
        <AutoProvider>
            <UseContextProvider>
                <BrowserRouter>
                    <Header />
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/Login' component={Login} />
                            <Autroroutex exact  path='/cart' component={Cart} />
                            <Autroroutex exact path='/DetailProduct' component={DetailProduct} />
                            <Autroroutex exact path='/configuration' component={configuration} />
                            <Route exact path='/produts' component={Products} />
                            <Route exact path='/register' component={Register}  />
                            <Route exact path='/checkout' component={Checkout}  />
                        </Switch>
                </BrowserRouter>
            </UseContextProvider>
        </AutoProvider>
    )
}
export default App