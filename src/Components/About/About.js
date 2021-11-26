import React from 'react';
import { Link } from 'react-router-dom';
import img from '../Slider/image/5.jpg'

const About = () => {
    return (
        <div className="text-center mt-3">
            <div>
                <img className=' w-75 m-auto' src={img} alt="" />
                <h2 className='text-primary mt-3'>Why Food Delivery Services</h2>
            </div>
            <div className='m-5'>
                <h3>12+ years of excellence, expertise and quality.</h3>
                <h6>For over 12 years, we’ve delivered the excellence, expertise, and quality products our customers need to design successful food operations and experiences. We’ve grown to become the largest family-operated broadline food distribution company in Mirpur by upholding the same business approach since 2008—being passionately committed to the people we serve.</h6>
                <Link to='/services'><button className='btn btn-primary mt-2'>Order Now</button></Link>

            </div>
        </div>
    );
};

export default About;