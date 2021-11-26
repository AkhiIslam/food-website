import React from 'react';
import { Link } from 'react-router-dom';
import '../Service/Service.css'

const Service = (props) => {
    // console.log(props);
    const { _id, Name, img, price, discount, description } = props.product;

    return (
        <div className="item1">

            <img className='size' src={img} alt="" />


            <h4 className="product-name">Name: {Name}</h4>
            <h3>Price: {price}</h3>

            <h4>{description}</h4>

            <h2 className="text-warning">Offers</h2>

            <h3>DisCount: {discount}% for 7 days</h3>

            <br />
            <Link to={`/service/${_id}`}>
                <button className="btn btn-primary mb-2">Details</button>
            </Link>


        </div>
    );
};

export default Service;