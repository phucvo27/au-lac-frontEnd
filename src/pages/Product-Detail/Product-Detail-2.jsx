import React from "react";
import ProductsHeader from '../../components/ProductsHeader/ProductsHeader.component.jsx'
import ProductsCategory from '../../components/ProductsCategory/ProductsCategory.component.jsx'
import ProductDetail from '../../components/ProductDetail/ProductDetail.container.jsx'
import ProductDetailDescription from '../../components/ProductDetailDescription/ProductDetailDescription.component.jsx'
const ProductDetails = (props) => {
    // const product = {
    //     id: 1,
    //     name: 'Absolute organic butter unsalted',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.',
    //     image: 'https://aulacshop.com/uploads/img/1595648257_1595411793_BAO%20TU%20CHAY.jpg',
    //     price: 150.52, //150.52 – $187.14
    //     category: 'Breakfast & Cereal'
    // }
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
                    <ProductDetail {...props} />
                    <ProductDetailDescription />
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;
