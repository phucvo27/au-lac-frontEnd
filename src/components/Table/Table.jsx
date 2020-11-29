import React from 'react';
import { Link } from 'react-router-dom';
import TableRow from './TableRow.jsx'
const Table = (props) => {
    const { cartItems } = props;
    const cart = Object.keys(cartItems);
    const renderTableContent = () =>{
        if(cart.length > 0 ){
            return cart.map(key => ( 
                <TableRow 
                    key={key} 
                    product={cartItems[key]} 
                    update={props.update} 
                    remove={props.remove} />
                // <tr key={key}>
                //     <td className="table-remove">
                //         <button onClick={()=> {props.remove(cartItems[key])}}>
                //             <i className="fa fa-trash"></i>
                //         </button>
                //     </td>
                //     <td className="table-image">
                //         <Link to={`/product/${key}`}>
                //             <img src={cartItems[key].image} alt={cartItems[key].name} />
                //         </Link>
                //     </td>
                //     <td className="table-p-name"><Link to={`/product/${key}`}>{cartItems[key].name}</Link></td>
                //     <td className="table-p-price"><p>{cartItems[key].price}đ</p></td>
                //     <td className="table-p-qty"><input value="1" onChange={()=>{}} name="cart-qty" type="number" /></td>
                //     <td className="table-total"><p>{(cartItems[key].price * cartItems[key].quantity)}đ</p></td>
                // </tr>
            ))
        }
    }
    const renderTotalPrice = () => {
        if(cart.length > 0){
            return cart.reduce((accum, current)=>{
                return accum = accum + (cartItems[current].salePrice * cartItems[current].quantity)
            }, 0)
        }
        return 0;
    }

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
                            {renderTableContent()}
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
                                <span className="c-total-price">{renderTotalPrice()}đ</span>
                            </div>
                            <div className="single-total-content d-flex justify-content-between">
                                <span>Shipping</span>
                                <span className="c-total-price"><span>Flat Rate:</span> 5000 đ</span>
                            </div>
                            <div className="single-total-content d-flex justify-content-between">
                                <span>Total</span>
                                <span className="c-total-price">{renderTotalPrice() + 5000}đ</span>
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