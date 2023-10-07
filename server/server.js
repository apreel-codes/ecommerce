require('dotenv').config();

import express from 'express';
const app = express()

app.get('/api', (req, res) => {
   
})

app.listen(5000, () => {console.log("Server is listening on Port 5000")
})