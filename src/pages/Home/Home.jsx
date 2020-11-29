import React from 'react';
import Product from '../../components/Product/Product.container.jsx';
import HomeSlider from '../../components/HomeSlider/HomeSlider.jsx';
import fakeData from '../../data/fake-data';
import ProductOverviewContainer from '../../components/ProductOverview/ProductOverview.container.js';

const Home = (props) => {

    const renderSections = () => {
        //console.log(props.categories);
        const { categories } = props;
        if(categories){
            // Async
            return categories.map(category => <ProductOverviewContainer key={category._id} category={category} />)
        }
        
        //return fakeData.map((product, idx) => <Product product={product} key={idx} />)
    }
    return (
        <section className="container">
            <HomeSlider />
            <h1>Our Products</h1>
            {renderSections()}
            {/* <div className="products__list">
                {renderSections()}
            </div> */}
        </section>
    )
};

export default Home;