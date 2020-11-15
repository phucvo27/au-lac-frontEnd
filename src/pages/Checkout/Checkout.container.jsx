import React from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import Checkout from './Checkout.jsx';
import { GET_CURRENT_USER } from '../../graphql/resolvers'

const GET_CART_ITEMS = gql` 
    query GetCartItems {
        cartItems @client
    }
`;
// const ADD_ITEM_TO_CART = gql`

//     mutation addItemToCart($type:)
// `;
const CLEAR_CART = gql`
    mutation CleaCart {
        ClearItemFromCart @client
    }
`
const WrappCheckLogin = () => {
    const { data, loading} = useQuery(GET_CURRENT_USER);
    if(loading) return <p>Loading..</p>

    const { currentUser } = data;
    const isLoggedIn = Object.keys(currentUser).length > 0;
    return <CheckoutContainer isLoggedIn={isLoggedIn} />

}

const CheckoutContainer = (props) => {
    const { data, loading, } = useQuery(GET_CART_ITEMS);
    const [clearData] = useMutation(CLEAR_CART);
    //const { loading, error, data, client } = useQuery(GET_PRODUCTS);
    //const cartItems = useReactiveVar(cartItemsVar);
    // console.log(cartItems)
    if(loading) return <p>Loading...</p>
    
    const handleClearCart = (cb) => {
        console.log('click clear cart');
        clearData().then(()=>{
            console.log('clear success');
            cb()
        })
    }
    const { cartItems } = data;
    return <Checkout {...props} cartItems={cartItems} clearCart={handleClearCart} />
}

export default WrappCheckLogin;