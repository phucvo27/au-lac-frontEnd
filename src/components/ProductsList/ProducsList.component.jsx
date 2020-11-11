import React from "react";

import Product from "../Product/Product";
import fakeData from '../../data/fake-data'

class ProductsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSortingValue: 'Default Sorting',
            products: fakeData,
            productDetail: {}
        }
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
            <React.Fragment>
                {this.renderProductsFilter()}
                {this.renderProductsBody()}
            </React.Fragment>
        )
    }
}

export default ProductsList;
