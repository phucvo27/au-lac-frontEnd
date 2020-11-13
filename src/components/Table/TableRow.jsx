import React from 'react';
import { Link } from 'react-router-dom';
class TableRow extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            quantity: this.props.product.quantity,
            isModified: false
        }
    }
    increase = ()=>{
        const { quantity } = this.state;
        this.setState(()=>{
            return {
                quantity: quantity + 1,
                isModified: true
            }
        })
    }

    decrease = () => {
        const { quantity } = this.state;
        if(quantity > 1){
            this.setState(()=>{
                return {
                    quantity: quantity - 1,
                    isModified: true
                }
            })
        }
    }
    cancel = ()=>{
        this.setState(()=>{
            return {
                quantity: this.props.product.quantity,
                isModified: false
            }
        })
    }
    update = () => {
        const newItem = {
            ...this.props.product,
            quantity: this.state.quantity
        }
        console.log(newItem)
        this.props.update(newItem);
        this.setState(()=>{
            return {
                isModified: false
            }
        })
    }

    render(){
        const { product, remove } = this.props;
        const { quantity } = this.state;
        return (
            <tr key={product.id}>
                <td className="table-remove">
                    <button onClick={()=> {remove(product)}}>
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
                <td className="table-image">
                    <Link to={`/product/${product.id}`}>
                        <img src={product.image} alt={product.name} />
                    </Link>
                </td>
                <td className="table-p-name"><Link to={`/product/${product.id}`}>{product.name}</Link></td>
                <td className="table-p-price"><p>{product.price}đ</p></td>
                <td className="table-p-qty">
                    <div className="table__actions">
                        <button className={this.state.isModified ? 'btn btn-cancel active': 'btn'} onClick={this.cancel}>
                            <i className="fas fa-times"></i>
                        </button>
                        <div className="table__actions--change">
                            <button onClick={this.decrease}>-</button>
                            <span>{quantity}</span>
                            <button onClick={this.increase}>+</button>
                        </div>
                        <button className={this.state.isModified ? 'btn btn-check active': 'btn'} onClick={this.update}>
                            <i className="fas fa-check"></i>
                        </button>
                    </div>
                </td>
                <td className="table-total"><p>{(product.price * product.quantity)}đ</p></td>
            </tr>
        )
    }
    
}


export default TableRow;