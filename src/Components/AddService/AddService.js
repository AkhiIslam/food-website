import React from 'react';
import '../AddService/AddService.css'
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://arcane-mountain-85085.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset();
                }
            })
    };

    return (
        <div className="add-service">
            <h2 className="text-center my-4 text-primary">Please Add a Service</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("Name", { required: true, maxLength: 100 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="Image url" />
                <input type="number" {...register("discount")} placeholder="Discount %" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;