import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import ProductDetail from './pages/Product-Detail/Product-Detail'
import Order from './pages/Order/Order'
const App = ()=>{
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/product/:id" component={ProductDetail} />
                <Route path="/orders" component={Order} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;