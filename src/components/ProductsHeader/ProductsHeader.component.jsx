import React from "react";
import './ProductsHeader.styled.scss';

const ProductsHeader = () => {
    return (
        <React.Fragment>
            <div className="products__header__sub-title">
                <span>
                    <i className="fas fa-home"/>
                </span>
                <span className="highlight-text">
                    Products
                </span>
            </div>
            <div className="products__header__title">
                <h1>Products</h1>
            </div>
        </React.Fragment>
    )
}

export default ProductsHeader;
