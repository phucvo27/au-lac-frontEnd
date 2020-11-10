import React from 'react';
import Product from '../../components/Product/Product.jsx'
const Home = () => {

    const fakeData = [
        {
            imgUrl: 'https://aulacshop.com/uploads/img/1595648257_1595411793_BAO%20TU%20CHAY.jpg',
            name: 'BAO TỬ CHAY 130G (VEGAN)',
            price: '33.000'
        },
        {
            imgUrl: 'https://aulacshop.com/uploads/img/1595487543_CHA-BONG-GA--GOI.jpg',
            name: 'CHÀ BÔNG GÀ 100G',
            price: '35.000'
        },
        {
            imgUrl: 'https://aulacshop.com/uploads/img/1599119267_Vegan%20Ca%20cao%20s%E1%BB%AFa%2040g.jpg',
            name: 'VEGAN CA CAO SỮA 40G',
            price: '10.000'
        },
        {
            imgUrl: 'https://aulacshop.com/uploads/img/1595475531_G%E1%BB%AANG%20CHANH.jpg',
            name: 'BIA BAVARIA GỪNG CHANH 330ML',
            price: '22.000'
        },
        {
            imgUrl: 'https://aulacshop.com/uploads/img/1595471436_BO%20HAM%20DAU.jpg',
            name: 'BÒ HẦM ĐẬU 160G (VEGAN)',
            price: '22.000'
        },
        {
            imgUrl: 'https://aulacshop.com/uploads/img/1595405593_BONG-CA-BA-SA-1KG.jpg',
            name: 'BÓNG CÁ BASA KG (NGẮN)',
            price: '173.000'
        },
    ]
    const renderProducts = () => {
        return fakeData.map((product, idx) => <Product product={product} key={idx} />)
    }
    return (
        <section className="container pt-10">
            <h1>Our Products</h1>
            <div className="products__list">
                {renderProducts()}
            </div>
        </section>
    )
};

export default Home;