import React from "react";
import {Link} from "react-router-dom";

const ProductsCategory = () => {
    const categoryData = [
        'Giải Khát' ,'Hàng Lạnh','Hàng Lon',
        'Hàng Khô','Tiệt Trùng','Ăn Liền','Gia Vị',
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
