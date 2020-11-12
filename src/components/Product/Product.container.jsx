import React from 'react';
import { useMutation, gql } from '@apollo/client';
import Product from './Product.jsx'

const ADD_ITEM_TO_CART = gql`
    mutation AddItemToCart($item: Product!){
        addItemToCart(item: $item) @client
    }

`;
const GET_CART_ITEMS = gql` 
    query GetCartItems {
        cartItems @client
    }
`;
const ProductContainer = (props) => {
    const [addItem, { client }] = useMutation(ADD_ITEM_TO_CART);

    const handleAdd = (item) => {
        console.log('clicked')
        addItem({variables: {item}}).then(()=>{
            console.log(item)
            console.log('add success')
            const currentCart = client.readQuery({
                query: GET_CART_ITEMS
            })
            console.log(currentCart)
            client.writeQuery({
                query: GET_CART_ITEMS,
                data: {
                    cartItems: {[item.id]:item}
                }
            })
        })
    }

    return <Product {...props} addItem={handleAdd} />
}

export default ProductContainer