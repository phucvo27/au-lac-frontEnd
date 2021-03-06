import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HeaderContainer from './components/Header/Header.container.jsx';
import HomeContainer from './pages/Home/Home.container';
import Products from './pages/Products/Products.jsx'
import ProductDetail from './pages/Product-Detail/Product-Detail-2'
import Order from './pages/Order/Order';
import Checkout from './pages/Checkout/Checkout.container.jsx';
import Modal from './components/Modal/Modal.container.js';
const App = ()=>{
    return (
        <BrowserRouter>
            <HeaderContainer />
            <Switch>
                <Route exact path="/" component={HomeContainer} />
                <Route path="/products/:cateId" component={Products} />
                <Route path="/product/:id" component={ProductDetail} />
                <Route path="/orders" component={Order} />
                <Route path="/checkout" component={Checkout} />
            </Switch>
            <Modal />
        </BrowserRouter>
    )
}

export default App;