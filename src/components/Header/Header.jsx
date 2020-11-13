import React from 'react';
//import {ReactComponent as Logo} from '../../assets/footer/logo.svg'
import {Link, NavLink} from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: {}
        }
    }

    componentDidMount() {
        //const cartItems = useReactiveVar(cartItemsVar);
        console.log(this.props.cartItems)
        //const { cartItems } = cartItemsVar()
        //console.log(cartItems)
        //this.setState(()=> ({cart: cartItems}))
    }

    // Mode 0: get quantity
    // Mode 1: get price
    getTotalQuantityAndPrice = () => {
        const { cartItems } = this.props;
        const cart = Object.keys(cartItems);
        if(cart.length > 0){
            return cart.reduce((accum, current)=>{
                return accum = accum + (cartItems[current].price * cartItems[current].quantity)
            }, 0)
        }
        return 0;
    }

    showActionDropDownPhone = (e) => {
        const dropdownActionPhone = document.querySelector(".action__phone__dropdown");
        const dropdownActionPhoneDisplay = document.querySelector(".action__phone__dropdown--display");

        if(e.target.className.includes("fa-caret-down") && !dropdownActionPhoneDisplay) {
            dropdownActionPhone.classList.add("action__phone__dropdown--display");
        }
        else if(dropdownActionPhone) {
            dropdownActionPhone.classList.remove("action__phone__dropdown--display");
        }
    }

    showModalLogin = (e) => {
        const loginModal = document.querySelector(".header__login-modal__container");

        if(e.target.id === "show-modal" && loginModal) {
            loginModal.classList.add("header__login-modal__container--display");
        }
    }

    showNavigationLeftMobile = (e) => {
        const navigationLeftEle = document.querySelector(".header__nav__left__container");
        const iconClassName = e.target.className;
        const bodyDoc = document.querySelector("body");
        const screenWidth = document.documentElement.clientWidth;

        if(iconClassName.includes("nav__category__click") && navigationLeftEle
            && screenWidth <= 768
        ) {
            navigationLeftEle.classList.add("header__nav__left__container--display");
            bodyDoc.classList.remove("translate__body--original");
            bodyDoc.classList.add("translate__body");
        }
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
                                <i className="fas fa-times"/>&nbsp;{1}
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

    render() {
        const numbersOnCart = Object.keys(this.props.cartItems).length
        console.log("Number Of item on Cart", numbersOnCart)
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
                            <span>Store location</span>
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
                                <div className="header__user__action--login nav-action-style">
                                    <i className="far fa-user icon-style"/>
                                    <p>
                                        Login <span className="highlight-text">or</span> Register
                                    </p>
                                    <div className="header__user__action--login-form">
                                        <div className="login__form--header">
                                            <h1>Sign In</h1>
                                            <Link to="#">Create an Account</Link>
                                        </div>
                                        <form action="#" autoComplete="off">
                                            <div className="login__form--username">
                                                <label className="form-label-style" htmlFor="username">Username or
                                                    email <span
                                                        className="required">*</span></label>
                                                <input className="input__radius" type="text" name="username" placeholder="Username"/>
                                            </div>
                                            <div className="login__form--password">
                                                <label className="form-label-style" htmlFor="password">Password <span
                                                    className="required">*</span></label>
                                                <input className="input__radius" type="password" name="password" placeholder="Password"/>
                                            </div>
                                            <div className="login__form--action">
                                                <button type="submit">LOGIN</button>
                                                <span>
                                        <Link to="#">Lost your password?</Link>
                                    </span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="header__user__action--wishlist nav-action-style">
                                    <i className="far fa-heart icon-style"/>
                                    <div className="notification">
                                        {/* <p>{this.props.wishList.length}</p> */}
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
                                                <span>${this.getTotalQuantityAndPrice(1)}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="notification">
                                        <p>{numbersOnCart}</p>
                                    </div>
                                    <span>${this.getTotalQuantityAndPrice(1)}</span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="header__navigation">
                        <div className="nav__category nav__category__click" onClick={(e) => this.showNavigationLeftMobile(e)}>
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
