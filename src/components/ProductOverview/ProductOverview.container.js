import React from 'react';
import { useQuery, gql } from '@apollo/client';
import ProductOverview from './ProductOverview.component'

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
                quantity
                appliedTax
                buyPriceExcTax
                buyPriceIncTax
                salePriceInRegions {
                    salePrice
                    saleRegion {
                    name
                
                    }
                }
            }
        }
    }
`;

const ProductOverviewContainer = (props) => {
    const { category } = props;
    //console.log(category)
    const { data, loading, error } = useQuery(LIST_PRODUCTS, {
        variables: {
            category: category._id, page: 1, perPage: 5
        }
    });
    if(loading) {
        return <p>Loading...</p>
    }
    if(error){
        return <p>We have an error...</p>
    }
    const products = data.listProducts.docs;
    console.log(products)
    return <ProductOverview category={category} products={products} />
}

export default ProductOverviewContainer;