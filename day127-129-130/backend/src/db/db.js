require('dotenv').config();
const mongoose = require('mongoose');

function connectdb(){

    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
          console.log("db connect susessfully")
    })
    .catch(()=>{
        console.log("Error to connecting to db",err);
    })
}

module.exports = connectdb;
