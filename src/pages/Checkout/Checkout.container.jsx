import React from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import Checkout from './Checkout.jsx';
import { GET_CURRENT_USER } from '../../graphql/resolvers'

const GET_CART_ITEMS = gql` 
    query GetCartItems {
        cartItems @client
        region @client
    }
`;
// const ADD_ITEM_TO_CART = gql`

//     mutation addItemToCart($type:)
// `;
const CHECK_OUT = gql`
    mutation CustomerCreateOrder($customerCreateOrderInput: CustomerCreateOrderInput!){
        customerCreateOrder(customerCreateOrderInput: $customerCreateOrderInput){
            _id
        }

    }
`;

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
    return <CheckoutContainer isLoggedIn={isLoggedIn} currentUser={currentUser} />

}

const CheckoutContainer = (props) => {
    const { data, loading, } = useQuery(GET_CART_ITEMS);
    const [clearData] = useMutation(CLEAR_CART);
    const [checkout] = useMutation(CHECK_OUT)
    //const { loading, error, data, client } = useQuery(GET_PRODUCTS);
    //const cartItems = useReactiveVar(cartItemsVar);
    // console.log(cartItems)
    if(loading) return <p>Loading...</p>
    const { cartItems, region } = data;
    const dataCheckout = {
        branch: "5fbcdd761cd9506c820a3687",
        saleRegion: "5faa75e53452561a3f6463d1",
        details: {product: "5faa75f83452561a3f64645e", quantity: 1},
        shippingAddress: {
          addressNo:"empty",
          ward:"empty",
          district: "empty",
          province:"empty",
          city:"empty",
          zipCode: "empty",
        },
        paymentMethod: 'cash'
      }
    const handleClearCart = (cb) => {
        console.log('click clear cart');
        clearData().then(()=>{
            console.log('clear success');
            cb()
        })
    }
    const handleCheckout = (data) => {
        const requestData = {
            ...dataCheckout,
            
        }
        console.log(requestData)
        checkout({variables: {customerCreateOrderInput: requestData}}).then(res => {
            console.log('Create order success');
            console.log(res)
        })
        .catch(e => {
            console.log('we have a problem');
            console.log(e)
        })
    }
    
    return <Checkout {...props} cartItems={cartItems} checkout={handleCheckout} clearCart={handleClearCart} />
}

export default WrappCheckLogin;