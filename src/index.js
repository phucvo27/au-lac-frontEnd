import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Setup GraphQL

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
//import { cartItemsVar } from './graphql/cache';
import { GET_CART_ITEMS } from './graphql/Cart'
import { typeDefs, resolvers, GET_CURRENT_USER } from './graphql/resolvers'
const link = createHttpLink({
    uri: "http://54.254.210.233:1345/graphql"
})
const cache = new InMemoryCache();
const client = new ApolloClient({
    link,
    cache,
    typeDefs,
    resolvers
})
let oldCart = localStorage.getItem('cartItems');
let currentUser = localStorage.getItem('currentUser');
oldCart = oldCart ? JSON.parse(oldCart) : {}
currentUser = currentUser ? JSON.parse(currentUser) : {}
client.writeQuery({
    query: GET_CART_ITEMS,
    data: {
        cartItems: oldCart
    }
})
client.writeQuery({
  query: GET_CURRENT_USER,
  data: {
    currentUser: currentUser
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
