import React from 'react';
import "./tshirt.css"

const Tshirt = ({ tshirt, handleAddtoCart }) => {
    const { _id, name, price, gender, picture } = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: {price}</p>
            <button onClick={handleAddtoCart}>Buy Now</button>
        </div>
    );
};

export default Tshirt;