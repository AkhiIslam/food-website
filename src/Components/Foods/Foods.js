import React from 'react';
// import '../Service/Service.css';

const Foods = ({ service }) => {
    const { name, price, img, description } = service;
    return (
        <div className="item">
            <img className="size" src={img} alt="" />
            <h3 className="text-white">{name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-3">{description}</p>
            <button className="btn btn-primary">Buy Now</button>
        </div>
    );
};

export default Foods;