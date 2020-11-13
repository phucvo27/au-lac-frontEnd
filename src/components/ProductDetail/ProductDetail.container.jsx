import React from 'react';
import { 
    gql,
    useQuery
} from '@apollo/client';
import fakeData from '../../data/fake-data.js';
import ProductDetail from './ProductDetail.component.jsx';

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

const ProductDetailContainer = (props) => {
    const {data, loading, error } = useQuery(GET_CART_ITEMS);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error...</p>

    const { cartItems } = data;
    const id = props.match.params.id;
    let currentProduct = fakeData.find(p => p.id === id);
    const isInCart = cartItems[currentProduct.id] ? true : false;
    currentProduct = {...currentProduct, quantity: 1};



    return <ProductDetail product={isInCart ? cartItems[currentProduct.id] : currentProduct} isInCart={isInCart} /> 
}

export default ProductDetailContainer;