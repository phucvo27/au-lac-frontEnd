import React from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import Table from './Table.jsx';

const GET_CART_ITEMS = gql` 
    query GetCartItems {
        cartItems @client
    }
`;
const REMOVE_ITEM_FROM_CART = gql`
    mutation RemoveItemFromCart($item: Product!){
        RemoveItemFromCart(item: $item) @client
    }
`;
// const ADD_ITEM_TO_CART = gql`

//     mutation addItemToCart($type:)
// `;



const HeaderContainer = (props) => {
    const { data, loading } = useQuery(GET_CART_ITEMS);
    const [removeItem] = useMutation(REMOVE_ITEM_FROM_CART)
    //const { loading, error, data, client } = useQuery(GET_PRODUCTS);
    //const cartItems = useReactiveVar(cartItemsVar);
    // console.log(cartItems)
    if(loading) return <p>Loading...</p>
    
    const { cartItems } = data;
    const handleRemove = (item) => {
        console.log('clicked remove')
        removeItem({variables: {item: item}}).then((data)=>{
            
            console.log('remove correctly');
            console.log(data)
        })
    }
    console.log(cartItems)
    return <Table {...props} cartItems={cartItems} remove={handleRemove}/>
}

export default HeaderContainer;