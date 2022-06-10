const express = require('express');
require('./config/db.config');
const cors  =require('cors');
const productRouter = require('./routes/product.route');
const app = express();


app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8081

//route middleware
app.use('/api/product', productRouter);
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
    console.log('http://localhost:8081');
});

