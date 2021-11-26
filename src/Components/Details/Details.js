import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '../Service/Service.css';

const Details = () => {
    const [details, setDetails] = useState([])
    const [singleService, setSingleService] = useState({})
    const { serviceId } = useParams();
    useEffect(() => {

        fetch('https://arcane-mountain-85085.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setDetails(data))
        // .then(data => console.log(data))

    }, [])
    useEffect(() => {
        const foundServices = details.find(detail => detail._id == serviceId)
        setSingleService(foundServices)
    }, [details])

    return (

        <div>




            <h2 className="text-primary my-5 text-center">Services Details</h2>
            <div className="item" style={{ width: '350px', margin: 'auto' }}>

                <img className="size " src={singleService?.img} alt="" />
                <h2 className="text-white">Name: {singleService?.Name}</h2>
                <h3>Description: {singleService?.description}</h3>
                <h3>Price: {singleService?.price}</h3>

                <button className="btn btn-primary">Orders</button>



            </div>
        </div>

    );
};

export default Details;