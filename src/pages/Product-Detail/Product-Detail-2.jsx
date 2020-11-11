import React from "react";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer.component";
import Header from "../../components/Header/Header-2";

const Products = (props) => {

    return (
        <React.Fragment>
            <ProductsContainer
                params={props.match.params}
            />
        </React.Fragment>
    )
}

export default Products;
