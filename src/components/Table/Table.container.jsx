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
const UPDATE_ITEM_ON_CART = gql`
    mutation UpdateItemOnCart($item: Product!){
        UpdateItemOnCart(item: $item) @client
    }
`;
// const ADD_ITEM_TO_CART = gql`

//     mutation addItemToCart($type:)
// `;



const HeaderContainer = (props) => {
    const { data, loading } = useQuery(GET_CART_ITEMS);
    const [removeItem] = useMutation(REMOVE_ITEM_FROM_CART);
    const [updateItem] = useMutation(UPDATE_ITEM_ON_CART)
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
        }).catch(e => {
            console.log('could not remove item from cart')
        })
    }
    const handleUpdate = item => {
        console.log(item)
        updateItem({ variables: {item}}).then(()=>{
            console.log('update success')
        }).catch(e => {
            console.log('could not update item')
        })
    }
    console.log(cartItems)
    return <Table {...props} cartItems={cartItems} update={handleUpdate} remove={handleRemove}/>
}

export default HeaderContainer;