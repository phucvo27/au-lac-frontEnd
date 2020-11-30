import React from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import Header from './Header.jsx'
import { flowRight } from 'lodash';
import { graphql } from '@apollo/client/react/hoc';
const LIST_SALE_REGIONS = gql`
    query ListSaleRegions {
        listSaleRegions {
            _id
            name
            branches {
                _id
                name
                address {
                    addressNo
                    }
            }
        }
    }
`;
const GET_CART_ITEMS = gql` 
    query GetCartItems {
        cartItems @client
        region @client
    }
`;

const REMOVE_ITEM_FROM_CART = gql`
    mutation RemoveItemFromCart($item: Product!){
        RemoveItemFromCart(item: $item) @client
    }
`;
const CHOOSE_REGION = gql`
    mutation ChooseRegion($region: SaleRegion!){
        ChooseRegion(region: $region) @client
    }
`;
// const ADD_ITEM_TO_CART = gql`

//     mutation addItemToCart($type:)
// `;



const HeaderContainer = (props) => {
    console.log(props.data.listSaleRegions)
    const saleRegions = props.data.listSaleRegions;
    const { data, loading } = useQuery(GET_CART_ITEMS);
    const [removeItem] = useMutation(REMOVE_ITEM_FROM_CART)
    const [setRegion] = useMutation(CHOOSE_REGION);
    //const { loading, error, data, client } = useQuery(GET_PRODUCTS);
    //const cartItems = useReactiveVar(cartItemsVar);
    // console.log(cartItems)
    if(loading) return <p>Loading...</p>
    
    const { cartItems, region } = data;
    const handleRemove = (item) => {
        console.log('clicked remove')
        removeItem({variables: {item: item}}).then((data)=>{
            
            console.log('remove correctly');
            console.log(data)
        })
    }
    const handleChooseRegion = region => {
        console.log(region);
        setRegion({variables: {region}})
            .then(()=>{
                console.log('set region success')
            })
            .catch(e => {
                console.log('could not set region')
            })
    }
    console.log(cartItems)
    // console.log(client.cache)
    //const products = data.listProducts.docs ? data.listProducts.docs : [];
    return <Header 
            {...props} 
            saleRegions={saleRegions} 
            cartItems={cartItems} 
            region={region} 
            remove={handleRemove} 
            chooseRegion={handleChooseRegion}
            />
}

export default flowRight(graphql(LIST_SALE_REGIONS))(HeaderContainer)