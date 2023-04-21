import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './home.css'
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData()
    const [cart, setCart] = useState([]);

    const handleAddToCart = (tshirt) => {
        const exist = cart.find(ts => ts._id === tshirt._id);
        if (!exist) {
            let newCart = [...cart, tshirt];
            setCart(newCart)
        }
        else{
            toast('You can buy only one t-shirt from one shop')
        }
    }
    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining)
    }
    return (
        <div className="home-container">
            <div className='tshirts-container'>
                {
                    tshirts.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;