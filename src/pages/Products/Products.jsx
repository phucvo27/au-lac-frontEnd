import React from "react";
import ProductsHeader from '../../components/ProductsHeader/ProductsHeader.component.jsx'
import ProductsCategory from '../../components/ProductsCategory/ProductCategory.container.js'
import ProductsList from '../../components/ProductsList/ProductList.container.js'
const Products = (props) => {
    console.log(props.match.params.cateId)
    const categoryID = props.match.params.cateId;
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
                    <ProductsList categoryID={categoryID} />
                </div>
            </div>
        </div>
    )
}

export default Products;
