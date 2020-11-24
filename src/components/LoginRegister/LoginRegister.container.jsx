import React from 'react';
import { useMutation, useQuery, gql } from '@apollo/client';
import { GET_CURRENT_USER } from '../../graphql/resolvers.js';
import LoginRegister from './LoginRegister.component.jsx'
const SET_CURRENT_USER = gql`
    mutation SetCurrentUser($user: User!){
        SetCurrentUser(user: $user) @client
    }

`;

const LOG_IN = gql`
    mutation Login($email: String!, $password: String!){
        Login(email: $email, password: $password)
    }
`

// const GET_CURRENT_USER = gql`
//     query GetCurrentUser {
//         currentUser @client
//     }
// `;

const LoginRegisterContainer = () => {
    const {data, loading} = useQuery(GET_CURRENT_USER);
    const [setCurrentUser] = useMutation(SET_CURRENT_USER);
    const [login] = useMutation(LOG_IN);
    const handleSetUser = (user,cb) => {
        console.log(user);
        setCurrentUser({ variables: { user }}).then(user => {
            console.log('set currentuser successfully');
            cb()
        })
    }
    const handleLogin = (email, password) => {
        console.log(email, password);
        login(email, password)
    }
    if(loading) return <p>Loading..</p>
    const { currentUser } = data;
    return <LoginRegister setUser={handleSetUser} login={handleLogin} user={currentUser}/>

}

export default LoginRegisterContainer;