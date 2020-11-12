import React from 'react';
//import InputGroup from '../../components/InputGroup/InputGroup.jsx';

class Checkout extends React.Component {

    renderOrderBody = () => {
        const { cartItems } = this.props;
        const cart = cartItems ? Object.keys(cartItems) : [];
        if(cart.length > 0){
            return cart.map(key => {
                return (
                    <tr key={key} className="cart_item">
                        <td className="product-name">
                            {cartItems[key].name} <strong className="product-quantity"> × {cartItems[key].quantity}</strong>
                        </td>
                        <td className="product-total">
                            <span className="amount">{(cartItems[key].price * cartItems[key].quantity)}đ</span>
                        </td>
                    </tr>
                )
            })
        }
    }
    renderTotalPrice = () =>{
        const { cartItems } = this.props;
        const cart = cartItems ? Object.keys(cartItems) : [];
        if(cart.length > 0){
            return cart.reduce((accum, current)=>{
                return accum = accum + (cartItems[current].price * cartItems[current].quantity)
            }, 0)
        }
        return 0;
    }
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
                                            <option value="volvo">TPHCM</option>
                                            <option value="saab">Hà Nội</option>
                                            <option value="mercedes">Đà Nẵng</option>
                                            <option value="audi">Cần Thơ</option>
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
                                            {this.renderOrderBody()}
                                            
                                        </tbody>
                                        <tfoot>
                                            <tr className="cart-subtotal">
                                                <th>Cart Subtotal</th>
                                                <td><span className="amount">{this.renderTotalPrice()}đ</span></td>
                                            </tr>
                                            <tr className="shipping">
                                                <th>Shipping</th>
                                                <td>
                                                    <ul>
                                                        <li>
                                                            <label>
                                                                Flat Rate: <span className="amount">5000</span>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr className="order-total">
                                                <th>Order Total</th>
                                                <td>
                                                    <strong><span className="amount">{this.renderTotalPrice() + 5000}đ</span></strong>
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