import React from 'react';
import Table from '../../components/Table/Table.jsx'
const Order = (props) => {
    console.log(props)
    return (
        <section className="container pt-10">
            <h1>Items on Cart</h1>
            <Table />
            <div>
                <button onClick={()=>{props.history.push('/checkout')}}>Check Out</button>
            </div>
        </section>
    )
};

export default Order;