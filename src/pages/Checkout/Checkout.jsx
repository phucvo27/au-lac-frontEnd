import React from 'react';
import { withRouter } from 'react-router-dom'

class Checkout extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
            firstName: '',
            lastName: '',
            shippingAddress: {
                addressNo:"",
                ward:"",
                district: "",
                province:"",
                city:"",
                zipCode: "",
            },
            note: '',
            phone: '',
            email: '',
            isCod: true

        }
    }
    componentDidMount(){
        console.log(this.props);
        if(this.props.isLoggedIn) {
            // const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            const { name, address, email, phone } = this.props.currentUser.info;
            // const { name, address, email, phone } = currentUser.info;
            const { addressNo, ward, district, city } = address;
            const fullName = name.split(' ');
            console.log(email)
            let firstName = fullName[fullName.length - 1];
            let lastName = '';
            for(let i = 0; i < (fullName.length - 1); i++){
                lastName += `${fullName[i]} `;
            }

            this.setState((prevState)=>({
                firstName,
                lastName,
                shippingAddress: {
                    ...prevState.shippingAddress,
                    addressNo: addressNo ? addressNo : '',
                    ward: ward ? ward : '',
                    district: district ? district : '',
                    city: city ? city : ''
                },
                phone: phone ? phone : '',
                email
            }))
        }
    }
    handleChange = e => {
        const { name, value } = e.target;
        
        if(typeof this.state[name] === 'string'){
            this.setState(()=>({[name]: value}))
        }else {
            this.setState( prevState => {
                return {
                    shippingAddress: {
                        ...prevState.shippingAddress,
                        [name]: value
                    }
                }
            })
        }
    }
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
                            <span className="amount">{(cartItems[key].salePrice * cartItems[key].quantity)}đ</span>
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
                return accum = accum + (cartItems[current].salePrice * cartItems[current].quantity)
            }, 0)
        }
        return 0;
    }
    callback = ()=>{
        this.props.history.push('/')
    }
    // handleSelect = value => {

    // }
    handleSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state)
        const { firstName, lastName, shippingAddress, note } = this.state;
        // this.props.history.push('/')
        this.props.checkout({
            firstName,
            lastName,
            shippingAddress,
            note
        })
        //this.props.clearCart(this.callback)
    }
    render(){
        console.log(this.props.isLoggedIn);
        const { firstName, lastName, shippingAddress, note, email, phone } = this.state;
        const { addressNo, ward, district,city } = shippingAddress;
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="content pt-5 pb-10">
                        <div className="left__content">
                            <div className="checkbox-form">						
                                <h3>Thông Tin Đơn Hàng</h3>
                                
                                <div className="half__row">
                                    <div className="checkout-form-list">
                                        <label>First Name <span className="required">*</span></label>	
                                        <input onChange={this.handleChange} value={firstName} name="firstName" type="text" placeholder="" />
                                    </div>
                                    <div className="checkout-form-list">
                                        <label>Last Name <span className="required">*</span></label>	
                                        <input onChange={this.handleChange} value={lastName} name="lastName" type="text" placeholder="" />
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="checkout-form-list">
                                        <label>Địa chỉ <span className="required">*</span></label>
                                        <input onChange={this.handleChange} value={addressNo} name="addressNo" type="text" placeholder="Street address" />
                                    </div>
                                </div>
                                {/* <div className="row">
                                    <div className="checkout-form-list">									
                                        <input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                                    </div>
                                </div> */}
                                <div className="row">
                                    <div className="checkout-form-list">
                                        <label>Thành Phố <span className="required">*</span></label>
                                        <input onChange={this.handleChange} value={city} name="city" type="text" placeholder="Thành Phố" />
                                    </div>
                                </div>
                                <div className="half__row">
                                    <div className="checkout-form-list">
                                        <label>Quận/Huyện <span className="required">*</span></label>
                                        <input onChange={this.handleChange} value={district} name="district" type="text" placeholder="Quận/Huyện" />
                                    </div>
                                    <div className="checkout-form-list">
                                        <label>Phường/Xã <span className="required">*</span></label>
                                        <input onChange={this.handleChange} value={ward} name="ward" type="text" placeholder="Phường/Xã" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="checkout-form-list">
                                        <label>Email <span className="required">*</span></label>
                                        <input name="email" value={email} type="email" placeholder="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="checkout-form-list">
                                        <label>Phone  <span className="required">*</span></label>	
                                        <input name="phone" value={phone} onChange={this.handleChange} type="text" placeholder="Phone" />
                                    </div>
                                </div>
                                					
                                
                                <div className="different-address">
                                    <div className="order-notes">
                                        <div className="checkout-form-list">
                                            <label>Order Notes</label>
                                            <textarea onChange={this.handleChange} value={note} name="note" id="checkout-mess" cols="30" rows="10" placeholder="Notes about your order, e.g. special notes for delivery." ></textarea>
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
                                        <input 
                                            disabled={!this.props.isLoggedIn} 
                                            className="default-btn" 
                                            type="submit" 
                                            value={!this.props.isLoggedIn ? 'You must login first' : 'Place Order'} />
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


export default withRouter(Checkout);