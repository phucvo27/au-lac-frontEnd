import React from 'react';
//import {ReactComponent as Logo} from '../../assets/footer/logo.svg'
import {Link, NavLink} from "react-router-dom";
import LoginRegister from '../LoginRegister/LoginRegister.container.jsx';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: {}
        }
    }

    getTotalQuantityAndPrice = () => {
        const { cartItems } = this.props;
        const cart = Object.keys(cartItems);
        if(cart.length > 0){
            return cart.reduce((accum, current)=>{
                return accum = accum + (cartItems[current].salePrice * cartItems[current].quantity)
            }, 0)
        }
        return 0;
    }

    renderProductCheckout = () => {
        const { cartItems } = this.props;
        let cart = Object.keys(cartItems)

        return cart.length > 0
            ? cart.map( key => {
                return (
                    <div key={key} className="cart__checkout__info">
                        <div className="cart__product--name">
                            <h4>{cartItems[key].name}</h4>
                        </div>
                        <div onClick={()=>{this.props.remove(cartItems[key])}} className="cart__product--quantity">
                            <span>
                                <i className="fas fa-times"/>&nbsp;{cartItems[key].quantity}
                            </span>
                        </div>
                        <div className="cart__product--price">
                            <span>
                                ${cartItems[key].price}
                            </span>
                        </div>
                    </div>
                );
            })
            : <div className="cart__checkout__info"/>
    }
    renderSaleRegions = ()=>{
        const { saleRegions } = this.props;
        if(saleRegions){
            return saleRegions.map(region => <p onClick={()=>{this.handleChooseRegion(region)}} key={region._id}>{region.name}</p>)
        }
    }
    handleChooseRegion = region => {
        console.log(region)
        this.props.chooseRegion(region);
    }

    render() {
        const numbersOnCart = Object.keys(this.props.cartItems).length;
        console.log(this.props.region)
        return (
            <React.Fragment>
                <header className="header">
                    <div className="header__offer">
                        <div className="header__offer--text">
                            <p>
                                New Offers This Weekend only to
                                <span className="highlight-text">Get 50%</span> Flate
                            </p>
                        </div>
                        <div className="header__offer--location">
                            <i className="fas fa-map-marker-alt"/>
                            <span>Store location: {this.props.region.name}</span>
                            <div className="location__dropdown">
                                {this.renderSaleRegions()}
                            </div>
                        </div>
                    </div>
                    <div className="header__user">
                        <div className="header__user__logo">
                            {/* <Logo className="logo"/> */}
                            <img src="https://aulacshop.com/assets/img/logo.png" alt="logo" />
                        </div>
                        <div className="header__user__search">
                            <form action="#">
                                <input className="input__radius" type="text" placeholder="Search among 100.000 products..."/>
                                <button className="btn-search">
                                    <i className="fas fa-search"/>
                                </button>
                            </form>
                        </div>
                        <div className="header__user__action">
                            <div className="header__user__action--desktop">
                                <LoginRegister />
                                
                                <div className="header__user__action--wishlist nav-action-style">
                                    <i className="far fa-heart icon-style"/>
                                    <div className="notification">
                                        <p>{0}</p>
                                    </div>
                                </div>
                                <div className="header__user__action--cart nav-action-style">
                                    <Link to="/orders">
                                        <i className="fas fa-cart-plus icon-style"/>
                                    </Link>
                                    <div className="cart__checkout__container">
                                        <div className="cart__checkout__header">
                                            <h1>Cart</h1>
                                        </div>
                                        {this.renderProductCheckout()}
                                        <div className="cart__product__total">
                                            <div className="cart__product__total--label">
                                                <span>Total</span>
                                            </div>
                                            <div className="cart__product__total--price">
                                                <span>${this.getTotalQuantityAndPrice()}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="notification">
                                        <p>{numbersOnCart}</p>
                                    </div>
                                    <span>${this.getTotalQuantityAndPrice()}</span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="header__navigation">
                        <div className="nav__category nav__category__click">
                            <i className="fas fa-bars nav__category__click"/>
                            <p className="nav__category__click">
                                Shop By Categories
                            </p>
                            <div className="nav__category--list">
                                <ul>
                                    <li className="nav__category--item">
                                        <Link to="#">Giải Khát</Link>
                                    </li>
                                    <li className="nav__category--item">
                                        <Link to="#">Hàng Lạnh</Link>
                                    </li>
                                    <li className="nav__category--item">
                                        <Link to="#">Hàng Lon</Link>
                                    </li>
                                    <li className="nav__category--item">
                                        <Link to="#">Hàng Khô</Link>
                                    </li>
                                    <li className="nav__category--item">
                                        <Link to="#">Tiệt Trùng</Link>
                                    </li>
                                    <li className="nav__category--item">
                                        <Link to="#">Ăn Liền</Link>

                                    </li>
                                    <li className="nav__category--item">
                                        <Link to="#">Gia Vị</Link>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="nav__navigation">
                            <ul>
                                <li>
                                    <NavLink exact to="/" activeClassName="active__nav">Trang Chủ</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/products" activeClassName="active__nav">Sản Phẩm</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/news" activeClassName="active__nav">Tin Tức</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/blogs" activeClassName="active__nav">Thư Viện</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/recipes" activeClassName="active__nav">Công Thức</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about-us" activeClassName="active__nav">Hệ Thống Phản Hồi</NavLink>
                                </li>
                                <li>
                                    <NavLink to="contact" activeClassName="active__nav">Về Chúng Tôi</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="nav__contact">
                            <i className="fas fa-headphones"/>
                            <p>
                                (+048)-1800 33 689
                            </p>
                        </div>
                        <div className="nav__slide__menu">
                            <i id="slide__menu__left" className="fas fa-bars"/>
                        </div>
                    </div>
                </header>
            </React.Fragment>
        )
    }
}


export default Header;
