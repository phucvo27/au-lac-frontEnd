import React from 'react';
import { useQuery, gql } from '@apollo/client';
import ProductList from './ProductList.component'

const LIST_PRODUCTS = gql`
    query ListProducts($category: ID!, $page: Int!, $perPage: Int!) {
        listProducts(category: $category, page: $page, perPage: $perPage){
            docs {
                _id
                name
                description
                sku
                salePrice
                images
                appliedTax
                buyPriceExcTax
                buyPriceIncTax
                salePriceInRegions {
                    salePrice
                    saleRegion {
                        name
                        _id
                    }
                }
                category {
                    _id
                    name
                }
            }
        }
    }
`;

const ProductListContainer = props => {
    const { categoryID } = props;
    const { data, loading, error } = useQuery(LIST_PRODUCTS, {
        variables: {
            category: categoryID,
            page: 1,
            perPage: 20
        }
    })
    if(loading) {
        return <p>Loading...</p>
    }
    if(error) {
        return <p>We have an Error</p>
    }

    const { docs } = data.listProducts;
    console.log(docs)
    return <ProductList products={docs} />
}

export default ProductListContainer;