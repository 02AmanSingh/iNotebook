const connectToMongo = require('./db');
const express = require('express');

const app = express();
const port = 5000;

app.use(express.json());

//Database Connect..
connectToMongo();

//Available Routes...
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));


//Listening Port..
app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}`)
});