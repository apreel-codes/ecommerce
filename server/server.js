require('dotenv').config();

import express from 'express';
const app = express()

app.get('/', (req, res) => {
   console.log('This is home page')
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