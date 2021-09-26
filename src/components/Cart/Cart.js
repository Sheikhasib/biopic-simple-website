import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props.cart);
    const { cart } = props;
    let total = 0;
    for(const artist of cart){
        total = total + artist.salary;
    }
    return (
        <div>
            <h3>Artist Added: {props.cart.length}</h3>
            <br />
            <h4>Total: ${total}</h4>
        </div>
    );
};

export default Cart;