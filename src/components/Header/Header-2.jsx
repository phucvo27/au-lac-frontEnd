import React from 'react';
//import {ReactComponent as Logo} from '../../assets/footer/logo.svg'
import {Link} from "react-router-dom";


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: []
        }
    }

    componentDidMount() {
        window.addEventListener('click', (e) => this.showActionDropDownPhone(e));
    }

    // Mode 0: get quantity
    // Mode 1: get price
    getTotalQuantityAndPrice = (mode) => {
        //const cart = this.props.cart;
        // const cart = window.localStorage.getItem('cart')
        //     ? JSON.parse(window.localStorage.getItem('cart'))
        //     : this.props.cart;

        return mode === 0
            ? [].reduce((total, product) => total + product.quantity, 0)
            : [].reduce((total, c) => {
                return total + c.product.price * c.quantity;
            }, 0).toFixed(2);
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
        let cart = window.localStorage.getItem('cart')
            ? JSON.parse(window.localStorage.getItem('cart')) : this.props.cart;

        return [].length > 0
            ? cart.map((cartProduct, idx) => {
                return (
                    <div key={idx} className="cart__checkout__info">
                        <div className="cart__product--name">
                            <h4>{cartProduct.product.name}</h4>
                        </div>
                        <div className="cart__product--quantity">
                            <span>
                                <i className="fas fa-times"/>&nbsp;{cartProduct.quantity}
                            </span>
                        </div>
                        <div className="cart__product--price">
                            <span>
                                ${(cartProduct.product.price * cartProduct.quantity).toFixed(2)}
                            </span>
                        </div>
                    </div>
                );
            })
            : <div className="cart__checkout__info"/>
    }

    render() {
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
                                <input type="text" placeholder="Search among 100.000 products..."/>
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
                                                <input type="text" name="username" placeholder="Username"/>
                                            </div>
                                            <div className="login__form--password">
                                                <label className="form-label-style" htmlFor="password">Password <span
                                                    className="required">*</span></label>
                                                <input type="password" name="password" placeholder="Password"/>
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
                                        <p>{[].length}</p>
                                    </div>
                                </div>
                                <div className="header__user__action--cart nav-action-style">
                                    <Link to="#">
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
                                        <p>{this.getTotalQuantityAndPrice(0)}</p>
                                    </div>
                                    <span>${this.getTotalQuantityAndPrice(1)}</span>
                                </div>
                            </div>
                            <div className="header__user__action--phone">
                                <i className="fas fa-caret-down"/>
                                <div className="action__phone__dropdown">
                                    <div className="header__user__action--login nav-action-style">
                                        <i className="far fa-user icon-style"/>
                                        <span id="show-modal" onClick={(e) => this.showModalLogin(e)}>
                                            Login <span className="highlight-text">or</span> Register
                                        </span>
                                    </div>
                                    <div className="header__user__action--wishlist nav-action-style">
                                        <i className="far fa-heart icon-style"/>
                                        <div className="notification">
                                            {/* <p>{this.props.wishList.length}</p> */}
                                            <p>{[].length}</p>
                                        </div>
                                    </div>
                                    <div className="header__user__action--cart nav-action-style">
                                        <Link to="/checkout">
                                            <i className="fas fa-cart-plus icon-style"/>
                                        </Link>
                                        <div className="notification">
                                            <p>{this.getTotalQuantityAndPrice(0)}</p>
                                        </div>
                                        <span>${this.getTotalQuantityAndPrice(1)}</span>
                                    </div>
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
                                    <Link to="/">Trang Chủ</Link>
                                </li>
                                <li>
                                    <Link to="/products">Sản Phẩm</Link>
                                </li>
                                <li>
                                    <Link to="#">Tin Tức</Link>
                                </li>
                                <li>
                                    <Link to="/blogs">Thư Viện</Link>
                                </li>
                                <li>
                                    <Link to="#">Công Thức</Link>
                                </li>
                                <li>
                                    <Link to="/about-us">Hệ Thống Phản Hồi</Link>
                                </li>
                                <li>
                                    <Link to="contact">Về Chúng Tôi</Link>
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
