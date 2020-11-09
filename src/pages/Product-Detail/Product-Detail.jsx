import React from 'react';

class ProductDetail extends React.Component {


    render(){
        return (
            <section className="container pt-10">
                <div className="product__details">
                    <div className="product__details__image">
                        <img src="https://aulacshop.com/uploads/img/1595405593_BONG-CA-BA-SA-1KG.jpg" alt="bong ca" />
                    </div>
                    <div className="product__details__informations">
                        <div className="product__name">
                            <h2>BÓNG CÁ BASA KG (NGẮN)</h2>
                        </div>
                        <div className="product__price">
                            <p>
                                <span className="current">33.000</span>
                                <span className="old__price">35.000</span>
                            </p>
                        </div>
                        <div className="product__description">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.
                            </p>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia perferendis atque recusandae sed eligendi alias voluptatem iure ullam, saepe vero, incidunt ipsum non voluptates velit. Eum amet numquam reiciendis! Vitae?
                            </p>
                        </div>
                        <h5>Quantity: </h5>
                        <div className="product__details__actions">
                            
                            <div className="product__details__actions--quantity">
                                <span>-</span>
                                <input type="number" value={1}/>
                                <span>+</span>
                            </div>
                            <div className="product__details__actions--cart">
                                <div className="product__action--cart--icon">
                                    <i className="fas fa-cart-plus"></i>
                                </div>
                                <p>Add To Cart</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ProductDetail;