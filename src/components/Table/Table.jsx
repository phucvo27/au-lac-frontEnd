import React from 'react';
import { Link } from 'react-router-dom';

const Table = () => {
    return (
        <div className="cart-area table-area" style={{backgroundColor: '#fff'}}>
            <div className="container">
                <div className="table-responsive">
                    <table className="table product-table text-center">
                        <thead>
                            <tr>
                                <th className="table-remove">remove</th>
                                <th className="table-image">image</th>
                                <th className="table-p-name">product</th>
                                <th className="table-p-price">price</th>
                                <th className="table-p-qty">quantity</th>
                                <th className="table-total">total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="table-remove"><button><i className="fa fa-trash"></i></button></td>
                                <td className="table-image"><a href="product-details.html"><img src="assets/img/product/3.jpg" alt="" /></a></td>
                                <td className="table-p-name"><a href="product-details.html">Habitasse dictumst</a></td>
                                <td className="table-p-price"><p>$65.00</p></td>
                                <td className="table-p-qty"><input value="1" name="cart-qty" type="number" /></td>
                                <td className="table-total"><p>$65.00</p></td>
                            </tr>
                            <tr>
                                <td className="table-remove"><button><i className="fa fa-trash"></i></button></td>
                                <td className="table-image"><a href="product-details.html"><img src="assets/img/product/4.jpg" alt="" /></a></td>
                                <td className="table-p-name"><a href="product-details.html">Kaoreet lobortis</a></td>
                                <td className="table-p-price"><p>$95.00</p></td>
                                <td className="table-p-qty"><input value="1" name="cart-qty" type="number" /></td>
                                <td className="table-total"><p>$95.00</p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="table-bottom-wrapper">
                    <div className="table-coupon d-flex fix justify-content-start">
                        <input type="text" placeholder="Coupon code" />
                        <button type="submit">Apply coupon</button>
                    </div>
                    <div className="table-update d-flex justify-content-end">
                        <button type="button" disabled>Update cart</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="table-total-wrapper d-flex" style={{display: "flex", justifyContent: "flex-end", width: '100%'}}>
                    <div className="table-total-content">
                        <h2>Cart totals</h2>
                        <div className="table-total-amount">
                            <div className="single-total-content d-flex justify-content-between">
                                <span>Subtotal</span>
                                <span className="c-total-price">$160.00</span>
                            </div>
                            <div className="single-total-content d-flex justify-content-between">
                                <span>Shipping</span>
                                <span className="c-total-price"><span>Flat Rate:</span> $5.00</span>
                            </div>
                            <div className="single-total-content d-flex justify-content-end">
                                <a href="#">Calculate shipping</a>
                            </div>
                            <div className="single-total-content d-flex justify-content-between">
                                <span>Total</span>
                                <span className="c-total-price">$165.00</span>
                            </div>
                            <Link to="/checkout">Proceed to checkout</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table;