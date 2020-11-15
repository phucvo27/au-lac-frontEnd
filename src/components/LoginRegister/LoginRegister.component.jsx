import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

const BASE_URL = 'http://54.254.210.233:1345'
class LoginRegister extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isSignInForm: true,
            email: 'testaulac@gmail.com',
            password: 'Abc12345',
            firstName: '',
            lastName: '',
            isProcessing: false,
            
        }
    }
    callback = () => {
        console.log('running callback function')
    }
    handleLogin = async () => {
        const { email, password} = this.state;
        if(email && password){
            try {
                const response = await axios.post(`${BASE_URL}/auth/login`, {email, password});
                console.log(response);
                if(response.status === 200){
                    console.log('login success');
                    const {jwt, user} = response.data.data;
                    const customLocalData = {
                        token: jwt,
                        name: user.name,
                        email: user.email,
                    }
                    this.props.setUser(customLocalData,this.callback)
                }
            }catch (e) {
                console.log('Something went wrong, Could not Login at this time')
            }
        }else {

        }
    }
    handleLogOut = ()=>{
        this.props.setUser({},this.callback)
    }
    switchMode = () =>{
        this.setState(prevState => ({
            isSignInForm: !prevState.isSignInForm,
            email: '',
            password: '',
            firstName: '',
            lastName:''
        }))
    }
    handleChange = (e) =>{
        const {name, value } = e.target;
        console.log(name, value)
        this.setState(()=>{
            return {
                [name]: value
            }
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        console.log('Get Submit')
        const { isSignInForm } = this.state;
        if(isSignInForm){
            this.handleLogin();
        }else {
            this.handleRegister()
        }
    }
    handleRegister = async () => {
        const { firstName, lastName, email, password } = this.state;
        if(firstName && lastName && email && password) {
            try {
                const response = await axios.post(
                    `${BASE_URL}/auth/register`, 
                    {firstName, lastName, email, password}
                    );
                console.log(response);
                if(response.status === 200){
                    console.log('login success');
                    const {jwt, user} = response.data.data;
                    const customLocalData = {
                        token: jwt,
                        name: user.name,
                        email: user.email,
                    }
                    this.props.setUser(customLocalData,this.callback)
                }else if(response.status === 403){
                    console.log('Email has been taken')
                }
            }catch (e) {
                console.log('Something went wrong, Could not Login at this time')
            }
        }else {

        }
    }
    render(){
        const { isSignInForm, email, password, lastName, firstName } = this.state;
        const { user } = this.props
        let isLoggedIn = Object.keys(this.props.user).length > 0
        return (
            <div className="header__user__action--login nav-action-style">
                <i className="far fa-user icon-style"/>
                {
                    user.name 
                        ? <div>
                                <p>{user.name}</p>
                            </div>
                        : <p>
                            Login <span className="highlight-text">or</span> Register
                            </p>
                }
                
                <div className="header__user__action--login-form">
                    {
                        isLoggedIn 
                        ? 
                        <div className="login__form--header">
                            <h1>{user.name}</h1>
                            <p onClick={this.handleLogOut}> Log out</p>
                        </div>
                        :
                        (
                            <div className="login__form--header">
                            {
                                isSignInForm ? <h1>Sign In</h1> : <h1>Register</h1>
                            }
                            <p onClick={this.switchMode}> { isSignInForm? 'Create an Account' : 'Sign In'}</p>
                            </div>
                        )
                    }
                    {
                        !isLoggedIn &&
                    
                        <form onSubmit={this.handleSubmit} autoComplete="off">
                        <div className="login__form--username">
                            <label className="form-label-style" htmlFor="email">
                                Email <span
                                    className="required">*</span></label>
                            <input value={email} onChange={this.handleChange} className="input__radius" type="text" name="email" placeholder="Email"/>
                        </div>
                        <div className="login__form--password">
                            <label className="form-label-style" htmlFor="password">Password <span
                                className="required">*</span></label>
                            <input value={password} onChange={this.handleChange} className="input__radius" type="password" name="password" placeholder="Password"/>
                        </div>
                        {
                            !isSignInForm
                            &&
                            (
                                <React.Fragment>
                                <div className="login__form--username">
                                    <label className="form-label-style" htmlFor="firstName">First Name<span
                                            className="required">*</span></label>
                                    <input value={firstName} onChange={this.handleChange} className="input__radius" type="text" name="firstName" placeholder="First Name"/>
                                </div>
                                <div className="login__form--password">
                                    <label className="form-label-style" htmlFor="lastName">Last Name <span
                                        className="required">*</span></label>
                                    <input value={lastName} onChange={this.handleChange} className="input__radius" type="text" name="lastName" placeholder="Last Name"/>
                                </div>
                                </React.Fragment>
                            )
                        }
                        <div className="login__form--action">
                            <button type="submit">
                                {isSignInForm ? 'Log In' : 'Register'}
                            </button>
                        <span>
                            <Link to="#">Lost your password?</Link>
                        </span>
                        </div>
                    </form>
                    }
                </div>
            </div>
        )
    }
}

export default LoginRegister;