import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import "./home.css"

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);
    const handleAddtoCart = tshirt => {
        console.log(tshirt);
    }
    return (
        <div className='home-container'>
            <div className="t-shirts-container">
                {tshirts.map(tshirt => <Tshirt key={tshirt._id} tshirt={tshirt} handleAddtoCart={handleAddtoCart} />)}
            </div>
            <div className="cart-container">
                <Cart />
            </div>
        </div>
    );
};

export default Home;