import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { cartItemsVar } from '../../graphql/cache'
import Header from './Header.jsx'

const GET_CART_ITEMS = gql` 
    query GetCartItems {
        cartItems @client
    }
`;
// const ADD_ITEM_TO_CART = gql`

//     mutation addItemToCart($type:)
// `;



const HeaderContainer = (props) => {
    const { data, loading, error } = useQuery(GET_CART_ITEMS);
    //const { loading, error, data, client } = useQuery(GET_PRODUCTS);
    //const cartItems = useReactiveVar(cartItemsVar);
    // console.log(cartItems)
    if(loading) return <p>Loading...</p>
    
    const { cartItems } = data;
    console.log(cartItems)
    // console.log(client.cache)
    //const products = data.listProducts.docs ? data.listProducts.docs : [];
    return <Header {...props} cartItems={cartItems}/>
}

export default HeaderContainer;