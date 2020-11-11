import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header-2';
import HomeContainer from './pages/Home/Home.container';
import Products from './pages/Products/Products.jsx'
import ProductDetail from './pages/Product-Detail/Product-Detail-2'
import Order from './pages/Order/Order';
import Checkout from './pages/Checkout/Checkout'
const App = ()=>{
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={HomeContainer} />
                <Route path="/products" component={Products} />
                <Route path="/product/:id" component={ProductDetail} />
                <Route path="/orders" component={Order} />
                <Route path="/checkout" component={Checkout} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;