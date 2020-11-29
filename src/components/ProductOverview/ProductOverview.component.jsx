import React from 'react';
import Product from '../Product/Product.container.jsx';


const ProductOverview = ({ category, products }) => {
    const { name, _id } = category;

    const renderProducts = () =>{
        return products.map(product => <Product product={product} key={product._id} />)
    }
    return (
        <React.Fragment>
            <div>
                <h1>{name}</h1>
                <div className="products__list">
                    {renderProducts()}
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default ProductOverview