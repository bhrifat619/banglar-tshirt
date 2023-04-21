import React from 'react';
import './t-shirt.css'

// from home
const Tshirt = ({ tshirt, handleAddToCart }) => {
    const { _id, price, picture, name, gender } = tshirt
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <h4>Price:${price}</h4>
            <button onClick={() => handleAddToCart(tshirt)}>Buy now</button>
        </div>
    );
};

export default Tshirt;