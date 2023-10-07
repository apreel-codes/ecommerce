require('dotenv').config();

const express = require('express');
const app = express()

app.get("/home", (req, res) => {
   res.json({ "movies": 
      ["Titanic", "Tenet", " Batman"]  
   })
})

app.get('/collections', async (req, res) => {
   const collections = await brand.find({});
})

app.listen(5000, () => {console.log("Server is listening on Port 5000")
})

// '/'
// '/collections'
// '/collections/brand'
// '/collections/brand/products'
// '/collections/brand/products/productName'
// '/collections/brand/products/productName?variant=productVariantId'
// '/checkout'
// '/register'
// '/login'
// '/logout'