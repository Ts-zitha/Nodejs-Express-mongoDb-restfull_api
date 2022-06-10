const express = require('express');
const mongoose = require('mongoose');
const cors  =require('cors');

const app = express();

mongoose.connect('mongodb://localhost:27017/restfull_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', error=> console.log(error));
db.once('open', ()=>console.log('Database connected'));

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8081

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
});

