import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Extra from '../Extra/Extra';
import Service from '../Service/Service';
import Slider from '../Slider/Slider';
import '../Service/Service.css'

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://arcane-mountain-85085.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            });
    }, []);

    return (
        <div>
            <div>
                <Slider></Slider>
            </div>
            <div>

                <h1 className="text-center text-primary my-3">Our Services</h1>

                <div className="service-container">
                    {
                        products.map(product => <Service
                            key={product.key}
                            product={product}
                        >
                        </Service>)
                    }
                </div>

            </div>
            <div>
                <Extra></Extra>
            </div>
            <div className="p-4" style={{ backgroundColor: '#EB002A', color: 'wheat' }}>


                <div className="text-center " >
                    <h2>HOW CAN WE HELP YOU?</h2>
                    <p>Let us bring our expertise and custom solutions to your business.</p>
                    <Link to="/contact"><button className="btn btn-primary my-2" >Contact Us</button></Link>

                </div>

            </div>
        </div>
    );
};

export default Home;