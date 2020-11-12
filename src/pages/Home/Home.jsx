import React from 'react';
import Product from '../../components/Product/Product.container.jsx';
import HomeSlider from '../../components/HomeSlider/HomeSlider.jsx';
import fakeData from '../../data/fake-data';

const Home = () => {

    const renderProducts = () => {
        return fakeData.map((product, idx) => <Product product={product} key={idx} />)
    }
    return (
        <section className="container">
            <HomeSlider />
            <h1>Our Products</h1>
            <div className="products__list">
                {renderProducts()}
            </div>
        </section>
    )
};

export default Home;