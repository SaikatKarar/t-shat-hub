import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please add some products</p>
    } else {
        message = <div>
            <p>Thanks for wasting your money</p>
        </div>
    }
    return (
        <div>
            <h2>Order Summary:{cart.length}</h2>
            {message}
            {cart.length > 2 ? <span>Aro Kino</span> : <span>folira</span>}
            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}>Remove</button></p>)
            }
            {
                cart.length === 2 && <p>Gift Voucher: FREE</p> // 3
            }
            {
                cart.length === 2 || <p>Buy two products and you will get one voucher</p> // 4
            }
        </div>
    );
};

export default Cart;


/**
 * CONDITIONAL RENDERING
 * 1. use `if` or `if else` to set a variable that will contain an element, components.
 * 2. ternary operator: condition ? 'for true' : 'false'
 * 3. Logical &&: (if the condition is true then the next thing will be displayed)
 * 4. Logical || (if the condition is false then next thing will be displayed)
 * */

/**
 * ADD CONDITIONAL CSS CLASS
 * 1. USE ternary
 * 2. ternary inside template string
 * */ 