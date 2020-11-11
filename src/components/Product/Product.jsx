import React from 'react';
import { Link } from 'react-router-dom';
import { cartItemsVar } from '../../graphql/cache';
const Product = (props) => {
    const addToCart = ()=>{
        console.log("Clicked add button")
        const currentCarts = cartItemsVar();
        localStorage.setItem('carts', JSON.stringify([...currentCarts, props.product]));
        cartItemsVar([...cartItemsVar(), props.product])
    }
    const { id, image, name, price} = props.product;
    return (
        <div className="product">
             <Link to={`/product/${id}`}>
                <div className="product__image">
                    <img src={image} alt={name}/>
                </div>
            </Link>
            <div className="product__actions">
                <div onClick={addToCart} className="product__action--cart">
                    <i className="fas fa-cart-plus"></i>
                </div>
                <div className="product__action--like">
                    <i className="fas fa-heart"></i>
                </div>
                <div className="product__action--compare">
                    <i className="fas fa-exchange-alt"></i>
                </div>
                <div className="product__action--share">
                    <i className="fas fa-share-alt"></i>
                </div>
            </div>
            <div className="product__name text-center">
                <Link to={`/product/${id}`}>
                    <h5>{name}</h5>
                </Link>
            </div>
            <div className="product__price text-center">
                <p>{price}</p>
            </div>
        </div>
    )
}


export default Product;