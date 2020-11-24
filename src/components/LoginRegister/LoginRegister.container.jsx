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
    mutation LOG_IN($loginInput: LoginInput!){
        login(loginInput: $loginInput){
            jwt
            user {
                name
                email
                phone
                address {
                    ward
                    district
                    province
                    city
                    zipCode
                    addressNo
                }
            }

        }
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
        login({ variables: { loginInput: {email, password} } }).then(res => {
            console.log("Login Success");
            const data = res.data.login;
            const user = {
                jwt: data.jwt,
                info: data.user
            }
            localStorage.setItem('currentUserTesting', JSON.stringify(user))
            setCurrentUser({ variables: { user }}).then(user => {
                console.log('set currentuser successfully');
            })
        })
        .catch(e => {
            console.log(e)
            console.log('login fail')
        })
    }
    if(loading) return <p>Loading..</p>
    const { currentUser } = data;
    return <LoginRegister setUser={handleSetUser} login={handleLogin} user={currentUser}/>

}

export default LoginRegisterContainer;