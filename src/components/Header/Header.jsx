import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="header__top">
                <div className="container flex-sb">
                    <div className="left__content">
                        <p>Contact</p>
                    </div>
                    <div className="right__content">
                        <div className="auth">
                            <Link to="/">Login</Link>
                            <Link to="/register">Register</Link>
                        </div>
                        <div className="change__language">
                            <p>Choose Language</p>
                            <div className="dropdown">
                                <p>Vietnamese</p>
                                <p>English</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container header__center">
                <div className="header__center__cart">
                    <p>Cart: 0</p>
                </div>
                <div className="header__center__logo">
                    <img src="https://aulacshop.com/assets/img/logo.png" alt="au-lac-shop" />
                </div>
                <div className="header__center__searchbox">
                    <div className="social__box"></div>
                    <div className="form__box">
                        <input type="text" placeholder="Enter product name..." />
                        <button>Search</button>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Header;