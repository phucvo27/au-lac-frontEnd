import React from 'react';
import { 
    gql,
    useQuery,
    useMutation
} from '@apollo/client';
import ProductDetail from './ProductDetail.component.jsx';
import { flowRight } from 'lodash';
import { graphql } from '@apollo/client/react/hoc';

const GET_PRODUCT = gql`
   query GetProduct($id: ID!){
     getProduct(id: $id){
        _id
        name
        description
        sku
        images
        salePrice
        salePriceInRegions {
          salePrice
          saleRegion {
            name
            _id
          }
        }
        category {
          name
          _id
        }
      }
     }
   
`;
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
    console.log(props)
    const {data, loading, error } = useQuery(GET_CART_ITEMS);
    const [addItem] = useMutation(ADD_ITEM_TO_CART);
    const [updateItem] = useMutation(UPDATE_ITEM_ON_CART);
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error...</p>

    console.log(data)
    const { cartItems } = data;
    // const id = props.match.params.id;
    if(props.data.getProduct){
      let currentProduct = props.data.getProduct
      const isInCart = cartItems[currentProduct._id] ? true : false;
      currentProduct = {...currentProduct, quantity: 1};
      console.log(currentProduct)
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
      // return <p>testing...</p>
      return <ProductDetail 
                product={isInCart ? cartItems[currentProduct._id] : currentProduct} 
                isInCart={isInCart} 
                add={handleAdd}
                update={handleUpdate}
                /> 
    }
    return <p>Loading...</p>
    
}

export default flowRight(graphql(GET_PRODUCT, {
  options: props => {
    console.log(props.match.params);
    return {
      variables: {id: props.match.params.id}
    }
  }
}))(ProductDetailContainer);