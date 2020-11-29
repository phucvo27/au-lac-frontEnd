import React from 'react';
import { Link } from 'react-router-dom';
import { transformProductObject } from '../../graphql/utils.js';
const Product = (props) => {
    
   
    //const idRegion = props.region ? props.region._id : ''
    let productCustom = transformProductObject(props.product, props.region);
    console.log("================= im in Product ===================")
    console.log(`Old Prices: ${props.product.salePrice}, new prices: ${productCustom.salePrice}`)
    const { _id, images, name, salePrice} = productCustom;

    const addToCart = ()=>{
        props.addItem(productCustom)
    }
    let image = images.length > 0 ? images[0] : 'https://aulacshop.com/uploads/img/1595487543_CHA-BONG-GA--GOI.jpg'
    return (
        <div className="product">
             <Link to={`/product/${_id}`}>
                <div className="product__image">
                    <img src={image} alt={name}/>
                </div>
            </Link>
            <div className="product__actions">
                <div onClick={addToCart} className="product__action--cart">
                    <i className={props.isInCart ? `fas fa-cart-plus active`: 'fas fa-cart-plus'}></i>
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
                <Link to={`/product/${_id}`}>
                    <h5>{name}</h5>
                </Link>
            </div>
            <div className="product__price text-center">
                <p>{salePrice}</p>
            </div>
        </div>
    )
}


export default Product;