import React from 'react';
import { useMutation, useQuery, gql } from '@apollo/client';
import Product from './Product.jsx'
import { addItemToCart } from '../../graphql/cart.utils'
const ADD_ITEM_TO_CART = gql`
    mutation AddItemToCart($item: Product!){
        addItemToCart(item: $item) @client
    }

`;
const GET_CART_ITEMS = gql` 
    query GetCartItems {
        cartItems @client
        region @client
    }
`;
const ProductContainer = (props) => {
    const [addItem, { client }] = useMutation(ADD_ITEM_TO_CART);
    const { data, loading, error } = useQuery(GET_CART_ITEMS);
    if(loading) return <p>loading...</p>
    if(error) return <p>we have an error</p>

    const { cartItems, region } = data;
    if(cartItems && region){
        const isInCart = cartItems[props.product._id] ? true : false;
        console.log(isInCart)
        const handleAdd = (item) => {
            console.log('clicked')
            addItem({variables: {item}}).then(()=>{
                
                const {cartItems} = client.readQuery({
                    query: GET_CART_ITEMS
                })
                const newCart = addItemToCart(cartItems, item)
                console.log(newCart)
                localStorage.setItem('cartItems', JSON.stringify(newCart))
                client.writeQuery({
                    query: GET_CART_ITEMS,
                    data: {
                        cartItems: newCart
                    }
                })
            })
        }

        return <Product {...props} region={region} addItem={handleAdd} isInCart={isInCart} />
    }
    return <p>Loading</p>
}

export default ProductContainer