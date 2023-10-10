import React, { useState } from 'react';
import './Input.css';
import Axios from 'axios';

const Input = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setImage(file);
    }
   
    const handleNameChange = (event) => {
            setName(event.target.value);
    };
    
    const submitForm = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();

        formData.append('image', image);
        formData.append('name', name);

            try{
                const response = await Axios.post('http://localhost:5000/brands', formData, {
                // method: "POST",
                headers: { "Content-Type": "multipart/form-data" }
                })
                .then(res => {
                    console.log(response)
                })
                //    window.location = "/NewBrand"; //redirects to the brand screen
                } catch (err) {
                    console.error(err.message)
            }
        
    setName('');
    setImage(null);
    
    };

    return (
        <div className='py-5 bg-gray-100 rounded mx-40 my-5'>
            <div className='flex flex-row justify-between w-[80%] h-[37rem] mx-auto bg-white shadow-lg rounded'>
                <div className='w-[50%] my-auto'>
                    <form className='w-[100%] px-14' 
                    onSubmit={submitForm}
                    >
                        <h1 className="font-black text-3xl mt-3">New Brand</h1>
                        <div className='items-center w-[100%]'>
                            <label className='block text-500 font-medium md:text-right mb-1 md:mb-0 pr-4 float-left mt-5'>
                                    Brand Name
                            </label>
                            <input className='border-1 border-black-500 w-[100%] h-[2rem] mt-2'
                            type='text'
                            value={name} 
                            onChange={handleNameChange}
                            />  
                        </div>

                        <div className='items-center w-full mt-4'>
                            <label className='block text-500 font-medium md:text-right mb-1 md:mb-0 pr-4 float-left' htmlFor="file_input">
                                Logo
                            </label>
                            <input class="block mt-2 w-[100%] text-sm text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
                                id="file_input" 
                                type="file" 
                                accept="image/jpeg, image/png"
                                name='image'
                                // value={image} 
                                onChange={handleImageUpload}
                            />
                        </div> 
                        <small class="mt-1 text-xs text-gray-500 dark:text-gray-300" id="file_input_help">
                            PNG or JPG(MAX. 800x400px).
                        </small>
                        <div className=''>
                            <button 
                                className='bg-black text-gray-200 py-2 px-5 w-full mt-5 rounded hover:bg-gray-900 active:bg-white active:border active:border-black-600 active:text-black-800'
                                >Add
                            </button>
                        </div>
                    </form>
                </div>
                
                <div className='addbrand h-[100%] my-auto w-[50%]'>
                </div>
            </div>
        </div>
        
    );
}
export default Input;