import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import "./home.css"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddtoCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if (exists) {
            toast.error("This item is already in your cart!");
        } else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
            toast.success("Item added to cart!");
        }
    }

    const handleRemoveFromCart = id => {
        const remaining = cart.filter((ts) => ts._id !== id);
        setCart(remaining);
        toast.info("Item removed from cart!");
    }

    return (
        <div className='home-container'>
            <div className="t-shirts-container">
                {tshirts.map(tshirt => (
                    <Tshirt key={tshirt._id} tshirt={tshirt} handleAddtoCart={handleAddtoCart} />
                ))}
            </div>
            <div className="cart-container">
                <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
            </div>
            <ToastContainer />
        </div>
    );
};

export default Home;
