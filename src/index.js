import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Setup GraphQL

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
//import { cartItemsVar } from './graphql/cache';
import { GET_CART_ITEMS } from './graphql/Cart'
import { typeDefs, resolvers, GET_CURRENT_USER, GET_REGION } from './graphql/resolvers'
const link = createHttpLink({
    uri: "https://aulac-api.purplese.com/graphql"
})
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const currentUser = localStorage.getItem('currentUser');
  let token = undefined;
  if(currentUser){
      token = JSON.parse(currentUser).jwt;
      console.log(token)
  }
  // return the headers to the context so httpLink can read them
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYjBjMTQ1MTVjMzEwMWM3MGY0ODYxOCIsImlzQ3VzdG9tZXIiOnRydWUsImlhdCI6MTYwNjE5MDcyMywiZXhwIjoxNjA4NzgyNzIzfQ.XDseGA8QOdzpyxJ-snN0hLNeIFD8LMWWvZaXjAMqBGk"
  return {
    headers: {
      ...headers,
      Authorization: token ? `${token}` : "",
    }
  }
});
const cache = new InMemoryCache();
const client = new ApolloClient({
    link: authLink.concat(link),
    cache,
    typeDefs,
    resolvers
})
let oldCart = localStorage.getItem('cartItems');
let currentUser = localStorage.getItem('currentUser');
let oldRegion = localStorage.getItem('region')
oldCart = oldCart ? JSON.parse(oldCart) : {}
currentUser = currentUser ? JSON.parse(currentUser) : {}
oldRegion = oldRegion ? JSON.parse(oldRegion): null
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
});
client.writeQuery({
  query: GET_REGION,
  data: {
    region: oldRegion
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
