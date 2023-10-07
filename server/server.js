require('dotenv').config();

const express = require('express');
const app = express()

app.get('/', (req, res) => {
   res.json({ movies: ["Titanic", "Tenet", " Batman"] })
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