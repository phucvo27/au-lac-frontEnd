import React from "react";
import './ProductsContainer.styled.scss';
import ProductsHeader from "../ProductsHeader/ProductsHeader.component";
import ProductsCategory from "../ProductsCategory/ProductsCategory.component";
import ProductsFilter from "../ProductsFilter/ProductsFilter.component";
//import ProductsOnSale from "../ProductsOnSale/ProductsOnSale.component";

import productImg_1 from './../../assets/products/seafood-1.jpg';
import productImg_2 from './../../assets/products/seafood-2.jpg';
import productImg_3 from './../../assets/products/seafood-3.jpg';
import productImg_4 from './../../assets/products/seafood-4.jpg';
import productImg_5 from './../../assets/products/product-1.jpg';
import productImg_6 from './../../assets/products/product-3.jpg';
import productImg_7 from './../../assets/products/product-6.jpg';
import productImg_8 from './../../assets/products/organic-4.jpg';
import productImg_9 from './../../assets/products/product-2.jpg';
import productImg_10 from './../../assets/products/product-7.jpg';
import productImg_11 from './../../assets/products/bakery_2.jpg';
import productImg_12 from './../../assets/products/wine-beer_3.jpg';
import Product from "../Product/Product";
import ProductDetailHeader from "../ProductDetailHeader/ProductDetailHeader.component";
import ProductDetail from "../ProductDetail/ProductDetail.component";
import ProductDetailDescription from "../ProductDetailDescription/ProductDetailDescription.component";
import ProductDetailSuggestion from "../ProductDetailSuggestion/ProductDetailSuggestion.component";
import ProductDetailRelated from "../ProductDetailRelated/ProductDetailRelated.component";


class ProductsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSortingValue: 'Default Sorting',
            products: [
                {
                    id: 1,
                    name: 'Absolute organic butter unsalted',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.',
                    image: productImg_1,
                    price: 150.52, //150.52 – $187.14
                    category: 'Breakfast & Cereal'
                },
                {
                    id: 2,
                    name: 'Appleton Estate 12 Year Old Rare Blend',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.',
                    image: productImg_2,
                    price: 34.99, //34.99 – $89.00
                    category: 'Fast Food'
                },
                {
                    id: 3,
                    name: 'Baobah Pure White Grape Juice',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.',
                    image: productImg_3,
                    price: 157.23, //157.23 – $178.10
                    category: 'Fruits & Veges'
                },
                {
                    id: 4,
                    name: 'Cherry tomatoes, fresh, 500g',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.',
                    image: productImg_4,
                    price: 164.71,
                    category: "Fruits & Veges"
                },
                {
                    id: 5,
                    name: 'Flour Soy Protein Food Gluten',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.',
                    image: productImg_5,
                    price: 178.1,
                    category: "Fruits Juice"
                },
                {
                    id: 6,
                    name: 'Healthy Food Products For Cooking & Drinking',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.',
                    image: productImg_6,
                    price: 179.03,
                    category: "Fast Food"
                },
                {
                    id: 7,
                    name: 'Jaffa Candy Floss Grapes',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.',
                    image: productImg_7,
                    price: 157.23,
                    category: "Uncategorized"
                },
                {
                    id: 8,
                    name: 'Lundberg Organic Rice, White Basmati',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.',
                    image: productImg_8,
                    price: 127.51,
                    category: "Fruits & Veges"
                },
                {
                    id: 9,
                    name: 'Meat, fish & poultry',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.',
                    image: productImg_9,
                    price: 124.90,
                    category: "Uncategorized"
                },
                {
                    id: 10,
                    name: 'Morrisons Seedless Red Grapes',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.',
                    image: productImg_10,
                    price: 143.26,
                    category: "Fruits & Veges"
                },
                {
                    id: 11,
                    name: 'Organic Cacao Nibs Shaker',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.',
                    image: productImg_11,
                    price: 169.18,
                    category: "Vegetables"
                },
                {
                    id: 12,
                    name: 'Red & White Seedless Grapes 500g',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.',
                    image: productImg_12,
                    price: 179.98,
                    category: "Fruits & Veges"
                }
            ],
            productDetail: {}
        }
    }

    componentDidMount() {
        if(this.props.params.productId) {
            const product = this.state.products.filter(p => p.id === parseInt(this.props.params.productId));

            this.setState(() => {
                return {
                    productDetail: product[0]
                }
            })
        }
        window.addEventListener('click', (e) => this.sortingListClick(e));
    }

    sortingListClick = e => {
        const selectSortingList = document.querySelector(".filter__sorting--list-item");
        const selectSortingListDisplay = document.querySelector(".filter__sorting--list-item--display");
        const upDropDownIcon = document.querySelector(".fa-chevron-up");
        const downDropDownIcon = document.querySelector(".fa-chevron-down");

        if(e.target.className === 'filter__sorting--value') {
            if(selectSortingList) {
                selectSortingList.classList.remove("filter__sorting--list-item");
                selectSortingList.classList.add("filter__sorting--list-item--display");
                downDropDownIcon.classList.remove("hide-icon");
                upDropDownIcon.classList.add("hide-icon");
            }
        }

        if(selectSortingListDisplay) {
            selectSortingListDisplay.classList.remove("filter__sorting--list-item--display");
            selectSortingListDisplay.classList.add("filter__sorting--list-item");
            downDropDownIcon.classList.add("hide-icon");
            upDropDownIcon.classList.remove("hide-icon");
        }
    }

    sortingItemClick = (e) => {
        const selectedValue = e.target.textContent;
        const selectedItemId = e.target.id;
        let {products} = this.state;

        if(selectedItemId === 'sorting__item--low-high') {
            for(let i = 0; i < products.length; i++) {
                for(let j = i + 1; j < products.length; j++) {
                    if(products[i].price > products[j].price) {
                        const higherPriceProduct = products[i];

                        products[i] = products[j];
                        products[j] = higherPriceProduct;
                    }
                }
            }
        }
        else if(selectedItemId === 'sorting__item--high-low') {
            for(let i = 0; i < products.length; i++) {
                for(let j = i + 1; j < products.length; j++) {
                    if(products[i].price < products[j].price) {
                        const lowerPriceProduct = products[i];

                        products[i] = products[j];
                        products[j] = lowerPriceProduct;
                    }
                }
            }
        }

        this.setState(() => {
            return {
                selectedSortingValue: selectedValue,
                products: products
            }
        })
    }

    filterShowIconClick = (e) => {
        const filterIconClicked = document.querySelector(".products__filter__show--icon--click");
        const currentIcon = e.target;
        const iconId = e.target.id;
        const productGridArr = document.querySelectorAll(".product");

        if(filterIconClicked) {
            filterIconClicked.classList.remove('products__filter__show--icon--click');
        }

        currentIcon.classList.add("products__filter__show--icon--click");

        switch (iconId) {
            case 'list__view':
            case 'list__view--icon':
                const productGridView = document.querySelector(".products__body__grid");

                if(productGridView) {
                    productGridView.classList.remove("products__body__grid");
                    productGridView.classList.add("products__body__list");
                }

                if(productGridArr.length > 0) {
                    productGridArr
                        .forEach(product => product.classList.add('products__body__list'))
                }

                break;
            case 'grid__view':
            case 'grid__view--icon':
            default:
                const productListView = document.querySelector(".products__body__list");

                if(productListView) {
                    productListView.classList.remove("products__body__list");
                    productListView.classList.add("products__body__grid");
                }

                if(productGridArr.length > 0) {
                    productGridArr
                        .forEach(product => product.classList.remove('products__body__list'))
                }
                break;
        }
    }

    renderProductList = () => {
        const {products} = this.state;

        return products.map((p, idx) => {
            return <Product key={idx} product={p}/>
        })
    }
    renderBodyContent = () => {
        const productId = this.props.params.productId
            ? this.props.params.productId : -1;
        const product = productId > -1
            ? this.state.products.filter(p => p.id === parseInt(productId))
            : {};
        const productCart = this.state.products.filter(p => p.id < 5);
        return (
            <React.Fragment>
                <ProductDetail
                    product={this.state.products[0]}
                    productCart={productCart}
                />
                <ProductDetailDescription/>
                <ProductDetailSuggestion/>
            </React.Fragment>
        )
        // return parseInt(productId) > -1
        //     ? <React.Fragment>
        //         <ProductDetail
        //             product={product[0]}
        //             productCart={productCart}
        //         />
        //         <ProductDetailDescription/>
        //         <ProductDetailSuggestion/>
        //         <ProductDetailRelated/>
        //     </React.Fragment>
        //     : <React.Fragment>
        //         {this.renderProductsFilter()}
        //         {this.renderProductsBody()}
        //     </React.Fragment>
    }

    renderProductsFilter = () => {
        return (
            <div className="products__body__filter">
                <div className="products__filter__sorting">
                    <div
                        className="products__sorting__wrapper"
                    >
                        <div className="filter__sorting--value">{this.state.selectedSortingValue}</div>
                        <div className="filter__sorting--icon">
                            <i className="fas fa-chevron-up"/>
                            <i className="fas fa-chevron-down hide-icon"/>
                        </div>
                        <div className="filter__sorting--list-item">
                            <div
                                className="filter__sorting--item"
                                onClick={(e) => this.sortingItemClick(e)}
                            >
                                Sort by average rating
                            </div>
                            <div
                                className="filter__sorting--item"
                                onClick={(e) => this.sortingItemClick(e)}
                            >
                                Sort by latest
                            </div>
                            <div
                                className="filter__sorting--item"
                                onClick={(e) => this.sortingItemClick(e)}
                            >
                                Sort by popularity
                            </div>
                            <div
                                className="filter__sorting--item"
                                id="sorting__item--low-high"
                                onClick={(e) => this.sortingItemClick(e)}
                            >
                                Sort by price: low to high
                            </div>
                            <div
                                className="filter__sorting--item"
                                id="sorting__item--high-low"
                                onClick={(e) => this.sortingItemClick(e)}
                            >
                                Sort by price: high to low
                            </div>
                        </div>
                    </div>
                </div>
                <div className="products__filter__show">
                    <span className="products__filter__show--text">
                        Showing 1–12 of {this.state.products.length} results
                    </span>
                    <span
                        className="products__filter__show--icon"
                        id="grid__view"
                        onClick={e => this.filterShowIconClick(e)}
                    >
                        <i className="fas fa-th" id="grid__view--icon"/>
                    </span>
                    <span
                        className="products__filter__show--icon list__view"
                        id="list__view"
                        onClick={e => this.filterShowIconClick(e)}
                    >
                        <i className="fas fa-bars" id="list__view--icon"/>
                    </span>
                </div>
            </div>
        )
    }

    renderProductsBody = () => {
        return (
            <div className="products__body__grid">
                {this.renderProductList()}
            </div>
        )
    }

    render() {
        return (
            <div className="products__container">
                <div className="products__header">
                    {this.props.params.productId ? <ProductDetailHeader product={this.state.productDetail}/> : <ProductsHeader/>}
                </div>
                <div className="products__body">
                    <div className="products__body__left">
                        <ProductsCategory/>
                        <ProductsFilter/>
                        {/* <ProductsOnSale/> */}
                    </div>
                    <div className="products__body__right">
                        {this.renderBodyContent()}
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductsContainer;
