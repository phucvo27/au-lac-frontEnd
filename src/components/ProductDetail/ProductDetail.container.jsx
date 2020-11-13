import React from 'react';
import { 
    gql,
    useQuery,
    useMutation
} from '@apollo/client';
import fakeData from '../../data/fake-data.js';
import ProductDetail from './ProductDetail.component.jsx';

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

const ADD_ITEM_TO_CART = gql`
   mutation AddItemToCart($item: Product!){
    AddItemToCart(item: $item) @client
   }
`;

const UPDATE_ITEM_ON_CART = gql`
    mutation UpdateItemOnCart($item: Product!){
        UpdateItemOnCart(item: $item) @client
    }
`;
const ProductDetailContainer = (props) => {
    const {data, loading, error } = useQuery(GET_CART_ITEMS);
    const [addItem] = useMutation(ADD_ITEM_TO_CART);
    const [updateItem] = useMutation(UPDATE_ITEM_ON_CART);
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error...</p>

    const { cartItems } = data;
    const id = props.match.params.id;
    let currentProduct = fakeData.find(p => p.id === id);
    const isInCart = cartItems[currentProduct.id] ? true : false;
    currentProduct = {...currentProduct, quantity: 1};

    const handleAdd = item => {
        addItem({variables: {item}}).then(()=>{
          console.log('add item success')
        })
        .catch(e => {
          console.log('could not add item')
        })
    }

    const handleUpdate = item => {
      //console.log(item)
      updateItem({variables: {item}})
        .then(()=>{
          console.log('update success')
        })
        .catch(e => {
          console.log('could not update item')
        })
    }

    return <ProductDetail 
              product={isInCart ? cartItems[currentProduct.id] : currentProduct} 
              isInCart={isInCart} 
              add={handleAdd}
              update={handleUpdate}
              /> 
}

export default ProductDetailContainer;