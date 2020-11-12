import React from 'react';
import Table from '../../components/Table/Table.container.jsx'
const Order = (props) => {
    console.log(props)
    return (
        <section className="container">
            <h1>Cart</h1>
            <Table />
            
        </section>
    )
};

export default Order;