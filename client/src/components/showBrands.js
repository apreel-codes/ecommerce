import React, { useEffect, useState } from "react";
import EditBrand from "./Edit";

const ShowBrands = () => {

    const [brands, setBrands] = useState([]);

    //delete brand
    const deleteBrand = async (id) => {
        try {
            const deleteBrand = await fetch(`http://localhost:5000/brands/${id}`, {
                method: "DELETE"
            });

            //to remove deleted items from page
            setBrands(brands.filter(brand => brand.brand_id !== id))
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
        <div>
            {brands.map((brand, i) => (
                <div key={brand.brand_id}>
                    <p>{brand.image}</p>
                    <p>{brand.name}</p>
                    <div>
                        <EditBrand brand={brand} />
                    </div>
                    <button className="btn btn-danger mt-3" onClick={() => deleteBrand(brand.brand_id)}>Delete</button>
                </div>              
            ))}
        </div>
    )
};

export default ShowBrands;


