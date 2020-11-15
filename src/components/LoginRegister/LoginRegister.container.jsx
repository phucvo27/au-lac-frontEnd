import React from 'react';
import { useMutation, useQuery, gql } from '@apollo/client';
import { GET_CURRENT_USER } from '../../graphql/resolvers.js';
import LoginRegister from './LoginRegister.component.jsx'
const SET_CURRENT_USER = gql`
    mutation SetCurrentUser($user: User!){
        SetCurrentUser(user: $user) @client
    }

`;

// const GET_CURRENT_USER = gql`
//     query GetCurrentUser {
//         currentUser @client
//     }
// `;

const LoginRegisterContainer = () => {
    const {data, loading} = useQuery(GET_CURRENT_USER);
    const [setCurrentUser] = useMutation(SET_CURRENT_USER);

    const handleSetUser = (user,cb) => {
        console.log(user);
        setCurrentUser({ variables: { user }}).then(user => {
            console.log('set currentuser successfully');
            cb()
        })
    }
    if(loading) return <p>Loading..</p>
    const { currentUser } = data;
    return <LoginRegister setUser={handleSetUser} user={currentUser}/>

}

export default LoginRegisterContainer;