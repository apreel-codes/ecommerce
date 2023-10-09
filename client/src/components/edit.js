import { set } from "mongoose";
import React, { useState } from "react";

const EditBrand = ({ brand }) => { //this {brand} is from what was passed as props in the showBrand.js
    const [name, setName] = useState(brand.name);
    const [image, setImage] = useState(brand.image);


    //edit brand
    const updateBrand = async (e) => {
        e.preventDefault();
        try{ 
            const updatedBrand = {
                name,
                image
            }
            
        const response = await fetch(`http://localhost:5000/brands/${brand.brand_id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedBrand)
        });

        window.location = "/NewBrand";
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <div>
            {/* <!-- Button to Open the Modal, and uniquely identify the datasets to display --> */}
            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#id${brand.brand_id}`}> 
                Edit
            </button>
                <div className="modal" id={`id${brand.brand_id}`} onClick={() => setName(brand.name)}>
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h4 className="modal-title">Edit Brand</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={() => setName(brand.name) }></button>
                            </div>

                            <div className="modal-body d-grid gap-2">
                                <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} /> <br />
                                <input type="text" className="form-control" value={image} onChange={e => setImage(e.target.value)} />
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={e => updateBrand(e)}>Done</button>
                            </div>

                        </div>
                    </div>
                </div>
        </div>
    )
}

export default EditBrand;