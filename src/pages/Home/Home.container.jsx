import React from 'react';
import { gql, useQuery,  } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';
import Home from './Home'
import { flowRight } from 'lodash';
const LIST_CATEGORIES = gql`
    query ListCategories {
        listCategories {
            _id
            name
        }
    }
`;

// const GET_PRODUCTS = gql`
//     query GetProducts {
//         listProducts(category: "5faa75eb3452561a3f6463d3", page:1, perPage: 10){
//             docs {
//                 name
//                 salePrice
//             }
//         }
//     }
// `
const GET_CART_ITEMS = gql` 
    query GetCartItems {
        cartItems @client
    }
`;
// const ADD_ITEM_TO_CART = gql`

//     mutation addItemToCart($type:)
// `;



const HomeContainer = (props) => {
    console.log(props.data.listCategories)
    const categories = props.data.listCategories;
    const { loading, error } = useQuery(GET_CART_ITEMS);
    //const { loading, error, data, client } = useQuery(GET_PRODUCTS);
    // const cartItems = useReactiveVar(cartItemsVar);
    // console.log(cartItems)
    if (loading) return <p>Loading...</p>;
    if (error) return `Error! ${error.message}`;
    //console.log(data)
    // console.log(client.cache)
    //const products = data.listProducts.docs ? data.listProducts.docs : [];
    return <Home products={[]} categories={categories}/>
}

export default flowRight(graphql(LIST_CATEGORIES))(HomeContainer);