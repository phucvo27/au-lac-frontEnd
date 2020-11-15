import { gql } from '@apollo/client';

import {
  addItemToCart,
  removeItemFromCart,
  updateItemOnCart,
  getCartTotal,
  getCartItemCount
} from './cart.utils';

export const typeDefs = gql`
  extend type Product {
    name: String!
    price: String!
    image: String!
    quantity: Int!
    id: String!
  }
  extend type DateTime {
    nanoseconds: Int!
    seconds: Int!
  }
  extend type User {
    name: String!
    email: String!
    token: String!
  }
  extend type Mutation {
    ToggleCartHidden: Boolean!
    AddItemToCart(item: Product!): Boolean!
    UpdateItemOnCart(item: Product!): Boolean!
    SetCurrentUser(user: User!): User!
    RemoveItemFromCart(item: Product!): [Item]!
    ClearItemFromCart(item: Item!): Boolean!
  }
`;

const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

const GET_ITEM_COUNT = gql`
  {
    itemCount @client
  }
`;

const GET_CART_TOTAL = gql`
  {
    cartTotal @client
  }
`;

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

export const GET_CURRENT_USER = gql`
  {
    currentUser @client
  }
`;

const updateCartItemsRelatedQueries = (cache, newCartItems) => {
  cache.writeQuery({
    query: GET_ITEM_COUNT,
    data: { itemCount: getCartItemCount(newCartItems) }
  });

  cache.writeQuery({
    query: GET_CART_TOTAL,
    data: { cartTotal: getCartTotal(newCartItems) }
  });

  cache.writeQuery({
    query: GET_CART_ITEMS,
    data: { cartItems: newCartItems }
  });
};

export const resolvers = {
  Mutation: {
    toggleCartHidden: (_root, _args, { cache }) => {
      const { cartHidden } = cache.readQuery({
        query: GET_CART_HIDDEN
      });

      cache.writeQuery({
        query: GET_CART_HIDDEN,
        data: { cartHidden: !cartHidden }
      });

      return !cartHidden;
    },

    AddItemToCart: (_root, { item }, { cache }) => {
      console.log(item)
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS
      });
      console.log(cartItems)
      const newCart = addItemToCart(cartItems, item);
      console.log(newCart)
      cache.writeQuery({
        query: GET_CART_ITEMS,
        data: {
          cartItems: newCart
        }
      })
      localStorage.setItem('cartItems', JSON.stringify(newCart))
      // const newCartItems = addItemToCart(cartItems, item);

      // updateCartItemsRelatedQueries(cache, newCartItems);

      // return newCartItems;
    },

    RemoveItemFromCart: (_root, { item }, { cache }) => {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS
      });
      console.log(cartItems)
      console.log('running remove item from cart')
      console.log(item)
      const newCart = removeItemFromCart(cartItems, item);
      console.log(newCart)
      cache.writeQuery({
        query: GET_CART_ITEMS,
        data: {
          cartItems: newCart
        }
      })
      localStorage.setItem('cartItems', JSON.stringify(newCart))

      //const newCartItems = removeItemFromCart(cartItems, item);

      //updateCartItemsRelatedQueries(cache, newCartItems);

      return item;
    },
    UpdateItemOnCart: (_root, { item }, {cache})=>{
      console.log("im in update item");
      console.log(item);
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS
      });
      const newCart = updateItemOnCart(cartItems, item);
      console.log(newCart);
      localStorage.setItem('cartItems', JSON.stringify(newCart))
      cache.writeQuery({
        query: GET_CART_ITEMS,
        data: {
          cartItems: newCart
        }
      })
    },
    ClearItemFromCart: (_root, args, { cache }) => {
      console.log('clear item on revolver')
      cache.writeQuery({
        query:GET_CART_ITEMS,
        data: {
          cartItems: {}
        }
      })
      
      return {};
    },

    SetCurrentUser: (_root, { user }, { cache }) => {
      console.log("im in SetCurrentUser resolvers");
      console.log(user)
      cache.writeQuery({
        query: GET_CURRENT_USER,
        data: { currentUser: user }
      });
      localStorage.setItem('currentUser', JSON.stringify(user))

      return user;
    }
  }
};