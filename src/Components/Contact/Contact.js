import React from 'react';

import './Contact.css'
import img from '../Slider/image/4.jpg'

const Contact = () => {
    return (
        <div>



            <div className="contact row container mt-2">
                <div className="text-center">
                    <h2 className=" my-4 ">Contact For Help and Feedback Us</h2>

                    <img style={{ height: '600px' }}
                        className="d-block w-100" src={img} />
                </div>
                <div className="text-center col-md-5 col-sm-12 design">
                    <h2 className="m-5 text-primary" >Please Feedback Us</h2>
                    <form className="text-center">
                        <input className="mb-3 text-center border border-primary border-2 rounded" placeholder="Your Name" />
                        <br />
                        <input className="mb-3 text-center border border-primary border-2 rounded" type="email" name="" placeholder="Your Email" />
                        <br />

                        <textarea class="m-auto mb-2 form-control border border-primary border-2 rounded w-25" id="exampleFormControlTextarea1" rows="3"></textarea>

                        <input className="mb-3 btn-primary border-0 rounded p-2" type="submit" value="Submit" />
                    </form>

                </div>
                <div className="col-md-2 col-sm-12">

                </div>

                <div className="text-center col-md-5 col-sm-12 design text-black">
                    <h2 className="m-5">Contact Us</h2>
                    <div className="m-auto my-5">
                        <h2>Phone: 0196566161</h2>
                        <h3>Email us: jahidempire@gmail.com</h3>
                        <h4>Location: Mirpur,Dhaka</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;