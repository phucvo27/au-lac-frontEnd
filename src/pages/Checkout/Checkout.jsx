import React from 'react';
import InputGroup from '../../components/InputGroup/InputGroup.jsx';

class Checkout extends React.Component {

    render(){
        return (
            <div className="container pt-10">
                <h1>This is Checkout Page</h1>
                <form className="form__checkout pt-5">
                    <InputGroup 
                        type="text"
                        placeholder="please enter your name"
                        label="Full Name"
                    
                    />
                    <InputGroup 
                        type="text"
                        placeholder="please enter your phone"
                        label="Phone"
                    
                    />
                    <InputGroup 
                        type="text"
                        placeholder="please enter your address"
                        label="Address"
                    
                    />
                    <InputGroup 
                        type="text"
                        placeholder="please enter your address"
                        label="Address"
                    
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}


export default Checkout;