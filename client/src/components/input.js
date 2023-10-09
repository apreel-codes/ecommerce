import React, { useState } from 'react';

const Input = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try{
            const Brand = {
                name,
                image
            }

            // sending the request
            const response = await fetch("http://localhost:5000/brands", {
                // by default, fetch uses GET method, so specify POST as method
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(Brand)
            });
            console.log(Brand);
           window.location = "/NewBrand"; //redirects to the brand screen
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <div>
            <h1 className='text-center mt-3'>Brand Input</h1>
            <form className='mt-3' onSubmit={onSubmitForm}>
                <label>Name</label>
                <input type='text' className='form-control' value={name} onChange={e => setName(e.target.value)}/>
                <label>Logo</label>
                <input type='text' className='form-control' value={image} onChange={e => setImage(e.target.value)}/>
                <div className='mt-4 d-grid gap-2'>
                    <button className='btn btn-success'>Add</button>
                </div>
            </form>
        </div>
    )
}

export default Input;