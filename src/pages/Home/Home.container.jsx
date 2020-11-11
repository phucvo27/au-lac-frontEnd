import React from 'react';
import { gql, useQuery, useReactiveVar } from '@apollo/client';
import { cartItemsVar } from '../../graphql/cache'
import Home from './Home'

const GET_PRODUCTS = gql`
    query GetProducts {
        listProducts(category: "5faa75eb3452561a3f6463d3", page:1, perPage: 10){
            docs {
                name
                salePrice
            }
        }
    }
`
const GET_CART_ITEMS = gql` 
    query GetCartItems {
        cartItems @client
    }
`;
// const ADD_ITEM_TO_CART = gql`

//     mutation addItemToCart($type:)
// `;



const HomeContainer = () => {
    const { data, loading, error } = useQuery(GET_CART_ITEMS);
    //const { loading, error, data, client } = useQuery(GET_PRODUCTS);
    // const cartItems = useReactiveVar(cartItemsVar);
    // console.log(cartItems)
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    console.log(data)
    // console.log(client.cache)
    //const products = data.listProducts.docs ? data.listProducts.docs : [];
    return <Home products={[]}/>
}

export default HomeContainer;