import React from "react";
import {Link} from "react-router-dom";

const ProductsCategory = (props) => {
    const renderCategoryItem = () => {
        return props.categories.map((category, idx) => {
            return (
                <li key={idx} className="products__category__item">
                    <Link to={`/products/${category._id}`}>
                        {category.name}
                    </Link>
                </li>
            )
        })
    }

    return (
        <div className="products__category__container">
            <div className="products__category__header">
                <h2>Danh Mục Sản Phẩm</h2>
            </div>
            <div className="products__category__body">
                <ul className="products__category__list">
                    {renderCategoryItem()}
                </ul>
            </div>
        </div>
    )
}

export default ProductsCategory;
