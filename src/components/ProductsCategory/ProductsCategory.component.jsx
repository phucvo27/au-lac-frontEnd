import React from "react";
import './ProductsCategory.styled.scss';
import {Link} from "react-router-dom";

const ProductsCategory = () => {
    const categoryData = [
        'Bread & Pastries' ,'Breakfast & Cereal','Dried Fruits',
        'Fast Food','Fresh Meat','Fruits & Veges','Fruits Juice',
        'Milk & Cream','Uncategorized','Vegetables  '
    ];
    const renderCategoryItem = () => {
        return categoryData.map((category, idx) => {
            return (
                <li key={idx} className="products__category__item">
                    <Link to="#">
                        {category}
                    </Link>
                </li>
            )
        })
    }

    return (
        <div className="products__category__container">
            <div className="products__category__header">
                <h2>PRODUCTS CATEGORIES</h2>
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
