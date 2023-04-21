import React from 'react';
import './cart.css'
// from home

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if(cart.length==0){
        message=<p>Please buy some t-shirts</p>
    }
    return (
        <div>
            <h2 className={cart.length ===1 ? 'blue': 'orange'}>Order:{cart.length}</h2>
            <p className={`bold ${cart.length==1?'blue':'lightgreen'}`}>Something</p>
            {message}
            {cart.length>2 ? <span className='yellow'>Aro kino taka di</span>:<span>Fokir polapain</span>}
            {
                cart.map(tshirt =>
                    <p key={tshirt._id}>
                        {tshirt.name}
                        <button onClick={() => handleRemoveFromCart(tshirt._id)}>x</button>
                    </p>)
            }
            {
                cart.length == 2 && <p>Savvas bagina aro kino</p>
            }
            {
                cart.length ==3 || <h3>Tinta to hoilo na</h3>
            }
        </div>
    );
};

export default Cart;
/**
 * Conditional Rendering
 * 1. Use if else to set a variable that will contain an element
 * 2.Ternary: condition ? 'for true' : ' false'
 * 3.Logical &&: (if the condition is true then the next thing will be displayed)
 * 4.Logical || (if the condition is false then the next thing will be displaued)
 * */ 
/**
 * Conditional Css Classes
 * 
*/