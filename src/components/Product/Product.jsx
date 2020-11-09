import React from 'react';
import { Link } from 'react-router-dom';
const Product = (props) => {
    const { imgUrl, name, price} = props.product;
    return (
        <div className="product">
             <Link to={`/product/${name}`}>
                <div className="product__image">
                    <img src={imgUrl} alt={name}/>
                </div>
            </Link>
            <div className="product__actions">
                <div className="product__action--cart">
                    <i className="fas fa-cart-plus active"></i>
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
                <Link to={`/product/${name}`}>
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