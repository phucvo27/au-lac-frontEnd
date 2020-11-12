import React from 'react';
//import InputGroup from '../../components/InputGroup/InputGroup.jsx';

class Checkout extends React.Component {

    render(){
        return (
            <div className="container">
                <form action="#">
                    <div className="content pt-5 pb-10">
                        <div className="left__content">
                            <div className="checkbox-form">						
                                <h3>Thông Tin Đơn Hàng</h3>
                                <div className="row">
                                    <div className="country-select">
                                        <label>Country <span className="required">*</span></label>
                                        <select>
                                            <option value="volvo">Bangladesh</option>
                                            <option value="saab">Algeria</option>
                                            <option value="mercedes">Afghanistan</option>
                                            <option value="audi">Ghana</option>
                                            <option value="audi2">Albania</option>
                                            <option value="audi3">Bahrain</option>
                                            <option value="audi4">Colombia</option>
                                            <option value="audi5">Dominican Republic</option>
                                        </select> 										
                                    </div>
                                </div>
                                <div className="half__row">
                                    <div className="checkout-form-list">
                                        <label>First Name <span className="required">*</span></label>	
                                        <input type="text" placeholder="" />
                                    </div>
                                    <div className="checkout-form-list">
                                        <label>Last Name <span className="required">*</span></label>	
                                        <input type="text" placeholder="" />
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="checkout-form-list">
                                        <label>Địa chỉ <span className="required">*</span></label>
                                        <input type="text" placeholder="Street address" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="checkout-form-list">									
                                        <input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="checkout-form-list">
                                        <label>Thành Phố <span className="required">*</span></label>
                                        <input type="text" placeholder="Thành Phố" />
                                    </div>
                                </div>
                                <div className="half__row">
                                    <div className="checkout-form-list">
                                        <label>Quận/Huyện <span className="required">*</span></label>
                                        <input type="text" placeholder="Quận/Huyện" />
                                    </div>
                                    <div className="checkout-form-list">
                                        <label>Phường/Xã <span className="required">*</span></label>
                                        <input type="text" placeholder="Phường/Xã" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="checkout-form-list">
                                        <label>Email <span className="required">*</span></label>
                                        <input type="email" placeholder="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="checkout-form-list">
                                        <label>Phone  <span className="required">*</span></label>	
                                        <input type="text" placeholder="Phone" />
                                    </div>
                                </div>
                                					
                                
                                <div className="different-address">
                                    <div className="order-notes">
                                        <div className="checkout-form-list">
                                            <label>Order Notes</label>
                                            <textarea id="checkout-mess" cols="30" rows="10" placeholder="Notes about your order, e.g. special notes for delivery." ></textarea>
                                        </div>									
                                    </div>
                                </div>													
                            </div>
                        </div>	
                        <div className="right__content">
                            <div className="your-order">
                                <h3>Đơn Hàng</h3>
                                <div className="your-order-table table-responsive">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="product-name">Product</th>
                                                <th className="product-total">Total</th>
                                            </tr>							
                                        </thead>
                                        <tbody>
                                            <tr className="cart_item">
                                                <td className="product-name">
                                                    Vestibulum suscipit <strong className="product-quantity"> × 1</strong>
                                                </td>
                                                <td className="product-total">
                                                    <span className="amount">$165.00</span>
                                                </td>
                                            </tr>
                                            <tr className="cart_item">
                                                <td className="product-name">
                                                    Vestibulum dictum magna	<strong className="product-quantity"> × 1</strong>
                                                </td>
                                                <td className="product-total">
                                                    <span className="amount">$50.00</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr className="cart-subtotal">
                                                <th>Cart Subtotal</th>
                                                <td><span className="amount">$215.00</span></td>
                                            </tr>
                                            <tr className="shipping">
                                                <th>Shipping</th>
                                                <td>
                                                    <ul>
                                                        <li>
                                                            <label>
                                                                Flat Rate: <span className="amount">$7.00</span>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr className="order-total">
                                                <th>Order Total</th>
                                                <td>
                                                    <strong><span className="amount">$215.00</span></strong>
                                                </td>
                                            </tr>								
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="payment-method">
                                    
                                    <div className="order-button-payment">
                                        <input className="default-btn" type="submit" value="Place order" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


export default Checkout;