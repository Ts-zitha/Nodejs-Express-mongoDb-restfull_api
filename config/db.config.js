
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/restfull_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', error=> console.log(error));
db.once('open', ()=>console.log('Database connected'));
