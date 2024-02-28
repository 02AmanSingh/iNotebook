const mongoose = require("mongoose");
const mongoURI = 'mongodb://localhost:27017/Databases';

const connectToMongo = ()=>{
    mongoose.connect(mongoURI)
    .then(()=> console.log("connected to Database."))
    .catch((err) => console.log(`Error: ${err}`));
}


module.exports = connectToMongo;
