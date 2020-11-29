import React from "react";
// import './ProductDetail.styled.scss';
// import {addCart} from "../../redux/cart/cart.action";

import productImg_1 from './../../assets/products/seafood-1.jpg';
import productImg_2 from './../../assets/products/seafood-2.jpg';
import productImg_3 from './../../assets/products/seafood-3.jpg';
import {Link, withRouter} from "react-router-dom";
import fakeData from '../../data/fake-data'
//import productImg_4 from './../../assets/products/seafood-4.jpg';

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
            images: [
                productImg_1, productImg_2,
                productImg_3
            ],
            productCart: props.productCart,
            updateQuantity: {
                isUpdate: false,
                newQuantity: 0
            }
        }
    }


    componentDidMount() {
        window.scrollTo(0,0);
        // const id = this.props.match.params.id;
        // const currentProduct = fakeData.find(p => p.id === id);
        // console.log(currentProduct)
        this.setState(()=>({product: this.props.product}))
    }

    increaseQuantity = ()=>{
        const { updateQuantity } = this.state;
        if(updateQuantity.isUpdate){
            this.setState((prevState)=>{
                return {
                    updateQuantity: {
                        isUpdate: true,
                        newQuantity: prevState.updateQuantity.newQuantity + 1
                    }
                }
            })
        }else {
            this.setState(()=>{
                return {
                    updateQuantity: {
                        isUpdate: true,
                        newQuantity: this.props.product.quantity + 1
                    }
                }
            })
        }
    }
    descreaseQuantity = ()=>{
        const { updateQuantity } = this.state;
        if(updateQuantity.newQuantity > 0 || !updateQuantity.isUpdate){
            if(updateQuantity.isUpdate){
                this.setState((prevState)=>{
                    return {
                        updateQuantity: {
                            isUpdate: true,
                            newQuantity: prevState.updateQuantity.newQuantity - 1
                        }
                    }
                })
            }else {
                this.setState(()=>{
                    return {
                        updateQuantity: {
                            isUpdate: true,
                            newQuantity: this.props.product.quantity - 1
                        }
                    }
                })
            }
        }
         
    }
    addProductCart = (product) => {
        console.log('add product')
        const { isUpdate, newQuantity } = this.state.updateQuantity
        if(this.props.isInCart){
            const newProduct = {
                ...product,
                quantity: newQuantity
            }
            this.props.update(newProduct)
        }else {
            let newProduct = {...product}
            if(isUpdate){
                newProduct.quantity = newQuantity
            }
            this.props.add(newProduct)
        }
        this.setState(()=>{
            return {
                updateQuantity: {
                    isUpdate: false
                }
            }
        })
        //this.props.dispatch(addCart(cart));
    }

    renderImageSlider = () => {
        const {images} = this.state;

        return images.map((img, idx) => {
           return (
               <div key={idx} className="img-slider--item">
                   <img src={img} alt={`Product Item ${idx + 1}`}/>
               </div>
           )
        });
    }

    renderProductDetailQuantity = () => {
        const {updateQuantity} = this.state;
        //let {cart} = this.props;
        // cart = []
        // productCart = []
        const { product } = this.props;
        let image = product.images.length > 0 ? product.images[0] : 'https://aulacshop.com/uploads/img/1595487543_CHA-BONG-GA--GOI.jpg'
        return (
            <div className="content__quantity--item">
                <div className="quantity__item__img">
                    <img src={image} alt={`Quantity 1`}/>
                </div>
                <div className="quantity__item__name">
                    <Link to="#">{product.name}</Link>
                </div>
                <div className="quantity__item__price">
                    <span>{product.salePrice}đ</span>
                </div>
                <div className="quantity__item__action">
                    <span
                        className="item__action__minus"
                        onClick={this.descreaseQuantity}
                    >
                        <i
                            className="fas fa-minus item__action__minus"
                        />
                    </span>
                    <span className="item__action__number">
                        {updateQuantity.isUpdate ? updateQuantity.newQuantity : product.quantity}
                    </span>
                    <span
                        className="item__action__plus"
                        onClick={this.increaseQuantity}
                    >
                        <i
                            className="fas fa-plus item__action__plus"
                        />
                    </span>
                </div>
            </div>
        )
    }

    actionItemQuantity = (e, product) => {
        const iconClass = e.target.className;
        let {cart} = this.props;
        let productItemArr = cart.filter(c => c.product.id === product.id);

        if(iconClass.includes("item__action__plus")) {
            if(productItemArr.length > 0) {
                cart = cart.map(c => {
                    if(c.product.id === product.id) {
                        c.quantity += 1;
                    }
                    return c;
                })
            }
            else {
                cart.push({
                    product: product,
                    quantity: 1
                })
            }
        }
        else if(iconClass.includes("item__action__minus")) {
            if(productItemArr.length > 0) {
                if(productItemArr[0].quantity > 0) {
                    cart = cart.map(c => {
                        if(c.product.id === productItemArr[0].product.id) {
                            c.quantity -= 1;
                        }
                        return c;
                    })
                }
                else {
                    cart = cart.filter(c => c !== productItemArr[0].product.id);
                }
            }
        }

        //this.props.dispatch(addCart(cart));
    }

    render() {
        const { updateQuantity} = this.state;
        // this.props.cart = []
        const { product } = this.props
        //return <p>testing hahaha...</p>
        let image = product.images.length > 0 ? product.images[0] : 'https://aulacshop.com/uploads/img/1595487543_CHA-BONG-GA--GOI.jpg'
        return (
            <div className="product-detail__container">
                <div className="product-detail__image">
                    <div className="product-detail__image--img">
                        {/* <img src={product.image} alt="Product Detail"/> */}
                        <img src={image} alt="Product Detail"/>
                    </div>
                    <div className="product-detail__image--img-slider">
                        {this.renderImageSlider()}
                    </div>
                </div>
                <div className="product-detail__content">
                    <div className="product-detail__content--detail">
                        <div className="product-detail__content__title">
                            <h2>{product.name}</h2>
                        </div>
                        <div className="product-detail__content__rating" style={{display: 'none'}}/>
                        <div className="product-detail__content__price">
                            <span>{product.salePrice}đ</span>
                        </div>
                        <div className="product-detail__content__description">
                            <p>
                                {/* {product.description} */}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolor, soluta officiis unde modi magnam hic sunt dolorum veritatis ut totam amet exercitationem. Voluptates veniam omnis fugit assumenda odio. Modi?
                            </p>
                        </div>
                    </div>
                    <div className="product-detail__content--quantity">
                        <div className="content--quantity--list-item">
                            {this.renderProductDetailQuantity()}
                        </div>
                        <div className="content--quantity--action">
                            <div className="content--quantity__add-cart">
                                <button disabled={!updateQuantity.isUpdate && this.props.isInCart} onClick={() => this.addProductCart(product)}>
                                    <i className="fas fa-shopping-bag"/>
                                    {this.props.isInCart ? 'UPDATE CART' : 'ADD TO CART'}
                                </button>
                            </div>
                            <div className="content--quantity__action-btn">
                                <span>
                                    <i className="fas fa-retweet"/>
                                </span>
                                <span>
                                    <i className="far fa-heart"/>
                                </span>
                            </div>
                        </div>
                        <div className="content--quantity--tag">
                            <div className="quantity__tag__category">
                                <p>
                                    Categories: <span>{product.category.name}</span>
                                </p>
                            </div>
                            
                        </div>
                        <div className="content--quantity--social">
                            <span className="social__facebook">
                                <i className="fab fa-facebook-f"/>
                            </span>
                            <span className="social__twitter">
                                <i className="fab fa-twitter"/>
                            </span>
                            <span className="social__linkedin">
                                <i className="fab fa-linkedin-in"/>
                            </span>
                            <span className="social__tumblr">
                                <i className="fab fa-tumblr"/>
                            </span>
                            <span className="social__google">
                                <i className="fab fa-google-plus-g"/>
                            </span>
                            <span className="social__pinterest">
                                <i className="fab fa-pinterest"/>
                            </span>
                            <span className="social__letter">
                                <i className="fas fa-envelope"/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default withRouter(ProductDetail)
