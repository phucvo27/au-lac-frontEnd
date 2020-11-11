import React from "react";
import ProductsHeader from '../../components/ProductsHeader/ProductsHeader.component.jsx'
import ProductsCategory from '../../components/ProductsCategory/ProductsCategory.component.jsx'
import ProductsList from '../../components/ProductsList/ProducsList.component.jsx'
const Products = (props) => {

    return (
        <div className="products__container">
            <div className="products__header">
                <ProductsHeader />
            </div>
            <div className="products__body">
                <div className="products__body__left">
                    <ProductsCategory/>
                    {/* <ProductsOnSale/> */}
                </div>
                <div className="products__body__right">
                    <ProductsList />
                </div>
            </div>
        </div>
    )
}

export default Products;
