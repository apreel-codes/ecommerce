import React, { useEffect, useState } from "react";

const ShowBrands = () => {

    const [brands, setBrands] = useState([]);

    //delete brand
    const deleteBrand = async (id) => {
        try {
            const deleteBrand = await fetch("http://localhost:5000/brands")
        } catch (err) {
            console.error(err.message)
        }
    }

    const getBrands = async () => {
        try {
            const response = await fetch("http://localhost:5000/brands")
            //by default, fetch is a GET request, so no need for the other parameters
            //because JSON format is returned, we have to parse it
            const jsonData = await response.json()

            setBrands(jsonData);
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getBrands();
    }, []);

    return (
        <div className='container'>
            {brands.map((brand, i) => (
                <div key={brand.brand_id}>
                    <p>{brand.image}</p>
                    <p>{brand.name}</p>
                    <p>Edit</p>
                    <button className="btn btn-danger" onClick={() => deleteBrand(brand.brand_id)}>Delete</button>
                </div>              
            ))}
        </div>
    )
};

export default ShowBrands;


