require('dotenv').config();


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const methodOverride = require('method-override');
const pool = require("./database");
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const app = express();

//middleware
app.use(cors());
// transfer data from FE to BE as json format
app.use(express.json()); //allows us to access req.body


// brand ROUTES

//create a brand
app.post("/brands", upload.single('image'), async (req, res) => {
    try {
        console.log("req.body", req.body);
        console.log("req.file", req.file);
        // res.send(req.body, req.file);
        // res.status(200).send(req.file);
        // console.log(feedback);
        // console.log(res.body);
        // res.status(200).send(req.body, req.file);
        // const { name, image } = req.body;
        // const newBrand = await pool.query("INSERT INTO brand (name, image) VALUES($1, $2) RETURNING * ", //insert new brand into a brand table, and the column to add to is the name column,
        // [name, image] //to specify what exactly is coming from the client side, which will be the value of the $1 //RETURNING ensures we return back the data
        // );
        // res.json(newBrand.rows[0])
    } catch (err) {
        console.error(err.message); 
    }
})

//get all brands
app.get("/brands", async (req, res) => {
    try {
        const allBrands = await pool.query("SELECT * FROM brand");
        res.json(allBrands.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//get a brand
app.get("/brands/:brandName", async (req, res) => {
    try {
        const { brandName } = req.params;
        const brand = await pool.query("SELECT * FROM brand WHERE name = $1", [brandName]);

        res.json(brand.rows)
    } catch (err) {
        console.error(err.message);
    }
})

//update a brand
app.put("/brands/:brand_id", async (req, res) => {
    try {
        const { brand_id } = req.params;
        const { name, image } = req.body;
        const updatedBrand = await pool.query("UPDATE brand SET (name, image) = ($1, $2) WHERE brand_id = $3", //this is to set the name column to whatever it is set to
        [name, image, brand_id]);
        
        res.json("Brand name was updated!")
    } catch (err) {
        console.error(err.message);
    }
})

// delete a brand
app.delete("/brands/:brand_id", async (req, res) => {
    try{
        const { brand_id } = req.params;
        const deleteBrand = await pool.query("DELETE FROM brand WHERE brand_id = $1", [brand_id]);

        res.json("Brand was deleted")
    } catch (err) {
        console.error(err.message);
    }
})


// product ROUTES


app.listen(5000, () => {console.log("Server is listening on Port 5000")
})



// '/'
// '/collections'
// '/brands'
// '/brands/brand'
// '/brands/brand/products'
// '/brands/brand/products/productName'
// '/brands/brand/products/productName?variant=productVariantId'
// '/checkout'
// '/register'
// '/login'
// '/logout'


// app.post("/brands", async (req, res) => {
//     try {
//         const { name, description, type } = req.body;
        
//         const newBrand = await pool.query("INSERT INTO brand (name, description, type) VALUES($1, $2, $3) RETURNING * ", //insert new brand into a brand table, and the column to add to is the name column,
//         [name, description, type] //to specify what exactly is coming from the client side, which will be the value of the $1 //RETURNING ensures we return back the data
//         );
//         res.json(newBrand.rows[0])
//     } catch (err) {
//         console.error(err.message);
//     }

// })